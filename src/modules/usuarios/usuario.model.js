const { stripVTControlCharacters } = require('util');
const mongoose = require('../../config/mongo');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: String,
    cpf: String,
    email: String,
    senha: String,
    telefone: String,
    endereco: String,
    observacao: String

},
    { timestemps: true }
);

const UsuarioModel = mongoose.model('usuarios', usuarioSchema);
module.exports = UsuarioModel