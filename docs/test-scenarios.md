
---

## 2️⃣ `docs/test-scenarios.md`

```md
# Test Scenarios

## 1. E2E(UI) - SauceDemo Login

| ID | 시나리오                         | 입력                         | 기대 결과                                         |
|----|----------------------------------|------------------------------|--------------------------------------------------|
| E1 | 정상 로그인                      | ID: standard_user / PW: secret_sauce | `/inventory` 페이지로 이동, `Products` 텍스트 노출 |
| E2 | 잘못된 자격 증명                | ID: wrong_user / PW: wrong_pass     | 에러 메시지 노출                                 |
| E3 | 비밀번호 미입력                 | ID: standard_user / PW: (빈 값)     | 비밀번호 관련 에러 메시지 노출                   |
| E4 | 로그인 후 새로고침 시 세션 유지 | 정상 로그인 후 새로고침     | 여전히 `/inventory` 페이지, `Products` 노출      |

---

## 2. API - Mock Authentication

Base URL: `http://localhost:4000`

| ID | 시나리오               | 요청                           | 기대 결과                                        |
|----|------------------------|--------------------------------|-------------------------------------------------|
| A1 | 로그인 성공            | `POST /login` (올바른 email, password) | `200 OK`, 응답에 `token` 필드 존재              |
| A2 | 로그인 실패 (자격 오류)| `POST /login` (잘못된 email/password)  | `401 Unauthorized`, 응답에 `error` 메시지 포함 |
