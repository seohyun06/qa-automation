// mock-server/mock-server.js

const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

// 로그인 성공 / 실패를 테스트하기 위한 Mock 엔드포인트
app.post('/login', (req, res) => {
  const { email, password } = req.body || {};

  // 성공 케이스: API 테스트에서 사용하는 고정 값
  if (email === 'test@test.com' && password === '1234') {
    return res.status(200).json({
      token: 'mock-token-1234',
    });
  }

  // 실패 케이스: 잘못된 자격 증명
  return res.status(401).json({
    message: 'Invalid email or password',
  });
});

app.listen(PORT, () => {
  console.log(`✅ Mock API Server running on http://127.0.0.1:${PORT}`);
});
