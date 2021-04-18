<script lang="ts">
    import { Faceplate, Knob, Patch, Switch } from '@patchcab/core';
    import { Signal, Clock, Oscillator, Scale, now } from 'Tone';
    import { Bang } from '../public/js/core';
    import Indicator from './Indicator.svelte';
    let inputs, outputs;

    export let state = {
        channel: 0,
        velocityAftertouch: false,
        input: 0 // If you have multiple midi interfaces, e.g.
    };

    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);

    const gateOut = new Bang();
    const scale = new Scale(0, 127);
    const noteCv = new Signal().connect(scale);
    const velCv = new Signal().connect(scale);
    const modCv = new Signal().connect(scale);
    let keyDown = false;

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
        gateOut.bang(now(), true, false);
        noteCv.setValueAtTime(note, now());
        velCv.setValueAtTime(velocity, now());
        keyDown = true;
    }

    function noteOff(note, velocity) {
        gateOut.bang(now(), false, true);
        velCv.setValueAtTime(velocity, now());
        keyDown = false;
    }

    function controlChange(control, value) {
        modCv.setValueAtTime(value, now());
    }

    function channelAftertouch(velocity) {
        if (!state.velocityAftertouch) {
            return;
        }
        velCv.setValueAtTime(velocity, now());
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
    <Indicator y={128} x={40} active={keyDown}></Indicator>
    <Patch y={170} output={noteCv} name="cv-note" label="note cv"></Patch>
    <Patch y={220} output={velCv} name="cv-vel" label="vel cv"></Patch>
    <Switch
        x={40}
        y={220}
        value={state.velocityAftertouch === true}
        onToggle={()=> {state.velocityAftertouch = !state.velocityAftertouch}}
        square
        label="aft"
    />
    <Patch y={270} output={modCv} name="cv-mod" label="mod cv"></Patch>
    </midi>
</Faceplate>
