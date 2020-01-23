var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var liens = require("../Outil/lecteur-liens.js");
const path = require('path');

const css = "Css/style-menu.css";
const mediasite = "media-site/background-image.png";
let pathname = '.${parsedUrl.pathname}';
let cssDataPost = "";
let imageDataPost = "";

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
    console.log("         ");
    console.log("Gestionnaire Requête : Le gestionnaire 'receive' est appelé.");
    console.log("Gestionnaire Requête : PostData : " + postData + "pathname : " + pathname);

    if (path.parse(pathname).ext == ".css") {
        cssDataPost = path.parse(pathname).ext;
    } else if (path.parse(pathname).ext == ".png" || path.parse(pathname).ext == ".jpg") {
        imageDataPost = path.parse(pathname).ext;
    }

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
            //console.log("Response : " + response);
            response.end(data);
        })

    } else if (cssDataPost == ".css") {
        console.log("Css Gestionnaire : " + css);
        var cssPath = css;
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        var fileStreamIm = "";
        //response.writeHead(200, { "Content-Type": "text/css" })

        if (imageDataPost == ".png" || imageDataPost == ".jpg") {
            console.log("Image Gestionnaire : " + mediasite);

            fileStreamIm = fs.createReadStream(mediasite);
            //response.writeHead(200, { "Content-Type": "image/png" })

            fileStreamIm.pipe(response, { end: false });
            fileStreamIm.on('end', () => {
                response.end('Goodbye\n');
            });

        }

        fileStream.pipe(response, { end: true });
        fileStream.on('end', () => {
            response.end('Goodbye\n');
        });

        //fileStream.pipe(fileStreamIm);
        //fileStream.pipe(fileStreamIm).pipe(response);
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