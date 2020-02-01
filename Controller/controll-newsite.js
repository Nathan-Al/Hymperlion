<< ? php
require "../Outil/lecteur-liens.php";
require $outil_createur_fichier;
require $outil_lecteur_fichier;

$IcoSite = $IconeSite;
$css = $liens_css_gestion;
$cssheader = $liens_css_header;
$cssbody = $liens_css_gestion;
$cssfooter = $liens_css_foooters;
$titre_page = "Hymperlion - Gestion";
$nom_site = "Nouveaux Site";
$choix = 1;

$website_list = array();

$website_list = ScanDossier($racine_template);
require $require_vue_newsite;
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
}