const { chromium } = require('playwright');
const browser = await chromium.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await page.goto('http://vittalshenoy.com/pages/index.go')

await page.setViewportSize({ width: 2048, height: 1038 })

await page.waitForSelector('.navbar > #navbar > .nav > .megamenu > .dropdown-toggle')
await page.click('.navbar > #navbar > .nav > .megamenu > .dropdown-toggle')

await page.waitForSelector('.dropdown-menu > .row-fluid > .nav:nth-child(2) > li:nth-child(2) > a')
await page.click('.dropdown-menu > .row-fluid > .nav:nth-child(2) > li:nth-child(2) > a')

await navigationPromise

await page.waitForSelector('.navbar > #navbar > .nav > .dropdown:nth-child(2) > .dropdown-toggle')
await page.click('.navbar > #navbar > .nav > .dropdown:nth-child(2) > .dropdown-toggle')

await navigationPromise

await page.waitForSelector('.nav > .dropdown > .dropdown-menu > li:nth-child(5) > a')
await page.click('.nav > .dropdown > .dropdown-menu > li:nth-child(5) > a')

await navigationPromise

await browser.close()