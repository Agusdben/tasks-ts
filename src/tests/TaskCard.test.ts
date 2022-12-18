import { Browser, Page, chromium } from 'playwright'

describe('TaskCard', () => {
  let browser: Browser
  let page: Page
  beforeEach(async () => {
    browser = await chromium.launch()
    page = await browser.newPage()
    await page.goto('http://localhost:5173/')
  })

  afterEach(async () => {
    await browser.close()
  })

  it('should render task card', async () => {
    // locate, fill input and submit
    await page.locator('.form-task input').fill('Test')
    await page.click('.form-task__submit')
    const taskCard = await page.locator('.task-card').textContent()
    expect(taskCard).toContain('Test')
  })
})
