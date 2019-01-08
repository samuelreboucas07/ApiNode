const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true,
    },

});

mongoose.model('Tarefa', TarefaSchema);