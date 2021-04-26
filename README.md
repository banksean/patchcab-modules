# patchcab-modules

Modules for [patchcab](https://github.com/spectrome/patchcab/).

# CVSequencer
![screenshot of the CV Sequencer module](packages/cvsequencer/modules/cvsequencer.png)
- 4 step "cv" sequencer
- steps have knobs to set values in [0, 1]
- advance and reset gate inputs

# AdditiveOSC
![screenshot of the Additive Oscillator module](packages/additiveosc/modules/additiveosc.png)
- raw frequency value input for the fundamental
- faders to control each of the first 16 harmonic overtones of the fundamental

# MIDIIn
![screenshot of the Midi In module](packages/midiin/modules/midiin.png)
- monophonic
- selectable midi channel
- note output is raw frequency value (12 tone equal temperment)

# Polyrhythm
![screenshot of the Polyrhythm module](packages/polyrhythm/modules/polyrhythm.png)
- gate sequencer inspired by the sequencer section of the Moog Subharmonicon
- "rhythm" knobs control the rate of each of four distinct clock dividers
- "offset" knobs control the offset (phase) of each of the four clock dividers
- two trigger/gate outputs
- each rhythm/offset pair can be assigned to any combination of the two trigger outputs by activating the switch located at the output's row and rhythm/offset pair's column
