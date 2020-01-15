const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    fileimg: String,
    name: String,
    bairro: String,
    provincia: String,
    municipio: String,
    bi : String,
    idade : Number
});

module.exports = mongoose.model('dadosUser', SpotSchema);