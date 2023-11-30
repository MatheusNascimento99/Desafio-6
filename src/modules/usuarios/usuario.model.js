const { stripVTControlCharacters } = require('util');
const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    nome: String,
    cpf: Number,
    email: String,
    telefone: Number,
    senha: String,
},
{timestemps: true}
);

const UsuarioModel = mongoose.model('usuarios', usuarioSchema);
module.exports = UsuarioModel