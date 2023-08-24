import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PacientesList from './components/Pacientes/PacientesList';
import PacienteDetalhes from './components/Pacientes/PacienteDetalhes';
import Agenda from './components/Agenda/Agenda';
import LoginComponent from './components/Auth/LoginComponent';
import RegistrationComponent from './components/Auth/RegistrationComponent';

function HomePage() {
    return (
        <header className='App-header'>
            Selecione uma opção na barra lateral para exibir o conteúdo aqui.
        </header>
    );
}

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div className='App'>
        {token ? (
          <>
            <div className='sidebar'>
              <Sidebar />
            </div>
            <div className='main-content'>
              <Routes>
                <Route path='/pacientes/:id' element={<PacienteDetalhes />} />
                <Route path='/pacientes' element={<PacientesList />} />
                <Route path='/agenda' element={<Agenda />} />
                <Route path='/' element={<HomePage />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/register' element={<RegistrationComponent />} />
            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
