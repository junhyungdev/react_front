import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {username,password});
      setMessage(response.data.message); // 서버로부터 받은 메시지 설정
    } catch (error) {
      setMessage('로그인에 실패했습니다.');
    }
  };
  

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
