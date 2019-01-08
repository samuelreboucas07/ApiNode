const mongoose = require('mongoose');
const Tarefa = mongoose.model('Tarefa');

module.exports = {

    async index(req, res){
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },
    async store(req, res){
        const tarefas = await Tarefa.create(req.body);
        return res.json(tarefas);
    },

    async show(req, res){
        const tarefas = await Tarefa.findById(req.params.id);
        return res.json(tarefas);
    },

    async update(req, res){
        const tarefas = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(tarefas);
    },

    async delete(req, res){
        await Tarefa.findByIdAndDelete(req.params.id);
        return res.send();
    } 

}