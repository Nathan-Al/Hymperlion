let lli = require("../Outil/lecteur-liens.php");
let fs = require("fs");

function CreerSite(nom, choix) {
    require(lli.manager_page_model);
    let racine_site = lli.array_racine[5];
    let fichier = {
        "vue": racine_site + nom + "/Views" + "/" + "view-",
        "controller": racine_site + nom + "/Controller" + "/" + "control-",
        "css": $racine_site + nom + "/Css" + "/" + "css-"
    };
    let dossier = ["Views", "Controller", "Css", "Model", "Outil", "Error", "Medias-Site"];
    let ok = 0;
    let do_all_the_work;

    if (choix) {
        if (CreeDossier(racine_site, $nom)) {
            if (CopierDossier(racine_template +
                    "Default/", racine_site + nom +
                    "/")) {
                do_all_the_work = true;
            } else {
                do_all_the_work = false;
            }

        } else {
            do_all_the_work = false;
        }

    } else {
        if (CreeDossier(racine_site, nom)) {
            for (p = 0; p < sizeof(dossier); p++) {
                if (CreeDossier(racine_site.nom, dossier[p])) {
                    ok++;
                }
            }
        } else
            do_all_the_work = false;

        if (ok = 6) {
            if (CreeFichier(racine_site + nom +
                    "/", "index.php") && CreeFichier(racine_site + nom +
                    "/", ".htaccess") && CreePage(fichier, nom))
                do_all_the_work = true;
        }
    }

    return do_all_the_work;
}

async function CreeDossier(destination, nom) {
    await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
        if (err) return false;
    });
    /*
    if (!mkdir(chemin + "/" + nomfichier, 777)) {
        die('Echec lors de la création des répertoires...');
        return false;
    } else {
        chmod($chemin + "/" + $nomfichier, 0777);
        return true;
    }
*/
}

function CreePage(destination, nom) {
    if (destination != null && nom != null) {
        nomfichier = $nom;
        vue = destination["vue"] + $nom + ".php";
        controller = destination["controller"] + nom + ".php";
        css = destination["css"] + nom + ".php";
        //echo $nomfichier." ".$vue." ".$controller." ".$css." ";
        if (!file_exists(vue)) {
            if (!file_exists(controller)) {
                if (!file_exists(css)) {
                    try {
                        fopen(vue, 'wb');
                        fopen(controller, 'wb');
                        fopen(css, 'wb');
                        chmod(vue, 0777);
                        chmod(controller, 0777);
                        chmod(css, 0777);

                        return true;
                    } catch (Exception) {
                        return false;
                    }
                } else {
                    console.log("Le fichier css existe déja");
                }
            } else {
                console.log("Controller existe déja");
            }
        } else {
            console.log("Le fichier vue existe deja !");
        }
    }
}

function CreeFichier(destination, nom) {
    if (destination != "" && $nom != "" || destination != null && nom != null) {
        chemin = destination;
        nomfichier = nom;

        if (file_exists(chemin)) {
            try {
                fopen(chemin + nomfichier, 'wb');
                chmod(chemin + nomfichier, 0777);
                return true;
            } catch (Exception) {
                return false;
            }
        } else {
            return false;
        }
    }

}

function SupprimerFichier(destination, nom) {
    if (destination != null && $nom != null) {
        nomfichier = nom;
        vue = destination["vue"];
        controller = destination["controller"];
        css = destination["css"];
        nom_vue = vue + "affichage-" + nomfichier + ".php";
        nom_controller = controller + "controll-" + nomfichier + ".php";
        nom_css = css + "style-" + nomfichier + ".css";
        if (file_exists(nom_vue)) {
            if (file_exists(nom_controller)) {
                if (file_exists(nom_css)) {
                    try {
                        unlink(nom_vue);
                        unlink(nom_controller);
                        unlink(nom_css);

                        return true;
                    } catch (Exception) {
                        return false;
                    }
                } else {
                    console.log("Le fichier css n'existe pas !");
                }
            } else {
                console.log("Controller n'existe pas !");
            }
        } else {
            console.log("Le fichier vue n'existe pas !");
        }
    }
}

function CopierDossier(dir2copy, dir_paste) {
    // On vérifie si $dir2copy est un dossier
    if (is_dir(dir2copy)) {

        // Si oui, on l'ouvre
        if (dh = opendir(dir2copy)) {
            // On liste les dossiers et fichiers de $dir2copy
            while ((file = readdir(dh)) !== false) {
                // Si le dossier dans lequel on veut coller n'existe pas, on le créé
                if (!is_dir(dir_paste)) mkdir(dir_paste, 0777)

                // S'il s'agit d'un dossier, on relance la fonction rÃ©cursive
                if (is_dir(dir2copy + file) && file != '..' && file != '.') CopierDossier(dir2copy + file + '/', dir_paste + file + '/')
                    // S'il sagit d'un fichier, on le copie simplement
                elseif(file != '..' && file != '.') {
                    copy(dir2copy + file, dir_paste + file);
                    chmod(dir_paste + file, 0777);
                }

            }

            // On ferme $dir2copy
            closedir(dh);
            return true;
        }

    } else
        return false;
}