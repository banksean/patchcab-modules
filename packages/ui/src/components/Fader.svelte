<script lang="ts">
    import { usePan } from '@patchcab/core';
    import type { OnPan } from '@patchcab/core';
    import { scale, round } from '@patchcab/core';

    export let x: number;
    export let y: number;
    export let min: number;
    export let max: number;
    export let value: number;
    export let label: string;
    export let steps: number = 200;
    export let precision: number = 0;

    $: position = scale(value, [min, max], [190, 5], 0);

    const onPan: OnPan = ({ dy }) => {
      if (dy !== 0) {
        const interval = (max - min) / steps;
        const change = round(value - dy * interval, precision);
        value = Math.max(Math.min(change, max), min);
      }
    };
  </script>
  
  <style>
    .container {
      display: block;
      position: absolute;
      width: 32px;
      height: 228px;
      cursor: row-resize;
    }
    svg {
      position: absolute;
      top: 0px;
      left: 0px;
      transform-origin: center;
    }
    .label {
        position: absolute;
        bottom: 0px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        font-size: small;
        text-align: center;
    }
  </style>
  
  <div class="container" style="left: {x}px; top: {y}px;" use:usePan={onPan}>
    <svg width="32" height="200" fill="red"  xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect style="fill:#ddd"
                x=50%
                y=0
                width=3 
                height=100%></rect>
          <rect style="fill:#eee"
                x=0
                y="{position}px"
                width=100%
                height=8></rect>
        </g> 
       </svg>  
    {#if label}
        <div class="label">{label}</div>
      {/if}
  </div>