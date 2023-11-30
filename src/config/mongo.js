const mongoose = require('mongoose');
const conectBD = mongoose.connect('mongodb://127.0.0.1:27017/local');

module.exports = conectBD;
module.exports = mongoose;