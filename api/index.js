const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const productRoutes = require('./routes/product');

app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/product', productRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
