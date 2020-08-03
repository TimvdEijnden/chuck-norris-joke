import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'chuck-norris-joke',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    { type: 'docs-readme' }
  ],
  testing: {
    browserHeadless: false,
    browserDevtools: true,
    browserSlowMo: 1000 //milliseconds
  }
};
