const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const produtoSchema = new Schema({
    nome: String,
    quantidade: Number,
    cor: String,
    status: String
},
{timestemps: true}
);

const ProdutoModel = mongoose.model('produtos', produtoSchema);
module.exports = ProdutoModel