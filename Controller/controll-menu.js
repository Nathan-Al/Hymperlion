let Tools_Lecteur_Liens = require("../Outil/lecteur-liens.js");
let gestReq = require(Tools_Lecteur_Liens.script_gestion_requete);
let Tools_Lecteur_Fichier = require("../Outil/lecteur-fichier.js" /*Tools_Lecteur_Liens.outil_lecteur_fichier*/ );


// exports.controller = function controller() {
exports.Controller = async function Controller() {
    var fonctionController = [];
    console.log("Controll Menu : ");

    let website_list = [];

    let chemin = Tools_Lecteur_Liens.array_racine[5];
    let iy = chemin.lastIndexOf(".");
    chemin = chemin.substring(iy + 1);
    chemin = chemin.replace("/", "");

    fonctionController.Views = Tools_Lecteur_Liens.require_vue_menu;

    //const listeSite = new Promise((resolve, reject) => {

    fonctionController.website_list = await Tools_Lecteur_Fichier.NameSpace_LecteurFichiers.Dossier.ScanDossier(chemin, false)
        /*.then(function(response) {
                console.log("Webisitelist : " + response);
                fonctionController.website_list = response;
            }).catch(function(error) {
                console.log("Webisitelist : Erreur " + error);
            });;*/

    return fonctionController;
};

/*masaka = Tools_Lecteur_Fichier.ScanDossier(chemin).then(function(response) {
    //console.log("Response : " + response);
    fonctionController.website_list = response;
    fonctionController.liens = Tools_Lecteur_Liens;
    
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