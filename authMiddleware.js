const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'Token não fornecido. Autorização negada.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // Decodificar as informações do usuário e tipo
        req.user = decoded.user;
        req.userType = decoded.userType;  // Novo: Tipo de usuário
        req.clinicaId = decoded.clinicaId; // Novo: Clínica ID
        
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token inválido.' });
    }
};
