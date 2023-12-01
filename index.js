const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require('bcrypt');
const UsuarioModel = require('./src/modules/usuarios/usuario.model');
const conectBD = require('./src/config/mongo');
const ProdutoModel = require('./src/modules/produtos/produto.model');
const PedidoModel = require('./src/modules/pedidos/pedido.model');
const VendaModel = require('./src/modules/vendas/venda.model');

// CADASTRAR USUÁRIOS
app.post('/usuarios', async (req, res) => {
    if (!req.body.email){
        return res.status(400).json({mensage:'O campo e-mail é obrigatório!'});
    } else if (!req.body.senha){
        return res.status(400).json({mensage:'O campo senha é obrigatório!'});
    }

     const usuarioExistente = await UsuarioModel.find({email: req.body.email});

     if (usuarioExistente.length){
         return res.status(400).json({mensage:'Usuário já existe!'});
     }
 
    const senhaCripto = bcrypt.hashSync(req.body.senha, 10);
    const usuario = await UsuarioModel.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        telefone: req.body.telefone,
        senha: senhaCripto
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
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        cor: req.body.cor,
        status: req.body.status
    });
    return res.status(201).json([produto]);
});


//LISTAR PRODUTOS
app.get('/produtos', async (req, res) => {
    const produtos = await ProdutoModel.find();
    return res.status(200).json([produtos]);
}); 


//REGISTRO pedidos

app.post('/pedidos', async (req, res) =>{
    const pedido = await PedidoModel.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        cor: req.body.cor,
        status: req.body.status,
        data_pedido: req.body.data_pedido,
        clienteId: req.body.clienteId,
        produtoId: req.body.produtoId,
        valor_total:req.body.valor_total
    });
    return res.status(200).json([pedido]);
})

//tabela de vendas ja feita so fazer a rota e colocar schemavenda

app.post('/vendas', async (req, res) => {
    const vendas = await VendaModel.creat({
        clienteId: req.body.clienteId,
        produtoId: req.body.produtoId,
    });
    return res.status(200).json([vendas]);
})


app.listen(9999, () => {
    console.log('Servidor operacional na porta 9999 !');
});