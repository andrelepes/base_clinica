import React, { useState } from 'react';
import api from '../../services/api';  // Ajustado com base na estrutura do seu projeto

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Falha no login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginComponent;
