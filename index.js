var lli = require('./Outil/lecteur-liens.js');
var server = require("./NodeJS/serveur");
var router = require("./NodeJS/router");
var resquestHand = require("./NodeJS/gestionnaireRequetes");
var handle = {};

handle["/"] = resquestHand.start;
handle["/start"] = resquestHand.start;
handle["/favicon.ico"] = resquestHand.start;
handle["/upload"] = resquestHand.upload;

var css = lli.array_racine[2];
var menu = lli.require_vue_menu;

server.start('Views/affichage-menu.php', 8080, router.route, handle);