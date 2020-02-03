let outilLectureLiens = require("../Outil/lecteur-liens.js");
let gestReq = require(outilLectureLiens.script_gestion_requete);
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);
let createur_fichier = require(outilLectureLiens.outil_createur_fichier);


let IcoSite = outilLectureLiens.IconeSite;
let css = outilLectureLiens.liens_css_gestion;
let cssheader = outilLectureLiens.liens_css_header;
let cssbody = outilLectureLiens.liens_css_gestion;
let cssfooter = outilLectureLiens.liens_css_foooters;
let titre_page = "Hymperlion - Gestion";
let nom_site = "Nouveaux Site";
let choix = 1;

let website_list = new Array();

website_list = outilLecteurFichier.ScanDossier(racine_template);
require(outilLectureLiens.require_vue_newsite);

/*
if (isset($_POST["create"])) {
    $fichiers = array();
    $fichiers = str_replace("affichage-", "", ScanFichiers($racine_views));
    $fichier_cree;
    $nom;

    if (isset($_POST["use_theme"])) {
        if ($_POST["use_theme"] == true) {
            if (isset($_POST["theme"])) {
                if ($_POST["theme"] == "default")
                    $themedefault = true;
                else {
                    $themedefault = false;
                }
            }
        }
    } else {
        $themedefault = false;
    }

    if ($_POST["name"] != "" && $_POST["name"] != null) {
        $nomPage = nettoyageCharacters($_POST["name"]);


        if (CreerSite($nomPage, $themedefault)) {
            echo "<meta http-equiv='refresh' content='0; URL=controll-menu.php'>";
        } else {
            $fichier_cree = false;
        }
    }
}*/