let http = require('http');
let fs = require('fs');
let url = require('url');
let EventListent = require('events');
var bodyParser = require('body-parser');

//let server = http.createServer()

function start(page, port, route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Requete reçue pour le chemin " + pathname + ".")
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Paquet POSt recu" + postDataChunk + ".");
        });
        request.addListener("end", function() {
            route(handle, pathname, response, postData)
        });
    }
    http.createServer(onRequest).listen(port);
    console.log("Demarrage serveur");
    /*
    server.on('request', (request, response) => {

        

        response.writeHead(200, {
            'Content-type': 'text/css'
        });

        fs.readFile(page, (err, data) => {
            if (err) {
                response.writeHead(404)
                response.end("Ce fichier n'existe pas")
            } else {
                response.writeHead(200, {
                    'Content-type': 'text/html; charset=utf-8'
                })
            }
            response.end(data)
        })
    })
    server.listen(port)*/
}

exports.start = start;