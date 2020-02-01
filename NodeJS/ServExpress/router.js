let gestreq = require("./gestionnaireRequetes");
//let controller = require("../../Controller");
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
        nomPage[indice] = element.substring(li + 1);
        if (pathname == nomPage[indice]) {
            urlValide = true;
            urlPage = nomPage[indice];
        }
    });

    if (urlValide = true && pathname != "/") {
        console.log("Router : Normal circulation :");
        //gestreq.gestionrequ(request, response, urlPage, nbreq++);
    } else if (pathname == "/" || pathname == "/style-menu.css" || "/default.png") {
        console.log("Router : Envoie Menu");
        if (mo = ".css")
            console.log("Router : Css " + mo);
        console.log("Router : Pathname " + pathname);
        //require("../../Controller/controll-menu");
        gestreq.gestionrequ(request, response, "../../Controller/controll-menu", nbreq++);
    } else if (urlValide = false) {
        response.setHeader('Content-Type', 'text/html');
        response.status(404).send('Page introuvable !');
    }

    /*
    app.use(function(req, res, next) {
        res.setHeader('Content-Type', 'text/html');
        res.status(404).send('Page introuvable !');
    });

    app.get("*", (request, response) => {
        console.log(request.url);
        gestreq.gestionrequ();
    })
*/

    //gestreq.gestionrequ(request, response, pathname);
    /*else {
        app.use(function(req, res, next) {
            res.setHeader('Content-Type', 'text/plain');
            res.status(404).send('Page introuvable !');
        });*/

}



exports.router = router;