let outilLectureLiens = require("../Outil/lecteur-liens.js");
let gestReq = require(outilLectureLiens.script_gestion_requete);
let outilLecteurFichier = require(outilLectureLiens.outil_lecteur_fichier);
let createur_fichier = require(outilLectureLiens.outil_createur_fichier);

exports.Controller = async function Controller(body) {
    if (body != undefined) {

        let fichier_cree;
        let nom = body.site.name;
        let use_theme_default = body.site.use_theme;
        let theme = body.site.theme;

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
                let Nom = await outilLecteurFichier.NettoyageCharacters(nom);

                if (createur_fichier.CreerSite(Nom, useTheme, Theme)) {
                    //echo "<meta http-equiv='refresh' content='0; URL=controll-menu.php'>";
                } else {
                    fichier_cree = false;
                }
            }
        }


        return fichier_cree;

    } else {
        var fonctionController = [];
        let Promises = "";

        fonctionController.IcoSite = outilLectureLiens.IconeSite;
        fonctionController.css = outilLectureLiens.liens_css_gestion;
        fonctionController.cssheader = outilLectureLiens.liens_css_header;
        fonctionController.cssbody = outilLectureLiens.liens_css_gestion;
        fonctionController.cssfooter = outilLectureLiens.liens_css_foooters;
        fonctionController.titre_page = "Hymperlion - Gestion";
        fonctionController.nom_site = "Nouveaux Site";
        fonctionController.choix = 1;
        let chemin = outilLectureLiens.array_racine[6];
        let iy = chemin.lastIndexOf(".");
        chemin = chemin.substring(iy + 1);
        chemin = chemin.replace("/", "");

        let website_list = [];
        fonctionController.website_list = await outilLecteurFichier.ScanDossier(chemin, false);
        console.log("Controller : webliste : " + fonctionController.website_list[0]);

        fonctionController.Views = outilLectureLiens.require_vue_newsite;

        return fonctionController;
    }
}