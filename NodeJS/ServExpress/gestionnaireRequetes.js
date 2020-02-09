let express = require('express');
let app = express();
let ejs = require('ejs');


function gestionnaireRequetes(request, response, pathname, nbreq) {
    console.log("Gestionnaire de Requête : pathname : " + pathname + " nbreq:" + nbreq);
    console.log("    ");

    let controller = require(pathname);
    controller.Controller.then((a) => {
        console.log("Webisitelist : " + a);
    }).catch((e) => {
        console.log("Webisitelist : Erreur " + e);
    });;
    console.log("Gestionnaire de Requête : controller : ???" + controller);
    //console.log("Gestionnaire de Requête : controller : " + controller.website_list[0]);
    //response.render(controller.fonctionController.Views, { Controller: controller });
    //ejs.renderFile(controller.fonctionController.Views, { controller: controller });
    response.end();
}
exports.gestionrequ = gestionnaireRequetes;