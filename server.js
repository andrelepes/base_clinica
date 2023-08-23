require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importando a conexão com o banco de dados
const db = require('./database');
const app = express();

// Middleware para CORS
app.use(cors()); 

// Use o bodyParser.json() aqui para que ele seja aplicado a todas as rotas
app.use(bodyParser.json());

// Rota de teste
app.get('/test', (req, res) => {
    res.send('Test route');
});

// Importando as rotas
const pacientesRoutes = require('./pacientesRoutes');
const psicologosRoutes = require('./psicologosRoutes');
const agendamentosRoutes = require('./agendamentosRoutes');
const cursosRoutes = require('./cursosRoutes');
const usuariosRoutes = require('./usuariosRoutes');
const prontuariosRoutes = require('./prontuariosRoutes');

// Definindo as rotas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/psicologos', psicologosRoutes);
app.use('/api/agendamentos', agendamentosRoutes);
app.use('/api/cursos', cursosRoutes); 
app.use('/api/usuarios', usuariosRoutes);
app.use('/api', prontuariosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
