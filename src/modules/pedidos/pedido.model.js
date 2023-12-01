const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const pedidoSchema = new Schema({
    nome:String,
    quantidade: String,
    cor: String,
    status:String,
    clienteId: String,
    produtoId: String,
    data_pedido: String,
    valor_total: String
},
{timestemps: true}
);

const PedidoModel = mongoose.model('pedidos', pedidoSchema);
module.exports = PedidoModel