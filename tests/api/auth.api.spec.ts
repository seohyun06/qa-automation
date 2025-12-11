import { test, expect } from '@playwright/test';

const API_URL = 'http://127.0.0.1:4000';


test.describe('Mock API - Authentication', () => {
  test('✅ 로그인 성공 시 token을 반환한다', async ({ request }) => {
    const response = await request.post(`${API_URL}/login`, {
      data: { email: 'test@test.com', password: '1234' },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeDefined();
  });

  test('❌ 로그인 실패 시 401과 에러 메시지를 반환한다', async ({ request }) => {
    const response = await request.post(`${API_URL}/login`, {
      data: { email: 'wrong@test.com', password: 'xxx' },
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body.error).toContain('Invalid credentials');
  });
});
