let outilLectureLiens = require("../Outil/lecteur-liens.js");
let gestReq = require(outilLectureLiens.script_gestion_requete);
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);

// exports.controller = function controller() {
exports.Controller = async function Controller() {
    var fonctionController = [];
    console.log("Controll Menu : ");

    let website_list = [];

    let chemin = outilLectureLiens.array_racine[5];
    let iy = chemin.lastIndexOf(".");
    chemin = chemin.substring(iy + 1);
    chemin = chemin.replace("/", "");

    fonctionController.Views = outilLectureLiens.require_vue_menu;

    //const listeSite = new Promise((resolve, reject) => {

    fonctionController.website_list = await outilLecteurFichier.ScanDossier(chemin, false)
        /*.then(function(response) {
                console.log("Webisitelist : " + response);
                fonctionController.website_list = response;
            }).catch(function(error) {
                console.log("Webisitelist : Erreur " + error);
            });;*/

    return fonctionController;
};

/*masaka = outilLecteurFichier.ScanDossier(chemin).then(function(response) {
    //console.log("Response : " + response);
    fonctionController.website_list = response;
    fonctionController.liens = outilLectureLiens;
    
    //exports.fonctionController = fonctionController;
}).catch((e) => {
    console.log("Controller menu : Erreur " + e)
})
console.log(fonctionController.website_list[0]);
if (fonctionController.website_list[0] != undefined) {
    resolve(fonctionController);
} else {
    reject(fonctionController);
}
//});
/*
    listeSite.then(() => {
        console.log("Webisitelist : " + fonctionController.website_list[0]);
    }).catch(() => {
        console.log("Webisitelist : Erreur");
    })
    */
//}