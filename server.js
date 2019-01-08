const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RequireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://tarefas:tarefas123@ds225624.mlab.com:25624/api_tarefas', {useNewUrlParser: true});

RequireDir('./src/models');
app.use('/api', require('./src/routes'));

app.listen(3000);