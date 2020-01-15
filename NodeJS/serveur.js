let http = require('http');
let fs = require('fs');
let url = require('url');
let EventListent = require('events');
var bodyParser = require('body-parser');
var nStatic = require('node-static');
var liens = require("../Outil/lecteur-liens.js");
var fileServer = new nStatic.Server(liens.array_racine[2] + liens.liens_css_menu);

//let server = http.createServer()

function start(port, route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Serveur : Requete reçue pour le chemin " + pathname + ".")
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Serveur : Paquet POST recu" + postDataChunk + ".");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData)
        });
    }

    http.createServer(onRequest).listen(port);
    console.log("Serveur : Demarrage serveur");
}

exports.start = start;