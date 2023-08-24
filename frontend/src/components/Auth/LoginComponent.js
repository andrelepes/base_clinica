import React, { useState } from 'react';
import api from '../../services/api';  // Ajustado com base na estrutura do seu projeto
import { Link } from 'react-router-dom'; // Importando o componente Link para navegação

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // Novo estado para armazenar mensagens de erro

  const handleLogin = async () => {
    console.log(`Tentando fazer login com email: ${email} e senha: ${password}`);  // Adicionado para depuração
    try {
      const response = await api.post('/usuarios/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setErrorMsg(''); // Limpar qualquer mensagem de erro anterior
      console.log('Login bem-sucedido:', response.data);  // Adicionado para depuração
    } catch (error) {
      console.error('Falha no login:', error);
      setErrorMsg('Falha no login. Verifique seu e-mail e senha.'); // Definir mensagem de erro
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {errorMsg && <p>{errorMsg}</p>} {/* Exibir mensagem de erro se existir */}
      <Link to="/register">Não tem uma conta? Registre-se aqui.</Link> {/* Link para a página de registro */}
    </div>
  );
};

export default LoginComponent;
