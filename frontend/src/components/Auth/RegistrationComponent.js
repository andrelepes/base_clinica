import React, { useState } from 'react';
import api from '../../services/api';  // Ajustado com base na estrutura do seu projeto

const RegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    console.log(`Tentando registrar com email: ${email} e senha: ${password}`);  // Adicionado para depuração
    try {
      const response = await api.post('/usuarios/registrar', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log('Registro bem-sucedido:', response.data);  // Adicionado para depuração
    } catch (error) {
      console.error('Falha no registro:', error);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default RegistrationComponent;
