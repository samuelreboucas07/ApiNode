const mongoose = require('mongoose')

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    files: [{type: mongoose.Schema.Types.ObjectId, ref: 'Files'}], //Armazena os id dos arquivos pertencentes a este box, ou seja, está relacionando com outra tabela.
}, {
    timestamps: true //Cria campo createdAt e UpdatedAt para cada registro da tabela.
});

module.exports = mongoose.model('Box', Box)