import { expect, test } from '@playwright/test'

test.describe('ホームページ（/）のE2Eテスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('load')
  })

  test('遷移直後のVRT', { tag: '@vrt' }, async ({ page }) => {
    await expect(page).toHaveScreenshot({
      fullPage: true,
    })
  })

  test('遷移直後のアクセシビリティテスト', { tag: '@a11y' }, async ({ page }) => {
    await expect(page).toPassAxe()
  })
})
