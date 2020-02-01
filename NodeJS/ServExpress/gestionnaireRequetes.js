let express = require('express');
let app = express();
let ejs = require('ejs');


function gestionnaireRequetes(request, response, pathname, nbreq) {
    let controller = require(pathname);
    console.log("Gestionnaire de Requête : pathname : " + pathname + " nbreq:" + nbreq);
    console.log("    ");
    response.render(controller.fonctionController.Views, { Controller: controller });
    //ejs.renderFile(controller.fonctionController.Views, { controller: controller });
}
exports.gestionrequ = gestionnaireRequetes;