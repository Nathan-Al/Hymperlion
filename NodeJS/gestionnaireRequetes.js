var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var liens = require("../Outil/lecteur-liens.js");
const path = require('path');
const css = "Css/style-menu.css";
let pathname = '.${parsedUrl.pathname}';

// Associe le type MIME par rapport au suffixe du fichier demandé
const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'application/font-sfnt'
};

function receive(response, postData, pathname) {
    console.log("Gestionnaire Requête : Le gestionnaire 'receive' est appelé.");
    console.log("Gestionnaire Requête : PostData : " + postData + "pathname : " + pathname);
    const cssDataPost = path.parse(pathname).ext;

    if (pathname == "/" || pathname == "/menu" || pathname == "/accueil") {
        fs.readFile("Views/affichage-menu.html", "utf-8", (err, data) => {
            if (err) {
                response.writeHead(404)
                response.end("Ce fichier n'existe pas")
            } else {
                // extraction du suffixe de fichier selon le chemin basé sur l'URL fournie. ex. .js, .doc, ...
                const ext = path.parse("Views/affichage-menu.html").ext;

                // si le fichier est trouvé, définit le content-type et envoie les données

                response.setHeader('Content-type', mimeType[ext]);
                //response.writeHead(200, { 'Content-type': 'text/html' })

            }
            response.end(data);
        })
    } else if (cssDataPost == ".css") {
        console.log("Css Gestionnaire : ");
        var cssPath = css;
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        response.writeHead(200, { "Content-Type": "text/css" })
        fileStream.pipe(response);
    }
    /*var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Envoyer" />' +
        '</form>' +
        '</body>' +
        '</html>';
    /*exec("find /", { timeout: 10000, maxBuffer: 20000 * 1024 },
    function(error, stdout, stderr) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();*/


}

function upload(response, postData) {
    console.log("Gestionnaire Requête : Le gestionnaire 'upload' est appelé.");
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.write("Vous avez envoyé : " + querystring.parse(postData).text);
    response.end();
}

exports.receive = receive;
exports.upload = upload;