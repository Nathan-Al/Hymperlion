let http = require('http');
let url = require('url');
let querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var lib = require('./librairie');
let express = require('express');
let app = express();
var bodyParser = require('body-parser')

let port = 8080

app.set('view engine', 'ejs')


app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())


app.get('/', (request, response) => {
    response.render('index')
})
app.get('/test', (request, response) => {
    response.render('Test/test')
})


app.post('/', (request, response) => {
    if (request.body.randomTxT === undefined || request.body.randomTxT === '') {
        response.render('Test/test', { error: "Vous n'avez rien rentrée" })
    }
})

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(port);