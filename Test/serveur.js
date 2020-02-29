let http = require('http');
let url = require('url');
let querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
//var lib = require('./librairie');
let express = require('express');
let path = require('path');
let app = express();
let ejs = require('ejs');
var bodyParser = require('body-parser')
//var lli = require('../../Outil/lecteur-liens.js');
//let routeur = require('./router.js');

let message = "Serveur : ";
let pathname = "";
let nbreq = 0;

start(1223)

function start(port) {
    //console.log(app.request.originalUrl);
    app.use(function WaitOnRequest(req, res, next) {
        pathname = req.url;
        console.log("       ");
        console.log(message + "WaitOnRequest nbreq : " + nbreq + " requetes : " + pathname + " body : "+ req.body);

        app.set("Views")
        app.set('view engine', 'ejs')
        app.set('views', path.join(__dirname, '/views'));

        app.use(express.static("Css" /*lli.array_racine[2]*/ ));
        app.use(express.static("media-site"));
        app.use(express.static("JavaScript"));

        // parse application/json
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.get("*", (request, response) => {
            //console.log("Serveur pathname : " + pathname + " nbreq:" + nbreq);
            response.render('affichage.ejs');
            response.end();
            //routeur.router(request, response, pathname, nbreq++);
        });

        app.post("*", (request, response) => {
            console.log("Serveur post : " + " nbreq:" + nbreq);
            let bbo = request.body.site.name;
            let theme = request.body.site.use_theme;
            console.log("Name : "+bbo+" Theme : "+theme);
            response.render('affichage.ejs', {message: bbo});
            response.end();
        });
        next();
    })

    http.createServer(app).listen(port);
    console.log("       ");
    console.log("Serveur : Demarrage serveur port " + port);
}

//exports.start = start;