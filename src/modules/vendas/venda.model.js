const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const vendaSchema = new Schema({
    valor_total: String,
    entrega_retirada: String,
    pgto: String,
    data_venda: String,
    status:String,
    clienteId: String,
    produtoId: String,

},
{timestemps: true}
);

const VendaModel = mongoose.model('vendas', vendaSchema);
module.exports = VendaModel