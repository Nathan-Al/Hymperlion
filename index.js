var server = require("./NodeJS/ServExpress/serveur.js");
/*var router = require("./NodeJS/router");
var gestionnaireRequetes = require("./NodeJS/gestionnaireRequetes");
const path = require('path');
var handle = [];

//console.log("Index :");
//handle[path.parse(gestionnaireRequetes.receive).ext]


handle["/"] = gestionnaireRequetes.receive;
handle["/accueil"] = gestionnaireRequetes.receive;
handle["/menu"] = gestionnaireRequetes.receive;
handle["/favicon.ico"] = gestionnaireRequetes.receive;
handle["/upload"] = gestionnaireRequetes.upload;
handle["/Css/style-menu.css"] = gestionnaireRequetes.receive;
handle["/media-site/default.png"] = gestionnaireRequetes.receive;
handle["/media-site/background-image.png"] = gestionnaireRequetes.receive;
handle["/grise"] = function rt() { console.log("Tromper le monde") };


var css = lli.array_racine[2];
var menu = lli.require_vue_menu;
//console.log(handle);*/
server.start(8080);