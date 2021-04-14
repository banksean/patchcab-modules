<script lang="ts">
  import { Faceplate, Knob, Patch, Switch, Bang } from '@patchcab/core';

  const DIVS = 4;
  const SEQS = 2;

  export let state = {
    // The clock dividers:
    dividers: Array(DIVS).fill(1),
    // The clock offsets:
    offsets: Array(DIVS).fill(0),
    // The sequence assignment toggles: one per DIV, per row:
    seqToggles: Array(SEQS).fill(Array(DIVS).fill(0)),
  };

  let globalCounter = 0;

  // One Bang for each row.
  const gates = Array(SEQS)
    .fill(true)
    .map(() => new Bang());

  const clock = new Bang((time, on, off) => {
    const fire = Array(SEQS).fill(false);

    for (let i = 0; i < DIVS; i++) {
      let r = state.dividers[i];
      if ((globalCounter + state.offsets[i]) % r == 0) {
        // The output gates for seqencers assigned to this rhythm should fire now.
        for (let j = 0; j < SEQS; j++) {
          if (state.seqToggles[j][i] == 1) {
            // Output gate for sequence j should fire now.
            fire[j] = true;
          }
        }
      }
    }

    for (let i = 0; i < SEQS; i++) { 
      if (fire[i]) {
        gates[i].bang(time, true, true);
     }
    }
    globalCounter++;
  });

  const reset = new Bang(() => {
    globalCounter = 0;
  });

  const toggle = (seqIndex, rhythmIndex) => {
    const clone = [];
    for (let i = 0; i < SEQS; i++) {
      clone[i] = state.seqToggles[i].slice(0);
      if (i === seqIndex) {
        clone[i][rhythmIndex] = clone[i][rhythmIndex] === 1 ? 0 : 1;
      }
    }
    state.seqToggles = clone;
  };
</script>

<style>
  dividers, offsets {
    position: absolute;
    left: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    width: calc(100% - 40px);
    margin-bottom: 8px;
  }

  toggles {
    position: absolute;
    left: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    width: calc(100% - 40px);
    height: 20px;
    margin-bottom: 8px;
  }

  .division-heading {
    position: absolute;
    font-size: x-small;
  }

  .row-title {
    position: absolute;
    left: 250px;
    pointer-events: none;
    font-family: 'Routed Gothic';
    font-size: 11px;
    color: inherit;
    white-space: nowrap;
  }
</style>

<Faceplate title="POLYRHYTHM" color="#1D1E22">
    <dividers style="top:30px">
      {#each Array(DIVS).fill(0) as _, stepIndex}
        <div class="division-heading" style="left:{stepIndex * 64}px; top:24px">rhythm {stepIndex + 1}</div>
      {/each}
       {#each state.dividers as rhythm, index}
      <Knob size="s"
          x={index * 64}
          y={48}
          bind:value={rhythm}
          min={1}
          max={16}
          precision={0}
          label="{rhythm}"
        />
        {/each}
        <div class="row-title" style="top: 52px;">divider</div>
    </dividers>
    <offsets style="top:90px">
       {#each state.offsets as offset, index}
      <Knob size="s"
          x={index * 64}
          y={56}
          bind:value={offset}
          min={0}
          max={15}
          precision={0}
          label="{offset ? offset : '0'}"
        />
        {/each}
        <div class="row-title" style="top:60px">offset</div>
    </offsets>
    
    <toggles style="top:190px">
      {#each state.seqToggles as row, seqIndex}
        {#each row as seqAssignment, rhythmIndex}
        <Switch
        x={8 + rhythmIndex * 64}
        y={24 + seqIndex * 48}
        value={seqAssignment === 1}
        square
        onToggle={() => toggle(seqIndex, rhythmIndex)}
      />
        {/each}
        <Patch label="gate {seqIndex + 1}" x={DIVS * 64} y={24 + seqIndex * 48} name="out-gate-{seqIndex}" output={gates[seqIndex]} />
      {/each}
    </toggles>
   <Patch label="clock" x={80} y={330} name="clock" input={clock} />
   <Patch label="reset" x={200} y={330} name="reset" input={reset} />
</Faceplate>
