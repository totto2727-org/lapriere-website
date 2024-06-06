/* eslint-disable node/prefer-global/process */
import { defineConfig, devices, expect } from '@playwright/test'
import matchers from 'expect-axe-playwright'

expect.extend(matchers)

export default defineConfig({
	testDir: 'src/playwright',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 3 : undefined,
	reporter: 'html',
	use: {
		baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL,
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'android',
			use: { ...devices['Galaxy S8'] },
		},
		{
			name: 'android tab',
			use: { ...devices['Galaxy Tab S4'] },
		},
		{
			name: 'iPhone',
			use: { ...devices['iPhone 8'] },
		},
		{
			name: 'ipad',
			use: { ...devices['iPad Mini'] },
		},
	],
})
