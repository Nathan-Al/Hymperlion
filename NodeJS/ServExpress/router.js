let gestreq = require("./gestionnaireRequetes");
var lli = require('../../Outil/lecteur-liens.js');
let express = require('express');
let app = express();

let urlValide = false;
let nomPage = [];
let urlPage = "";
let li;
let mo;

function router(request, response, pathname, nbreq) {
    console.log("Router request :" + request + " response : " + response + " pathname : " + pathname + " nbreq : " + nbreq);

    lli.array_controller.forEach(function(element, indice) {
        li = element.lastIndexOf("/");
        mo = pathname.lastIndexOf(".");
        zi = pathname.lastIndexOf("/");
        t = pathname.lastIndexOf("?");
        subZi = pathname.substring(1);

        nomPage[indice] = element.substring(li + 1);
        pathnameSans = pathname.substring(zi + 1);
        //console.log("Router : nomPage : " + nomPage[indice] + " zi : " + pathnameSans + " Subzi : " + subZi);
        if (subZi == nomPage[indice]) {
            urlValide = true;
            urlPage = nomPage[indice];
            console.log("Router :    URL PAGE : " + urlPage);
        }
    });

    if (urlValide === true && pathname != "/" && pathname != "/menu" && pathname != "/favicon.ico") {
        console.log("Router : Normal circulation : " + pathname);
        console.log("    ");
        gestreq.gestionrequ(request, response, "../" + lli.array_racine[1] + urlPage, nbreq++);
    } else if (pathname == "/" || pathname == "/style-menu.css" || pathname == "/default.png" || pathname == "/menu" && pathname != "/favicon.ico") {
        console.log("Router : Envoie Menu");
        if (mo = ".css")
            console.log("Router : Css " + mo);
        console.log("Router : Pathname " + pathname);
        //require("../../Controller/controll-menu");
        gestreq.gestionrequ(request, response, "../../Controller/controll-menu", nbreq++);

    }
    else /*if (urlValide = false || pathname == "/favicon.ico") */{
        response.setHeader('Content-Type', 'text/html');
        response.status(404).send('Error 404 Page introuvable !');
        response.end();
    }
}



exports.router = router;