let outilLectureLiens = require("../Outil/lecteur-liens.php");
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);
let createur_fichier = require(outilLectureLiens.outil_createur_fichier);

let IcoSite = outilLectureLiens.IconeSite;
let css = outilLectureLiens.liens_css_gestion;
let cssheader = outilLecture.Liensliens_css_header;
let cssbody = outilLectureLiens.liens_css_gestion;
let cssfooter = outilLectureLiens.liens_css_foooters;
let titre_page = "Hymperlion - Gestion";
let nom_site = $_GET["nom_site"];
let choix = 1;

let Dossier = new Array();
Dossier = ScanFichiers(outilLectureLiens.racine_site.nom_site + "/Views");

if (isset($_POST["supp"]))
    if ($_POST["name"] != "" && $_POST["name"] != null) {
        $nomPage = nettoyageCharacters($_POST["name"]);

        if (SupprimerFichier($dossier, $nomPage))
            console.log("Fichier supprimer !");
    }

for (let i = 0; i < sizeof(Dossier); $i++) {
    Dossier[$i];
}