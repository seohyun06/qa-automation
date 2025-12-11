// mock-server.js
import express from 'express';
const app = express();

app.use(express.json());

// 로그인 성공
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@test.com' && password === '1234') {
    return res.status(200).json({ token: 'mock-token-123' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

// 유저 조회 성공
app.get('/users/1', (req, res) => {
  res.status(200).json({ id: 1, email: 'user@test.com' });
});

// 유저 조회 실패
app.get('/users/999', (req, res) => {
  res.status(404).json({ error: 'User not found' });
});

app.listen(4000, () => {
  console.log('Mock API running at http://localhost:4000');
});
