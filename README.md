![Playwright](https://img.shields.io/badge/Test-Playwright-45ba4b?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-Mock%20Server-75aa63?logo=node.js)
![Automation](https://img.shields.io/badge/QA-Automation-blue)
![CI](https://github.com/seohyun06/qa-automation/actions/workflows/playwright.yml/badge.svg)
# QA Automation Portfolio (Playwright)

> **목표:**  
> 로그인 기능을 중심으로 E2E(UI) 테스트 + API 테스트를 Playwright 기반으로 구성한 자동화 테스트 프로젝트입니다.
> 외부 API 접근이 제한되는 환경에서 Mock API 서버를 활용하여 재현 가능하고 안정적인 테스트 환경을 구축했습니다..
---

## 1. 개요

이 프로젝트는 다음 목표를 기반으로 합니다:

### ✔ 1) 로그인 기능 자동화 설계 능력 증명  
성공 / 실패 / 예외 / 세션 유지 등 핵심 인증 시나리오 자동화

### ✔ 2) UI(E2E) + API 테스트 분리  
UI는 실제 사용자 흐름 중심  
API는 Mock 서버 기반으로 안정적인 상태 코드/응답 검증

### ✔ 3) 환경 제약 해결 능력  
외부 API가 403을 반환하는 환경에서 Mock API 서버를 직접 구성하여 테스트 재현성과 안정성을 확보

### ✔ 4) CI(GitHub Actions) 기반 자동화 파이프라인 구축
Mock 서버 기동 → 테스트 실행까지 전 과정을 CI에서 자동화하여
코드 변경 시마다 테스트가 지속적으로 실행되도록 구성했습니다.

---

## 2. 기술 스택

- **Language:** TypeScript / JavaScript
- **Test Framework:** Playwright
- **Mock API Server:** Node.js + Express
- **Package Manager:** npm
- **테스트 유형:** E2E(UI) 테스트 + API 테스트 

---

## 3. 폴더 구조

```bash
qa-automation/
│
├── README.md
├── playwright.config.ts
│
├── mock-server/
│   ├── mock-server.js
│   ├── package.json
│   └── node_modules/
│
├── docs/
│   ├── automation-strategy.md
│   └── test-scenarios.md
│
└── tests/
    ├── e2e/
    │   └── auth.login.spec.ts
    └── api/
        └── auth.api.spec.ts
```
        

## 4. 자동화 범위

## 🟦 E2E(UI) 테스트 — SauceDemo
- 정상 로그인  
- 잘못된 PW 입력  
- 비밀번호 미입력  
- 로그인 후 새로고침 시 세션 유지  

UI 테스트는 실제 브라우저 동작 기반으로 사용자 플로우를 검증합니다.

---

## 🟨 API 테스트 — Mock API 서버
Mock 서버(`http://localhost:4000`)를 직접 구성하여:

- 로그인 성공: `200 OK` + token  
- 로그인 실패: `401 Unauthorized` + error 메시지  

외부 API가 403으로 차단되는 환경에서도 **안정적/재현 가능한 테스트 환경**을 구축했습니다.

---
## 전체 테스트 실행 결과
<img src="./docs/images/test-report.png" width="800" />

---

# ⭐ 5. 핵심 설계 포인트

### ✔ UI / API 테스트 완전 분리  
레이어별 테스트 책임을 명확히 하여 유지보수성과 디버깅 효율을 향상했습니다.

### ✔ Mock API 서버 도입  
외부 API 차단 환경에서도 테스트가 동작하도록 서버를 자체 구성했습니다.

### ✔ 실패 시나리오 중심 설계  
인증 기능에서 발생할 수 있는 다양한 실패 케이스를 중심으로 검증을 설계했습니다.

### ✔ 문서화 능력  
테스트 전략 및 시나리오를 /docs 디렉터리에 분리하여 관리합니다.

### ✔ CI 자동화
GitHub Actions에서 Mock 서버 기동 및 전체 테스트 실행을 자동화했습니다.

---

