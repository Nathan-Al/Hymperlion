require "../Outil/lecteur-liens.php";
require $outil_createur_fichier;
require $outil_lecteur_fichier;

$IcoSite = $IconeSite;
$css = $liens_css_gestion;
$cssheader = $liens_css_header;
$cssbody = $liens_css_gestion;
$cssfooter = $liens_css_foooters;
$titre_page = "Hymperlion - Gestion";
$nom_site = $_GET["nom_site"];
$choix = 1;

$Dossier = array();
$Dossier = ScanFichiers($racine_site.$nom_site.
    "/Views");

if (isset($_POST["supp"]))
    if ($_POST["name"] != "" && $_POST["name"] != null) {
        $nomPage = nettoyageCharacters($_POST["name"]);

        if (SupprimerFichier($dossier, $nomPage))
            echo "Fichier supprimer !";
    }

for ($i = 0; $i < sizeof($Dossier); $i++) {
    $Dossier[$i];
}

require $require_vue_gestion;