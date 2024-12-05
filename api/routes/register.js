const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const usersPath = path.join(__dirname, '../data/users.json');

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ error: 'Usuário já existe!' });
    }

    users.push({ username, password });
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

module.exports = router;
