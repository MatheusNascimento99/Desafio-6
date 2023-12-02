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
    if (!req.body.email) {
        return res.status(400).json({ mensage: 'O campo e-mail é obrigatório!' });
    } else if (!req.body.senha) {
        return res.status(400).json({ mensage: 'O campo senha é obrigatório!' });
    }

    const usuarioExistente = await UsuarioModel.find({ email: req.body.email });

    if (usuarioExistente.length) {
        return res.status(400).json({ mensage: 'Usuário já existe!' });
    }

    const senhaCripto = bcrypt.hashSync(req.body.senha, 10);
    const usuario = await UsuarioModel.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: senhaCripto,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        observacao: req.body.observacao
    });
    return res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario });
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
        disponibilidade: req.body.disponibilidade,
        cor: req.body.cor,
        descricao: req.body.descricao,
        valor: req.body.valor
    });
    return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!', produto });
});


//LISTAR PRODUTOS / ESTOQUE
app.get('/produtos', async (req, res) => {
    const produtos = await ProdutoModel.find();
    return res.status(200).json([produtos]);
});


//ATUALIZAR PRODUTOS / ESTOQUE
app.put('/produtos/:id', async (req, res) => {
    try {
        const produtoId = req.params.id;
        let { nome, disponibilidade, cor, descricao, valor } = req.body;
        const atualizarEstoque = await ProdutoModel.updateOne({ _id: produtoId }, {
            nome,
            disponibilidade,
            cor,
            descricao,
            valor,
        })
        res.status(200).json({ menssagem: 'Informação atualizada!', atualizarEstoque });


    }
    catch (error) {
        res.status(500).json({ mensagem: 'Falha ao atualizar informações, tente novamente!' });
    }
})

//CADASTRAR PEDIDOSS

app.post('/pedidos', async (req, res) => {
    try {
        const quantPedido = req.body.quantidade;
        const { clienteId, produtoId } = req.body;
        const usuario = await UsuarioModel.findById(clienteId);
        const produto = await ProdutoModel.findById(produtoId);


        if (!clienteId) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado, realize o login!' });
        }
        if (!produtoId) {
            return res.status(404).json({ mensagem: 'Produto não encontrado!' });
        }
        if (produto.disponibilidade < quantPedido) {
            return res.status(404).json({ mensagem: 'Produto esgotado!' });
        }

        const pedido = await PedidoModel.create({
            nome: req.body.nome,
            quantidade: req.body.quantidade,
            cor: req.body.cor,
            observacao: req.body.observacao,
            dataPedido: req.body.dataPedido,
            clienteId: req.body.clienteId,
            produtoId: req.body.produtoId,

        });
        return res.status(200).json({ mensagem: 'Novo pedido gerado!', pedido });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

})

// LISTAR PEDIDOS
app.get('/pedidos', async (req, res) => {
    try {
        const listaPedido = await PedidoModel.find();
        return res.status(200).json([listaPedido]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

})

//CADASTRAR VENDAS

app.post('/vendas', async (req, res) => {
    try {
        const { clienteId, pedidoId } = req.body;
        const usuario = await UsuarioModel.findById(clienteId);
        const pedido = await PedidoModel.findById(pedidoId);

        if (!usuario || !pedido) {
            return res.status(404).json({ mensagem: 'Usuário ou produto não encontrado! ' })
        }

        const vendas = await VendaModel.create({
            clienteId: req.body.clienteId,
            pedidoId: req.body.pedidoId,
            valor_total: req.body.valor_total,
            entrega_retirada: req.body.entrega_retirada,
            pgto: req.body.pgto,
            data_venda: req.body.data_venda,
            informacaoGeral: req.body.informacaoGeral
        });
        return res.status(201).json({ mensagem: 'Venda realizada com sucesso!', vendas });
    }

    catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

})

// LISTAR VENDAS
app.get('/vendas', async (req, res) => {
    try {
        const vendasLista = await VendaModel.find();
        return res.status(200).json(vendasLista)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }

});

// AJUSTAR ITENS DAS MODELS E DAS REQUISIÇÕES

app.listen(9999, () => {
    console.log('Servidor operacional na porta 9999 !');
});