import { test, expect } from '@playwright/test';
import { Verify } from 'crypto';

test('User can login', async ({ page }) => {
  await page.goto('https://news2.wolftech.no/');

  // Expect a Header Login.
  await expect(page.getByRole('heading', { name: 'LOGIN', exact: true })).toBeVisible();

  const usernameInput = await page.getByPlaceholder('Username');
 // Input the username
  await usernameInput.fill('sakib@wolftech.no'); 

 // Input the password
  const passwordInput = await page.getByPlaceholder('Password')
  await passwordInput.fill('BdCheck88i')

  //Verify login
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByLabel('Go to Dashboard')).toBeVisible({ timeout: 12000 });
});