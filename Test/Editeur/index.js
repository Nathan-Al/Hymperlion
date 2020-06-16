let path = require("path");

//let vue = require("./Views");
//let outils = require("Outils");
//console.log(path.dirname);
let createur = require("./Outils/createur.js");
let lecteur = require("./Outils/lecteur.js");
//let lib = require("Library");
//let script = require("Script");

exports.Controller = async function Controller(object) {
    let controller = [];
    controller.doc = await lecteur.NameSpace_LecteurFichiers.Fichier.lire(object.document)
    controller.vue = "affichage.ejs";

    function Document() {

    };
    return controller;
}