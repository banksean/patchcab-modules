<script lang="ts">
  import { Faceplate, Knob, Patch } from '@patchcab/core';
  import { Signal, Oscillator, Scale} from 'Tone';
  import Fader from './Fader.svelte';

  const PARTIALS = 16;
  
  export let state = {
    // More precisely, these are *harmonic* partials, or whole number multiples
    // of the fundamental frequency.
    // Partials contains the amplitue of each partial, from lowest to highest.
    partials: Array(PARTIALS).fill(0).map(()=>Math.random()),
    fundamental: 110,
    fm: 1
  };

  const MIN = 2;
  const MAX = 120;
  
  const oscillator = new Oscillator(state.fundamental).start();
  oscillator.partialCount = PARTIALS;

  const scale = new Scale(MIN, MAX);

  const scales = Array(PARTIALS).fill(0).map(()=>new Scale(0.0, 1.0));

  $: oscillator.frequency.value = state.fundamental;
  $: oscillator.type = 'custom';
  // TODO: figure out how to drive partials by incoming CV. Since these are
  // not "a-rate" parameters in the WebAudio API, it's not obvious how to do this here.
  $: oscillator.partials = [...state.partials.map((p, i) => {return p})]; 
  $: scale.min = Math.max(MIN, state.fundamental - state.fundamental * state.fm);
  $: scale.max = Math.min(MAX, state.fundamental + (MAX - state.fundamental) * state.fm);

  const onConnect = (nodes: number) => {
    if (nodes) {
      scale.connect(oscillator.frequency);
    } else {
      scale.disconnect(oscillator.frequency);
      oscillator.frequency.overridden = false;
      oscillator.frequency.value = state.fundamental;
    }
  };
  
  const onPartialConnect = (nodes: number) => {
    console.log('connected to partial: ', nodes);
  };

 </script>

 <style>
    partials {
        position: absolute;
        top: 40px;
        left: 20px;
    }  
  </style>
  
  <Faceplate title="HARMONIC OSC" color="#1D1E22">
      <partials>
        <Fader
          y={10}
          x={0}
          bind:value={state.fundamental} min={MIN} max={MAX} steps={500} 
          label="FUND"/>
        {#each state.partials as _, partialIndex}
            <Fader
              y={10}
              x={(partialIndex+1) * 48} 
              bind:value={state.partials[partialIndex]}
              min={0}
              max={1.0}
              precision={2}
              label="H{partialIndex + 1}"
            />
            <Patch
              x={(partialIndex+1)*48 + 8}
              y={250}
              name="partial-{partialIndex}"
              input={scales[partialIndex]}
             />
        {/each}
        </partials>
        <Patch x={28} y={290} name="in-cv" input={scale}  {onConnect} />
        <Knob size="s" x={18} y={320} label="" bind:value={state.fm} min={0} max={1.0} precision={2}></Knob>
        <Patch label="out" x={(PARTIALS+1)*48} y={330} name="out-cv" output={oscillator} />
    </Faceplate>
  