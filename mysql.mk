

//Cadastro de Usuários (MONGO DB):
const usuarioExistente = await UsuarioModel.find({ email: req.body.email });
const usuario = await UsuarioModel.create({ /* ... */ });
// (MYSQL):
const usuarioExistente = await UsuarioModel.findOne({ where: { email: req.body.email } });
const usuario = await UsuarioModel.create({ /* ... */ });



//Listagem de Usuários (MONGO DB):
const usuarios = await UsuarioModel.find();
// (MYSQL):
const usuarios = await UsuarioModel.findAll();


//Cadastro de Produtos / Estoque (MONGO DB):
const produto = await ProdutoModel.create({ /* ... */ });
// (MYSQL):
const produto = await ProdutoModel.create({ /* ... */ });

//Listagem de Produtos / Estoque (MONGO DB):
const produtos = await ProdutoModel.find();
// (MYSQL):
const produtos = await ProdutoModel.findAll();


//Atualização de Produtos / Estoque (MONGO DB):
const atualizarEstoque = await ProdutoModel.updateOne({ _id: produtoId }, { /* ... */ });
// (MYSQL):
const produtoId = req.params.id;
const [atualizarEstoque] = await ProdutoModel.update({ /* ... */ }, { where: { id: produtoId } });


//Cadastro de Pedidos (MONGO DB):
const usuario = await UsuarioModel.findById(clienteId);
const produto = await ProdutoModel.findById(produtoId);
const pedido = await PedidoModel.create({ /* ... */ });
// (MYSQL):
const usuario = await UsuarioModel.findByPk(clienteId);
const produto = await ProdutoModel.findByPk(produtoId);
const pedido = await PedidoModel.create({ /* ... */ });

//Listagem de Pedidos (MONGO DB):
const listaPedido = await PedidoModel.find();
// (MYSQL):
const listaPedido = await PedidoModel.findAll();

//Cadastro de Vendas (MONGO DB):
const usuario = await UsuarioModel.findById(clienteId);
const pedido = await PedidoModel.findById(pedidoId);
const vendas = await VendaModel.create({ /* ... */ });
// (MYSQL):
const usuario = await UsuarioModel.findByPk(clienteId);
const pedido = await PedidoModel.findByPk(pedidoId);
const vendas = await VendaModel.create({ /* ... */ });

//Listagem de Vendas (MONGO DB):
const vendasLista = await VendaModel.find();
// (MYSQL):
const vendasLista = await VendaModel.findAll();
