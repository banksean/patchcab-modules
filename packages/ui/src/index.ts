import * as svelte from 'svelte/internal';

declare global {
  interface Window {
    __sv: typeof svelte;
  }
}

window['__sv'] = svelte;

export * from './lib';
export * from './components';
