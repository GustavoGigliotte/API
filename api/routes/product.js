const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const productsPath = path.join(__dirname, '../data/products.json');

router.post('/', (req, res) => {
    const { name, idade, medicamentos } = req.body;

    if (!name || !idade) {
        return res.status(400).json({ error: 'Nome e preço são obrigatórios!' });
    }

    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

    const newProduct = { id: products.length + 1, name, idade, medicamentos };
    products.push(newProduct);

    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));

    res.status(201).json({ message: 'Produto cadastrado com sucesso!', product: newProduct });
});

router.get('/', (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    res.status(200).json(products);
});

module.exports = router;
