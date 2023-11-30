const mongoose = require('../../config/mongo');
const {Schema} = mongoose;

const pedidooSchema = new Schema({
    quantidade: Number,
    cor: String,
    data: Date,
    status:String
},
{timestemps: true}
);

const PedidoModel = mongoose.model('pedidos', usuarioSchema);
module.exports = PedidoModel