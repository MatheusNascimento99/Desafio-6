const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const produtoSchema = new Schema({
    nome: String,
    quantidade: Number,
    cor: String,
    status_entrega: String,
    valor: String
},
{timestemps: true}
);

const ProdutoModel = mongoose.model('produto', produtoSchema);
module.exports = ProdutoModel