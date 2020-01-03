<?php
// Racine Dossier Site
    $racine_outil = "../Outil/";
    $racine_controller = "../Controller/";
    $racine_css = "../Css/";
    $racine_views = "../Views/";
    $racine_model = "../Model/";
    $racine_site ="../Site/";
    $racine_template ="../Template/";
    $racine_manager = "../Manager/";
    $racine_javascript = "../JavaScript/";
/* LIENS DOSSIER MULTIMEDIA *///-----------------------------------
    $liensMediaSite = "../media-site/";

/* LIENS REQUIRE FICHIER // DOSSIER OUTIL *///----------------------------------

//VIEWS
    $require_vue_gestion =$racine_views."affichage-gestion.php";
    $require_vue_index = $racine_views."affichage-index.php";
    $require_vue_menu = $racine_views."affichage-menu.php";
    $require_vue_newsite = $racine_views."affichage-newsite.php";
    $require_vue_ecriture = $racine_views."affichage-ecriture.html";

//MODEL
   $manager_page_model = $racine_manager."Manager-Page-Web-Model.php";

//TOOLS
    $outil_lecteur_fichier = $racine_outil."lecteur-fichier.php";
    $outil_editeur_fichier = $racine_outil."editeur-fichier.php";
    $outil_createur_fichier = $racine_outil."createur-fichier.php";

//CONTROLLER
    $controller_gestion = $racine_controller."controll-gestion.php";
    $controller_upload = $racine_controller."controll-upload.php";
    $controller_newsite = $racine_controller."controll-newsite.php";
    $controller_editeur = $racine_controller."controll-editeur.php";

//TEMPLATE
    $require_html_header = $racine_template."header.php";
    $require_html_footer = $racine_template."footer.php";
    $require_html_body = $racine_template."body.php";
    $require_chargement = $racine_template."chargement.html";
   
//CSS 
    $liens_css_header = $racine_css."style-headers.css";
    $liens_css_body = $racine_css."style-body.css";
    $liens_css_foooters = $racine_css."style-footers.css";
    $liens_css_upload = $racine_css."style-upload.css";
    $liens_css_gestion = $racine_css."style-gestion.css";
    $liens_css_menu = $racine_css."style-menu.css";
    $liens_css_newsite = $racine_css."style-newsite.css";
    $liens_css_chargement = $racine_css."style-chargement.css";
    $liens_css_editeur = $racine_css."style-editeur.css";

//JAVASCRIPT
    $script_index = $racine_javascript."script-index.js";
    $scrip_newsite = $racine_javascript."script-newsite.js";
    $scrip_gestion_site = $racine_javascript."script-gestion.js";
    $scrip_chargement = $racine_javascript."srcipt-chargement.js";;
/* LIENS DOSSIER */
    

/* ICONE PAGE DU SITE */
    $IconeSite = "../media-site/icone.jpg";
    
?>