<script lang="ts">
    import { Label } from '@patchcab/core';

    export let label = undefined;
    export let high: boolean;
    export let active = false;
    export let x = 0;
    export let y = 0;
 </script>
  
  <style>
    button {
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      background: var(--color-dark);
      border: 1px solid rgba(0, 0, 0, 0.32); 
      box-shadow: inset 2px 2px 0px rgba(255, 255, 255, 0.08), 0px 0px 0px 2px rgba(0, 0, 0, 0.12);
      cursor: pointer;
      color: inherit;
    }
    button.high {
      background: var(--color-dark-highlight);
    }
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    button.on {
      background: var(--color-on);
      box-shadow: inset 2px 2px 0px rgba(255, 255, 255, 0.24), 0px 0px 0px 2px rgba(0, 0, 0, 0.12);
    }
    button.on.high {
      background: var(--color-on-highlight);
    }
  </style>

<button
aria-label="indicator"
style="left: {x}px; top: {y}px;"
class:on={active}
class:high>
{#if label}
<Label top={-1}>{label}</Label>
{/if}
</button>