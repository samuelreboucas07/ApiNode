const express =  require('express');
const routes = express.Router();
const tarefaController = require('./controllers/tarefaController');

routes.get('/tarefas', tarefaController.index);
routes.post('/tarefas', tarefaController.store);
routes.get('/tarefas/:id', tarefaController.show);
routes.put('/tarefas/:id', tarefaController.update);
routes.delete('/tarefas/:id', tarefaController.delete);
module.exports = routes;