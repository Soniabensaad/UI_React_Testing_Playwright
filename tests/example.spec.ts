import { test, expect } from '@playwright/test';

test.describe("Home Page", () => {
  test("should have correct metadata and elements", async ({ page }) => {
    await page.goto("https://todolist.james.am/#/");
    
    // Pause to inspect the page
    await page.pause();
    
    // Check the page title
    await expect(page).toHaveTitle("To Do List");

    // Check the heading visibility
    await expect(
      page.getByRole("heading", { name: "To Do List" })
    ).toBeVisible();

    // Wait for and verify the input element
    await page.waitForSelector('input[placeholder="What needs to be done?"]');
    await expect(
      page.locator('input[placeholder="What needs to be done?"]')
    ).toBeVisible();
  });
});
