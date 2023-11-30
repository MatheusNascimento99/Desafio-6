const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require('bcrypt');
const usuarioModel = require('./src/modules/usuario/usuario.model');

// CÓDIGO MODELO, NECESSÁRIO MONTAR OS SCHIMAS

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioModel.find({}); 
        return res.status(200).json([usuarios]);
    

});

app.post('/usuarios', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ mensage: 'O campo email é obrigatório!' });
    } if (!req.body.senha) {
        return res.status(400).json({ mensage: 'O campo senha é obrigatório!' });
    }

    const usuario = await usuarioModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCripto
    });
    return res.status(201).json([usuario]);
});

app.listen(9999, () => {
    console.log('Servidor operacional na porta 9999 !');
});