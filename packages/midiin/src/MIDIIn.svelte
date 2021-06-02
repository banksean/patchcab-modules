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

    // This isn't available during screenshotting, so without this guard
    // it hangs and you get a 'loading' image instead of a picture of the module.
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess()
            .then(onMIDISuccess, onMIDIFailure);
    }

    const gateOut = new Bang();
    const start = new Bang();
    const stop = new Bang();
    const clock = new Bang();
    const noteCv = new Signal();
    const unitCv = new Signal();
    const velCv = new Signal();
    const modCv = new Signal();
    let keysDown = new Set();

    let lastClock = 0;

    let midiStatus = 'connecting...';

    function onMIDISuccess(midiAccess) {
        midiStatus = 'connected';
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

        // System Messages:
        if (midiMessage.data[0] >> 4 == 0xf) {
            console.log('system message', midiMessage.data, midiMessage.data[0] & 0xf);
            switch (midiMessage.data[0] & 0xf) {
                case 8:
                    // TODO: maybe add a built-in divider. MIDI is 24ppq, which is kinda fast.
                    let n = now();
                    clock.bang(now(), true, false);
                    if (lastClock) {
                        /*
                        120bpm = 120*24
                        */
                        let clcksps = 1000/(n-lastClock);
                        let qps = clcksps/24;
                        let bpm = qps/60;
                        console.log('bpm', bpm);
                    }
                    lastClock = n;
                    break;
                case 10:
                    start.bang(now(), true, false);
                    break;
                case 12:
                    stop.bang(now(), true, false);
                    break;
            }
            return;
        }

        // Channel Voice Messages:
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
        console.log('note on', p); // This frequency looks correct, but OSC is playing something way too high.
        // Ok I think I know what's up. OSC expects an fm input in [0, 1], and this is sending Hz, which is much higher.
        // See https://github.com/spectrome/patchcab/blob/main/modules/src/OSC.svelte
        // There's an oscillator set with a frequency value set by the big knob.
        // There's an fm initialized to Scale(40, 2400), but changing the fm knob modifies it to be range:
        //     [big knob - big knob * fm knob, big knob + (2400 - big knob) * fm knob]
        // So if fm knob is set to 1, then the fm Scale will take the input signal and assume it's [0, 1], then map it linearly to the above range.
        // And even if we re-map the midi note values to 0,1 that's going to produce a non-standard scale that doesn't track with anything else.
        // Contrast this to VCV Rack's more direct reflection of Eurorack standards: https://vcvrack.com/manual/VoltageStandards
        noteCv.setValueAtTime(p, now());
<<<<<<< HEAD
        unitCv.setValueAtTime(note/127.0, now());
=======
>>>>>>> main
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
            let p = Frequency(stillDown[0], "midi").toFrequency();
            console.log('note off', p);
            noteCv.setValueAtTime(p, now());
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
        midiStatus = 'disconnected';
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
<<<<<<< HEAD
    <Indicator x={40} active={inputs != undefined} label="{midiStatus}"/>
=======
    <Indicator x={20} active={inputs != undefined} label="{midiStatus}"/>
>>>>>>> main
    <Knob size="s"
        y={40}
        x={24}
        bind:value={state.channel}
        min={0}
        max={15}
        precision={0}
        label="ch {state.channel + 1}"
    ></Knob>
    <Patch y={120} output={gateOut} name="gate" label="gate"></Patch>
    <Indicator y={128} x={40} active={keysDown.size > 0}></Indicator>
    <Patch y={170} output={noteCv} name="cv-note" label="f"></Patch>
    <Patch y={170} x={40} output={unitCv} name="cv-unit" label="unit"></Patch>
    <Patch y={220} output={velCv} name="cv-vel" label="vel"></Patch>
    <Switch
        x={40}
        y={220}
        value={state.velocityAftertouch === true}
        onToggle={()=> {state.velocityAftertouch = !state.velocityAftertouch}}
        square
        label="aftch"
    />
    <Patch y={270} output={modCv} name="cv-mod" label="mod"></Patch>

    <Patch x={80} y={120} output={start} name="start" label="start"></Patch>
    <Patch x={80} y={170} output={stop} name="stop" label="stop"></Patch>
    <Patch x={80} y={220} output={clock} name="clock" label="clck"></Patch>
    </midi>
</Faceplate>
