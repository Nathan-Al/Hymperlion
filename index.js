var lli = require('./Outil/lecteur-liens.js');
var server = require("./NodeJS/serveur");
var router = require("./NodeJS/router");
var gestionnaireRequetes = require("./NodeJS/gestionnaireRequetes");
var handle = {};

console.log("Index : ");

handle["/"] = gestionnaireRequetes.receive;
handle["/accueil"] = gestionnaireRequetes.receive;
handle["/menu"] = gestionnaireRequetes.receive;
handle["/favicon.ico"] = gestionnaireRequetes.receive;
handle["/upload"] = gestionnaireRequetes.upload;
handle["/Css/style-menu.css"] = gestionnaireRequetes.receive;
handle["/grise"] = function rt() { console.log("Tromper le monde") };

var css = lli.array_racine[2];
var menu = lli.require_vue_menu;

server.start(8080, router.route, handle);