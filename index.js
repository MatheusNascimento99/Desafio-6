const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require('bcrypt');
const UsuarioModel = require('./src/modules/usuarios/usuario.model');
const ProdutoModel = require('./src/modules/produtos/produto.model');

// CADASTRAR USUÁRIOS
app.post('/usuarios', async (req, res) => {
  
    const usuario = await UsuarioModel.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone
    });
    return res.status(201).json([usuario]);
});


// LISTAR USUÁRIOS
app.get('/usuarios', async (req, res) => {
    const usuarios = await UsuarioModel.find();
    return res.status(200).json([usuarios]);
}); 

// CADASTRAR PRODUTOS
app.post('/produtos', async (req, res) => {
  
    const produto = await ProdutoModel.create({
        quantidade: req.body.quantidade,
        cor: req.body.cor,
        data: req.body.data,
        status: req.body.status
    });
    return res.status(201).json([produto]);
});


//LISTAR PRODUTOS
app.get('/produtos', async (req, res) => {
    const produtos = await ProdutoModel.find();
    return res.status(200).json([produtos]);
}); 





app.listen(9999, () => {
    console.log('Servidor operacional na porta 9999 !');
});