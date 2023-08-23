import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PacientesList from './components/Pacientes/PacientesList';
import PacienteDetalhes from './components/Pacientes/PacienteDetalhes';
import Agenda from './components/Agenda/Agenda'; // Importe o novo componente Agenda

function HomePage() {
    return (
        <header className="App-header">
            Selecione uma opção na barra lateral para exibir seu conteúdo aqui.
        </header>
    );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/pacientes/:id" element={<PacienteDetalhes />} />
            <Route path="/pacientes" element={<PacientesList />} />
            <Route path="/agenda" element={<Agenda />} /> {/* Rota para a Agenda adicionada */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
