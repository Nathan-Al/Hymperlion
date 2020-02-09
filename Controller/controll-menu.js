let outilLectureLiens = require("../Outil/lecteur-liens.js");
let gestReq = require(outilLectureLiens.script_gestion_requete);
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);

// exports.controller = function controller() {
exports.Controller = new Promise(function(resolved, reject) {
    var fonctionController = new Object();
    console.log("Controll Menu : ");
    let website_list = [];

    let chemin = outilLectureLiens.array_racine[5];
    let iy = chemin.lastIndexOf(".");
    chemin = chemin.substring(iy + 1);
    chemin = chemin.replace("/", "");

    fonctionController.Views = outilLectureLiens.require_vue_menu;

    //const listeSite = new Promise((resolve, reject) => {

    let Promises = outilLecteurFichier.ScanDossier(chemin).then((response) => {
        console.log("Webisitelist : " + response);
        website_list = response;
    }).catch((error) => {
        console.log("Webisitelist : Erreur " + error);
    });

    console.log("Controll-Menu : Résultat : " + website_list + "Promises : " + Promises);
    console.log("Webisitelist : " + website_list[0]);

    if (website_list[0] != undefined) {
        fonctionController.website_list;
        resolved(fonctionController)
    } else {
        reject();
    }
});

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