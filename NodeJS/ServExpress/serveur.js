let http = require('http');
let url = require('url');
let querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var lib = require('./librairie');
let express = require('express');
let app = express();
var bodyParser = require('body-parser')
var lli = require('../../Outil/lecteur-liens.js');

let pathname = "";

function start(port) {
    //console.log(app.request.originalUrl);
    app.set('view engine', 'ejs')

    app.use(express.static("Css" /*lli.array_racine[2]*/ ));
    app.use(express.static("media-site"));
    app.use(express.static("JavaScript"));
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
        pathname = req.url;
        console.log("Serveur pathname : " + pathname);
        next();
    });

    app.get("/", (request, response) => {
        console.log(request.url);
        response.render(lli.require_vue_menu);
    })

    app.get("*", (request, response) => {
        console.log(request.url);
        response.render("../Views" + pathname);
    })

    app.post('/', (request, response) => {
        if (request.body.randomTxT === undefined || request.body.randomTxT === '') {
            response.render('Test/test', { error: "Vous n'avez rien rentrée" })
        }
    })

    app.use(function(req, res, next) {
        res.setHeader('Content-Type', 'text/html');
        res.status(404).send('Page introuvable !');
    });

    http.createServer(app).listen(port);
    console.log("Serveur : Demarrage serveur port " + port);
}

exports.start = start;