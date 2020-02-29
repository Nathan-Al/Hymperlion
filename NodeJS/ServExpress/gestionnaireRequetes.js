let express = require('express');
let app = express();
let ejs = require('ejs');


async function gestionnaireRequetes(request, response, pathname, nbreq) {
    console.log("Gestionnaire de Requête : pathname : " + pathname + " nbreq:" + nbreq);
    console.log("    ");
    if (request._body)
    {
        let controller = require(pathname);
        let Controller = await controller.Controller(request.body);
        console.log("Gestionnaire de Requête ___-_DATA_-___ : controller : " + Controller);
        response.end();
    }else
    {
        let controller = require(pathname);
        let Controller = await controller.Controller();
        console.log("Gestionnaire de Requête ___-_RENDER_-___ : controller : " + Controller);
        //console.log("Gestionnaire de Requête : controller : " + Controller.website_list[0]);
        response.render(Controller.Views, { Controller: Controller });
        //ejs.renderFile(Controller.Views, { Controller: Controller });
        response.end();
    }

}
exports.gestionrequ = gestionnaireRequetes;