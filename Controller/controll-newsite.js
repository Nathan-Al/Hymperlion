let Tools_Lecteur_Liens = require("../Outil/lecteur-liens.js");
let gestReq = require(Tools_Lecteur_Liens.script_gestion_requete);
let Tools_Lecteur_Fichier = require("../Outil/lecteur-fichier.js" /*Tools_Lecteur_Liens.outil_lecteur_fichier*/ );
let Tools_Createur_Fichier = require("../Outil/createur-fichier.js" /*Tools_Lecteur_Liens.outil_createur_fichier*/ );
let Normalisations = require("../Outil/normalisations.js")

exports.Controller = async function Controller(data) {
    if (data != undefined && typeof(data) != "string") {

        let fichier_cree;
        let nom = data.site.name;
        let use_theme_default = data.site.use_theme;
        let theme = data.site.theme;
        var fonctionController = []

        if (nom != undefined) {
            if (use_theme_default == true) {
                if (theme) {
                    if (theme == "default")
                        LA(nom, true, "default");
                    else {
                        LA(nom, true, theme);
                    }
                }
            } else {
                LA(nom, false);
            }
        } else {
            console.error("Nom est undefined ou incorrect");
        }
        async function LA(nom, useTheme, Theme) {
            if (nom != "" && nom != null) {
                let Nom = await Normalisations.NameSpace_Normalisations.Chaine.NettoyageCharactere_1(nom);

                if (Tools_Createur_Fichier.NameSpace_CreateurFichiers.Site.créer(Nom, useTheme, Theme)) {
                    //echo "<meta http-equiv='refresh' content='0; URL=controll-menu.php'>";
                    fonctionController.fichier_cree = true;
                } else {
                    fonctionController.fichier_cree = false;
                }
            }
        }


        return fonctionController;

    } else {
        var fonctionController = [];
        let Promises = "";

        fonctionController.IcoSite = Tools_Lecteur_Liens.IconeSite;
        fonctionController.css = Tools_Lecteur_Liens.liens_css_gestion;
        fonctionController.cssheader = Tools_Lecteur_Liens.liens_css_header;
        fonctionController.cssbody = Tools_Lecteur_Liens.liens_css_gestion;
        fonctionController.cssfooter = Tools_Lecteur_Liens.liens_css_foooters;
        fonctionController.titre_page = "Hymperlion - Gestion";
        fonctionController.nom_site = "Nouveaux Site";
        fonctionController.choix = 1;
        let chemin = Tools_Lecteur_Liens.array_racine[6];
        let iy = chemin.lastIndexOf(".");
        chemin = chemin.substring(iy + 1);
        chemin = chemin.replace("/", "");

        let website_list = [];
        fonctionController.website_list = await Tools_Lecteur_Fichier.NameSpace_LecteurFichiers.Dossier.ScanDossier(chemin, false);
        console.log("Controller : webliste : " + fonctionController.website_list[0]);

        fonctionController.Views = Tools_Lecteur_Liens.require_vue_newsite;

        return fonctionController;
    }
}