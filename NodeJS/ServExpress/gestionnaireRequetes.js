let express = require('express');
let app = express();
var bodyParser = require('body-parser')

function gestionnaireRequetes(request, response, pathname) {
    console.log("Gestionnaire de Requête :" + pathname);
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');

    app.use(express.static("Css" /*lli.array_racine[2]*/ ));
    app.use(express.static("media-site"));
    app.use(express.static("JavaScript"));

    app.get("/", (request, response) => {
        response.render(lli.require_vue_menu);
    })

    app.post('/', (request, response) => {
        if (request.body.randomTxT === undefined || request.body.randomTxT === '') {
            response.render('Test/test', { error: "Vous n'avez rien rentrée" });
        }
    })


}
exports.gestionrequ = gestionnaireRequetes;