<script lang="ts">
    import { Faceplate, Knob, Patch, Switch } from '@patchcab/core';
    import { Signal, Clock, Oscillator, Frequency, now } from 'Tone';
    import { Bang } from '../public/js/core';
    import { Indicator } from '@banksean/patchcab-ui';
    
    let inputs, outputs;

    export let state = {
        channel: 0,
        velocityAftertouch: false,
        input: 0 // If you have multiple midi interfaces, e.g.
    };

    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);

    const gateOut = new Bang();
    const noteCv = new Signal();
    const velCv = new Signal();
    const modCv = new Signal();
    let keysDown = new Set();

    function onMIDISuccess(midiAccess) {
        inputs = midiAccess.inputs;
        outputs = midiAccess.outputs;
        for (var input of midiAccess.inputs.values()) {
            // TODO: Make some kind of input selector if there
            // are multiple inputs. The current behavior will
            // respond to events on *any* connected interface.
            input.onmidimessage = onMIDIMessage;
        }
    }

    function onMIDIMessage(midiMessage) {
        // TODO: Clean this up and catch more corner cases (like treating a note-on
        // event with 0 velocity as a note-off event, deal with legato, glide etc).
        // https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
        // There may exist some libraries to help with this, but keeping the dependencies
        // low for maintenance's sake.
        const channel =  midiMessage.data[0] & 0xf;
        if (channel != state.channel) {
            return;
        }
        switch (midiMessage.data[0] >> 4) {
            case 8:
                noteOff(midiMessage.data[1], midiMessage.data[2]);
                break;
            case 9:
                noteOn(midiMessage.data[1], midiMessage.data[2]);
                break;
            case 10:
                break;
            case 11:
                controlChange(midiMessage.data[1], midiMessage.data[2])
                break;
            case 12:
                // program change
                break;
            case 13:
                channelAftertouch(midiMessage.data[1]);
                break;
            case 14:
                // pitch bend
                // TODO: implement this
                break;
        }
    }

    function noteOn(note, velocity) {
        keysDown.add(note);
        if (keysDown.size == 1) {
            gateOut.bang(now(), true, false);
        }
        // TODO: Glide
        let p = Frequency(note, "midi").toFrequency();
        console.log('note on', p);
        noteCv.setValueAtTime(p, now());
        velCv.setValueAtTime(velocity/127.0, now());
        // Sigh, this is so Svelte's templating or whatever it is updates the
        // gate's indicator light.
        keysDown = new Set(keysDown);
    }

    function noteOff(note, velocity) {
        keysDown.delete(note);
        if (keysDown.size == 0) {
            gateOut.bang(now(), false, true);
        }
        velCv.setValueAtTime(velocity/127.0, now());
        // If there were other keys still down, switch
        // output CV to match it's respective frequency.
        const stillDown = Array.from(keysDown);
        if (stillDown.length > 0) {
            // TODO: Glide
            noteCv.setValueAtTime(Frequency(stillDown[0], "midi").toFrequency(), now());
        }
        // Sigh, this is so Svelte's templating or whatever it is updates the
        // gate's indicator light.
         keysDown = new Set(keysDown);
    }

    function controlChange(control, value) {
        modCv.setValueAtTime(value/127.0, now());
    }

    function channelAftertouch(velocity) {
        if (!state.velocityAftertouch) {
            return;
        }
        velCv.setValueAtTime(velocity/127.0, now());
    }

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }
</script>
<style>
    midi {
        position: absolute;
        top: 50px;
        left: 20px;
    }
</style>
<Faceplate title="MIDI IN" color="#1D1E22">
    <midi>
    <Indicator x={20} active={inputs != undefined} label="connected"/>
    <Knob size="s"
        y={40}
        x={4}
        bind:value={state.channel}
        min={0}
        max={15}
        precision={0}
        label="ch {state.channel + 1}"
    ></Knob>
    <Patch y={120} output={gateOut} name="gate" label="gate"></Patch>
    <Indicator y={128} x={40} active={keysDown.size > 0}></Indicator>
    <Patch y={170} output={noteCv} name="cv-note" label="f"></Patch>
    <Patch y={220} output={velCv} name="cv-vel" label="vel"></Patch>
    <Switch
        x={40}
        y={220}
        value={state.velocityAftertouch === true}
        onToggle={()=> {state.velocityAftertouch = !state.velocityAftertouch}}
        square
        label="aft"
    />
    <Patch y={270} output={modCv} name="cv-mod" label="mod"></Patch>
    </midi>
</Faceplate>
