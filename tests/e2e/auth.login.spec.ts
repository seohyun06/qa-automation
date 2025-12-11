import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';

test.describe('Authentication - Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  // 🔥 공통 로그인 함수 — Page 타입만 지정해주면 충분
  const login = async (page: Page, username: string, password: string) => {
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
  };

  test('✅ 정상 로그인 시 상품 목록 페이지로 이동한다', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('❌ 잘못된 자격 증명 입력 시 에러 메시지를 노출한다', async ({ page }) => {
    await login(page, 'wrong_user', 'wrong_pass');

    await expect(
      page.getByText('Username and password do not match any user in this service')
    ).toBeVisible();
  });

  test('❌ 비밀번호 미입력 시 에러 메시지를 노출한다', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('🔁 로그인 후 새로고침 시 세션 유지', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();

    await page.reload();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByText('Products')).toBeVisible();
  });
});
