const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const usersPath = path.join(__dirname, '../data/users.json');

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login bem-sucedido!', user });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas!' });
    }
});

module.exports = router;
