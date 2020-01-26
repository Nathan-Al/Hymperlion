gestreq = require("./gestionnaireRequetes");
var lli = require('../../Outil/lecteur-liens.js');

function router(request, response, pathname) {
    console.log("       ");
    console.log("Router, request :" + typeof(request) + " response :" + typeof(response) + " pathname :" + pathname);


    //gestreq.gestionrequ(request, response, pathname);
    /*else {
        app.use(function(req, res, next) {
            res.setHeader('Content-Type', 'text/plain');
            res.status(404).send('Page introuvable !');
        });*/

}



exports.router = router;