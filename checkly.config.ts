import { defineConfig } from 'checkly';

// FIXME: Add your production URL
const productionURL = 'https://demo.nextjs-boilerplate.com';

export const config = defineConfig({
  // FIXME: Add your own project name, logical ID, and repository URL
  projectName: 'Next.js Boilerplate',
  logicalId: 'nextjs-boilerplate',
  repoUrl: 'https://github.com/ixartz/Next-js-Boilerplate',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2024.02',
    browserChecks: {
      frequency: 1440,
      testMatch: '**/tests/e2e/**/*.check.e2e.ts',
      alertChannels: [],
    },
    playwrightConfig: {
      use: {
        baseURL: process.env.ENVIRONMENT_URL || productionURL,
        extraHTTPHeaders: {
          'x-vercel-protection-bypass': process.env.VERCEL_BYPASS_TOKEN,
        },
      },
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
