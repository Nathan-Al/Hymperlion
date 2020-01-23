let http = require('http');
let url = require('url');
let querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var lib = require('./librairie');
let express = require('express');
let app = express();
var bodyParser = require('body-parser')
var lli = require('../../Outil/lecteur-liens.js');

function start(port) {

    app.set('view engine', 'ejs')

    app.use(express.static("Css" /*lli.array_racine[2]*/ ));
    app.use(express.static("media-site"));
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());


    app.get('/', (request, response) => {
        response.render(lli.require_vue_menu);
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
}

exports.start = start;