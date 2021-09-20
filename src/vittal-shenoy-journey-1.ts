import { journey, step, expect } from '@elastic/synthetics';

journey("Ensure placeholder is correct", ({page}) => {
    step("go to todos demo page", async () => {
      await page.goto('https://elastic.github.io/synthetics-demo/');
    })
    step("assert placeholder text", async () => {
      const placeholderValue = await page.getAttribute(
        'input.new-todo',
        'placeholder'
      );
      expect(placeholderValue).toBe('What needs to be done?');
    })
});