const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const vendaSchema = new Schema({
    clienteId: String,
    produtoId: String,
    valor_total: String,
    entrega_retirada: String,
    pgto: String,
    data_venda: String,
    informacaoGeral: String,
},
    { timestemps: true }
);

const VendaModel = mongoose.model('vendas', vendaSchema);
module.exports = VendaModel