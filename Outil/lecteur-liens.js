// Racine Dossier Site
var racine_outil = "../Outil/";
var racine_controller = "../Controller/";
var racine_css = "Css/";
var racine_views = "../Views/";
var racine_model = "../Model/";
var racine_site = "../Site/";
var racine_template = "../Template/";
var racine_manager = "../Manager/";
var racine_javascript = "../JavaScript/";
/* LIENS DOSSIER MULTIMEDIA */ //-----------------------------------
var liensMediaSite = "../media-site/";
exports.array_racine = [
    racine_outil,
    racine_controller,
    racine_css,
    racine_views,
    racine_model,
    racine_site,
    racine_template,
    racine_manager,
    racine_javascript,
    liensMediaSite
];


/* LIENS REQUIRE FICHIER // DOSSIER OUTIL */ //----------------------------------

//VIEWS
exports.require_vue_gestion = racine_views + "affichage-gestion.ejs";
exports.require_vue_index = racine_views + "affichage-index.ejs";
exports.require_vue_menu = racine_views + "affichage-menu.ejs";
exports.require_vue_newsite = racine_views + "affichage-newsite.ejs";
exports.require_vue_ecriture = racine_views + "affichage-ecriture.ejs";

//MODEL
exports.manager_page_model = racine_manager + "Manager-Page-Web-Model.js";

//TOOLS
exports.outil_lecteur_fichier = racine_outil + "lecteur-fichier.js";
exports.outil_editeur_fichier = racine_outil + "editeur-fichier.js";
exports.outil_createur_fichier = racine_outil + "createur-fichier.js";
exports.outil_normalisations = racine_outil + "normalisations.js"

//CONTROLLER
exports.array_controller = [
    gestion = racine_controller + "controll-gestion.js",
    upload = racine_controller + "controll-upload.js",
    newsite = racine_controller + "controll-newsite.js",
    editeur = racine_controller + "controll-editeur.js"
];
//TEMPLATE
exports.require_html_header = racine_template + "header.ejs";
exports.require_html_footer = racine_template + "footer.ejs";
exports.require_html_body = racine_template + "body.ejs";
exports.require_chargement = racine_template + "chargement.html";

//CSS 
exports.liens_css_header = racine_css + "style-headers.css";
exports.liens_css_body = racine_css + "style-body.css";
exports.liens_css_foooters = racine_css + "style-footers.css";
exports.liens_css_upload = racine_css + "style-upload.css";
exports.liens_css_gestion = racine_css + "style-gestion.css";
exports.liens_css_menu = racine_css + "style-menu.css";
exports.liens_css_newsite = racine_css + "style-newsite.css";
exports.liens_css_chargement = racine_css + "style-chargement.css";
exports.liens_css_editeur = racine_css + "style-editeur.css";

//JAVASCRIPT
exports.script_index = racine_javascript + "script-index.js";
exports.scrip_newsite = racine_javascript + "script-newsite.js";
exports.scrip_gestion_site = racine_javascript + "script-gestion.js";
exports.scrip_chargement = racine_javascript + "srcipt-chargement.js";

//NODE JS
exports.script_gestion_requete = "../NodeJS/ServExpress/gestionnaireRequetes.js"
    /* LIENS DOSSIER */
exports.dossier_force_utf8 = "../forceutf8-master/";


/* ICONE PAGE DU SITE */
exports.IconeSite = "../media-site/icone.jpg";