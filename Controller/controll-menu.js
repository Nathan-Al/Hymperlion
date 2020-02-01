let outilLectureLiens = require("../Outil/lecteur-liens.js");
let gestReq = require(outilLectureLiens.script_gestion_requete);
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);

var fonctionController = new Object();
console.log("Controll Menu : ");

let website_list = [];
let chemin = outilLectureLiens.array_racine[5];
let iy = chemin.lastIndexOf(".");
//let request, response, pathname, nbreq;
fonctionController.Views = outilLectureLiens.require_vue_menu;

chemin = chemin.substring(iy + 1);
chemin = chemin.replace("/", "");
fonctionController.website_list = outilLecteurFichier.ScanDossier(chemin);
fonctionController.liens = outilLectureLiens;

exports.fonctionController = fonctionController;