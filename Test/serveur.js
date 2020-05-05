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
let test2 = require("./test2");
let fs = require('fs')
    //var lli = require('../../Outil/lecteur-liens.js');
    //let routeur = require('./router.js');

let message = "Serveur : ";
let pathname = "";
let nbreq = 0;

//start(1223)

function start(port) {
    //console.log(app.request.originalUrl);
    app.use(function WaitOnRequest(req, res, next) {
        pathname = req.url;
        console.log("       ");
        console.log(message + "WaitOnRequest nbreq : " + nbreq + " requetes : " + pathname + " body : " + req.body);

        app.set("Views")
        app.set('view engine', 'ejs')
        app.set('views', path.join(__dirname, '/views'));

        app.use(express.static("Css" /*lli.array_racine[2]*/ ));
        app.use(express.static("media-site"));
        app.use(express.static("JavaScript"));
        app.use(express.static("JQuery"));

        // parse application/json
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.get("*", async function(request, response) {
            //console.log("Serveur pathname : " + pathname + " nbreq:" + nbreq);
            let doc = await test2.NameSpace_Test.Fichier.lire("Test/doc.js")

            if (doc.__proto__.name == "Error") {
                alert(doc)
            }

            response.render('affichage.ejs', { info: doc[1] });
            response.end();
            //routeur.router(request, response, pathname, nbreq++);
        });

        app.post("*", async function(request, response) {
            console.log("Serveur post : " + " nbreq:" + nbreq);
            let bbo = request.body.code_ecrit;
            //let theme = request.body.site.use_theme;
            let ecrire = await test2.NameSpace_Test.Fichier.ecrire("Test/doc.js", bbo);
            if (ecrire) {
                //console.log("Name : " + bbo + " Theme : " + theme);
                let doc = await test2.NameSpace_Test.Fichier.lire("Test/doc.js")
                response.render('affichage.ejs', { info: doc[1] });
                response.end();
            }

        });
        next();
    })

    http.createServer(app).listen(port);
    console.log("       ");
    console.log("Serveur : Demarrage serveur port " + port);
}

exports.start = start;