<script lang="ts">
    import { Faceplate, Knob, Patch, Bang } from '@patchcab/core';
    import { Signal, } from 'Tone';
    import Indicator from './Indicator.svelte';
 
    const STEPS = 4;
  
    export let state = {
      seqSteps: Array(STEPS).fill(0)
    };
  
    let currentStep = 0;
  
    const cvOut = new Signal();

    const resetIn = new Bang((time, on, off) => {
        currentStep = 0;
    }); 

    const advanceIn = new Bang((time, on, off) => {
        currentStep++;
        currentStep = currentStep % STEPS;
        let val = state.seqSteps[currentStep];
        cvOut.setValueAtTime(val, time);
    });
  </script>
  
  <style>
    steps {
        position: absolute;
        top: 0px;
    }  
  </style>
  
  <Faceplate title="CVSEQ" color="#1D1E22">
      <steps>
        {#each state.seqSteps as cv, stepIndex}
            <Knob size="s"
              x={20}
              y={stepIndex * 48 + 60} 
              bind:value={state.seqSteps[stepIndex]}
              min={0}
              max={1.0}
              precision={2}
            >
          </Knob>
          <Indicator x={68} y={stepIndex * 48 + 76} active={stepIndex == currentStep}></Indicator>
        {/each}
      </steps>
    <Patch label="out" x={62} y={48 + STEPS * 64} name="out-cv" output={cvOut} />
    <Patch label="adv" x={18} y={STEPS * 64} name="advance" input={advanceIn} />
    <Patch label="rst" x={62} y={STEPS * 64} name="reset" input={resetIn} />
  </Faceplate>
  