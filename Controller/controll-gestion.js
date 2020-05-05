let Tools_Lecteur_Liens = require("../Outil/lecteur-liens.js");
let Tools_Lecteur_Fichier = require("../Outil/lecteur-fichier.js" /*Tools_Lecteur_Liens.outil_lecteur_fichier*/ );
//let createur_fichier = require(Tools_Lecteur_Liens.outil_createur_fichier);
let normalisations = require("../Outil/normalisations" /*Tools_Lecteur_Liens.outil_normalisations*/ );

exports.Controller = async function Controller(data) {
    var fonctionController = [];
    let Pages_Site = [];
    if (data != undefined) {
        let nom_site = data.slice(data.indexOf("=") + 1, data.length);
        let titre_page = "Hymperlion - Gestion";
        let choix = 1;
        let IcoSite = Tools_Lecteur_Liens.IconeSite;
        let css = Tools_Lecteur_Liens.liens_css_gestion;
        let Array_Site = await Tools_Lecteur_Fichier.NameSpace_LecteurFichiers.Dossier.ScanDossier("Site/" + nom_site + "/Views/", true)
        Array_Site.forEach((element, index) => {

            let fichier = {
                "nom": normalisations.NameSpace_Normalisations.Chaine.MajusculePremiereLettre(element.substring(element.lastIndexOf("-") + 1, element.lastIndexOf("."))),
                "type": element.substring(element.lastIndexOf(".") + 1, element.lenght),
                "nomination": element.substring(0, element.lastIndexOf("-"))
            };
            Pages_Site[index] = fichier;
        });
        fonctionController.Pages_Site = Pages_Site;
        fonctionController.Views = Tools_Lecteur_Liens.require_vue_gestion;
        fonctionController.nom_site = nom_site;
        fonctionController.titre_page = titre_page;
        return fonctionController;
    } else {
        let Dossier = new Array();
        //Dossier = Tools_Lecteur_Fichier.ScanFichiers(Tools_Lecteur_Liens.racine_site.nom_site + "/Views");
        /*
                if (isset($_POST["supp"]))
                    if ($_POST["name"] != "" && $_POST["name"] != null) {
                        $nomPage = nettoyageCharacters($_POST["name"]);

                        if (SupprimerFichier($dossier, $nomPage))
                            console.log("Fichier supprimer !");
                    }

                for (let i = 0; i < sizeof(Dossier); $i++) {
                    Dossier[$i];
                }
                */
    }

}