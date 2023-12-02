const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    nomeProduto: String,
    quantidade: Number,
    cor: String,
    clienteId: String,
    pedidoId: String,
    dataPedido: String,
    observacao: String
},
    { timestemps: true }
);

const PedidoModel = mongoose.model('pedidos', pedidoSchema);
module.exports = PedidoModel