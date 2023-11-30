const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const pedidoSchema = new Schema({
    valor_total: Number,
    entrega_retirada: String,
    pgto: String,
    data_venda: Date,

},
{timestemps: true}
);

const PedidoModel = mongoose.model('pedidos', pedidoSchema);
module.exports = PedidoModel