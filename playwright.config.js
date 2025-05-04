// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Configuration
 */
export default defineConfig({
  testDir: './tests',

  fullyParallel: true,         // Run tests in parallel across all files
  workers: process.env.CI ? 4 : 2, // Use 4 workers in CI, or 2 workers locally

  // Ensures that tests marked with `.only` are not accidentally committed
  forbidOnly: !!process.env.CI,

  // Retries: 2 retries for failed tests, 0 for passing tests.
  retries: 0,
/* 
Run Playwright Tests with Allure reporting for the Chromium browser.
npx playwright test example.spec.js --reporter=allure-playwright --project=chromium

Generate the Allure report from the results stored in allure-results, ensuring a fresh output with --clean.
allure generate allure-results --clean -o allure-report

Open the Allure Report in the browser to view the detailed test results.
allure open allure-report 

for html reports run below command
npx playwright test --reporter=html
*/
// Reporters configuration for different formats
  reporter: [
    ["line"],  // Simple output in the terminal
    ["allure-playwright", { outputFolder: "allure-results" }],  // Allure report output folder
    ["html", { outputFolder: "playwright-report", open: "never" }]  // HTML report saved, but does not open automatically
  ],

  // Shared settings for all projects below
  use: {
    // Collect trace when retrying failed tests (retains traces for debugging)
    trace: 'retain-on-failure',

    // Correct screenshot setting for only taking screenshots on failure
    screenshot: 'only-on-failure',  // Correct setting for screenshots on failure only

    // Retain video only for failed tests
    video: 'retain-on-failure',
  },

  // Configure different projects for testing in various browsers
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],  // Test on Desktop Chrome
        headless: false,  // Set to false for running in non-headless mode (with UI)
      },
    }

   /*{
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],  // Test on Desktop Firefox
        headless: false,  // Set to false for non-headless mode
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],  // Test on Desktop Safari
        headless: false,  // Set to false for non-headless mode
      },
    }, */
  ],
});
