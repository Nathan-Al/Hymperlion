let express = require('express');
let app = express();
let ejs = require('ejs');


function gestionnaireRequetes(request, response, pathname, nbreq) {
    console.log("Gestionnaire de Requête : pathname : " + pathname + " nbreq:" + nbreq);
    console.log("    ");

    let controller = require(pathname);
    response.render(controller.fonctionController.Views, { Controller: controller });
    //ejs.renderFile(controller.fonctionController.Views, { controller: controller });
}
exports.gestionrequ = gestionnaireRequetes;