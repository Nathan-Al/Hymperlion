let http = require('http');
let url = require('url');
let querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var lib = require('./librairie');
let express = require('express');
let app = express();
var bodyParser = require('body-parser')
var lli = require('../../Outil/lecteur-liens.js');
let routeur = require('./router.js');
var bodyParser = require('body-parser')

let message = "Serveur : ";
let pathname = "";
let nbreq = 0;

function start(port) {
    //console.log(app.request.originalUrl);
    app.use(function WaitOnRequest(req, res, next) {
        pathname = req.url;
        console.log("       ");
        console.log(message + "WaitOnRequest nbreq : " + nbreq + " requetes : " + pathname);
        app.set("Views")
        app.set('view engine', 'ejs')
        app.use(express.static("Css" /*lli.array_racine[2]*/ ));
        app.use(express.static("media-site"));
        app.use(express.static("JavaScript"));
        app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        app.use(bodyParser.json());

        app.get("*", (request, response) => {
            console.log("Serveur pathname : " + pathname + " nbreq:" + nbreq);
            routeur.router(request, response, pathname, nbreq++);
        });

        app.post("*", (request, response) => {
            console.log("Serveur post : " + " nbreq:" + nbreq);
        });

        next();
    })

    http.createServer(app).listen(port);
    console.log("       ");
    console.log("Serveur : Demarrage serveur port " + port);
}

exports.start = start;