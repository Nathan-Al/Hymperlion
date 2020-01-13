// Racine Dossier Site
var racine_outil = "../Outil/";
var racine_controller = "../Controller/";
var racine_css = "../Css/";
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
exports.require_vue_gestion = racine_views + "affichage-gestion.php";
exports.require_vue_index = racine_views + "affichage-index.php";
exports.require_vue_menu = racine_views + "affichage-menu.php";
exports.require_vue_newsite = racine_views + "affichage-newsite.php";
exports.require_vue_ecriture = racine_views + "affichage-ecriture.html";

//MODEL
exports.manager_page_model = racine_manager + "Manager-Page-Web-Model.php";

//TOOLS
exports.outil_lecteur_fichier = racine_outil + "lecteur-fichier.php";
exports.outil_editeur_fichier = racine_outil + "editeur-fichier.php";
exports.outil_createur_fichier = racine_outil + "createur-fichier.php";

//CONTROLLER
exports.controller_gestion = racine_controller + "controll-gestion.php";
exports.controller_upload = racine_controller + "controll-upload.php";
exports.controller_newsite = racine_controller + "controll-newsite.php";
exports.controller_editeur = racine_controller + "controll-editeur.php";

//TEMPLATE
exports.require_html_header = racine_template + "header.php";
exports.require_html_footer = racine_template + "footer.php";
exports.require_html_body = racine_template + "body.php";
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
exports.scrip_chargement = racine_javascript + "srcipt-chargement.js";;
/* LIENS DOSSIER */
exports.dossier_force_utf8 = "../forceutf8-master/";


/* ICONE PAGE DU SITE */
exports.IconeSite = "../media-site/icone.jpg";