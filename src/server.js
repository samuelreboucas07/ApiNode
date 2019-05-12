const express = require ('express')
const mongoose  = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())

const server = require('http').Server(app)
const io = require('socket.io')(server) //Definindo tempo real

io.on('connection', socket =>{ //Divindindo app em salas
    socket.on('connectRoom', box =>{
        socket.join(box)
    })
})

mongoose.connect('mongodb+srv://omnistack:omnistack123@cluster0-pgaq3.mongodb.net/omnistack?retryWrites=true', {useNewUrlParser: true})

app.use((req, res, next) =>{ //Definindo nova variável para req
    req.io = io;
    return next()
});

app.use(express.json()) //Cadastrar modulo do meu express
app.use(express.urlencoded({extended: true})) //Perite enviara arquivos nas requisições
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp'))) //Redirecionando para a pasta

app.use(require('./routes'))

server.listen(process.env.PORT || 3000) //Ao usar deploy o heroku tem que ter controle sobre as portas da app.
