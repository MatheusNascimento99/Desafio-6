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

// CADASTRAR PRODUTOS / ESTOQUE
app.post('/produtos', async (req, res) => {
  
    const produto = await ProdutoModel.create({
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        cor: req.body.cor,
        status_entrega: req.body.status,
        valor: req.body.valor
    });
    return res.status(201).json([produto]);
});


//LISTAR PRODUTOS / ESTOQUE
app.get('/produtos', async (req, res) => {
    const produtos = await ProdutoModel.find();
    return res.status(200).json([produtos]);
}); 


//ATUALIZAR PRODUTOS / ESTOQUE
app.put('/produtos/:id', async (req, res) => {
    try{
        const produtoId = req.params.id;
        let {nome, quantidade, cor, status_entrega, valor} = req.body;
        const atualizarEstoque = await ProdutoModel.updateOne({ _id: produtoId}, {
        nome,
        quantidade,
        cor,
        status_entrega,
        valor,
    })
        res.status(200).json({menssagem: 'Informação atualizada!', atualizarEstoque});
    
    
    } 
    catch (error) {
        res.status(500).json({ mensagem:'Falha ao atualizar informações, tente novamente!' }); 
    }
})

//CADASTRAR PEDIDOSS

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

// LISTAR PEDIDOS
app.get('/pedidos', async (req, res) => {
    const listaPedido = await PedidoModel.find();
    return res.status(200).json([listaPedido]);
})

//CADASTRAR VENDAS

app.post('/vendas', async (req, res) => {
    const vendas = await VendaModel.create({
        clienteId: req.body.clienteId,
        produtoId: req.body.produtoId,
        valor_total: req.body.produtoId,
        entrega_retirada: req.body.entrega_retirada,
        pgto: req.body.pgto,
        data_venda:req.body.data_venda,
        status:req.body.status
    });
    return res.status(200).json(vendas);
})

// LISTAR VENDAS
app.get('/vendas', async (req, res) => {
    const vendasLista = await VendaModel.find();
    return res.status(200).json(vendasLista)
});

// AJUSTAR ITENS DAS MODELS E DAS REQUISIÇÕES

app.listen(9999, () => {
    console.log('Servidor operacional na porta 9999 !');
});