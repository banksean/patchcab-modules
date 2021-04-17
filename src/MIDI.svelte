<script lang="ts">
    import { Faceplate, Knob, Patch } from '@patchcab/core';
    import { Signal, Clock, Oscillator, Scale, now } from 'Tone';
    import { Bang } from '../public/js/core';
    import Indicator from './Indicator.svelte';
    let inputs, outputs;

    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);

    const gateOut = new Bang();
    const scale = new Scale(0, 127);
    const cvOut = new Signal().connect(scale);
    let keyDown = false;

    function onMIDISuccess(midiAccess) {
        console.log(midiAccess);
        inputs = midiAccess.inputs;
        outputs = midiAccess.outputs;
        for (var input of midiAccess.inputs.values()) {
            // TODO: Make some kind of input selector if there
            // are multiple inputs.
            input.onmidimessage = getMIDIMessage;
        }
    }


    function getMIDIMessage(midiMessage) {
        // https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message
        const channel =  midiMessage.data[0] & 15;
        console.log('message on channel ' + channel);
        switch (midiMessage.data[0] >> 4) {
            case 8:
                console.log('note off');
                noteOff(midiMessage.data[1], midiMessage.data[2]);
                break;
            case 9:
                console.log('note on');
                noteOn(midiMessage.data[1], midiMessage.data[2]);
                break;
        } 
        console.log(midiMessage);
    }

    function noteOn(note, velocity) {
        gateOut.bang(now(), true, false);
        // Just scale it at 1/v per octave for now. Add some custom scaling later.
        // Midi notes go 0 (C0) to 127 (G something)
        // Should we set this value on cvOut, or on scale? I bet cvOut, but verify.
        cvOut.setValueAtTime(note, now());
        keyDown = true;
    }

    function noteOff(note, velocity) {
        gateOut.bang(now(), false, true);
        keyDown = false;
    }

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }
</script>
<style>
    midi {
        position: absolute;
        top: 60px;
        left: 40px;
    }
</style>
<Faceplate title="MIDI" color="#1D1E22">
    <midi>
    <Indicator active={inputs != undefined} label="connected"/>
    <Patch y={60} output={gateOut} name="gate" label="gate"></Patch>
    <Indicator y={60} x={20} active={keyDown}></Indicator>
    <Patch y={100} output={cvOut} name="cv" label="cv"></Patch>
    </midi>
</Faceplate>
