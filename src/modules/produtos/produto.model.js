const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const produtoSchema = new Schema({
    nome: String,
    disponibilidade: Number,
    cor: String,
    descricao: String,
    valor: String
},
    { timestemps: true }
);

const ProdutoModel = mongoose.model('produto', produtoSchema);
module.exports = ProdutoModel