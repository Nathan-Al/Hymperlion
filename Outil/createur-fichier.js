let lli = require("../Outil/lecteur-liens.js");
let fs = require("fs");
const child_proc = require('child_process');
const os = require('os');

exports.CreerSite = async function CreerSite(nom, choix, theme) {
    //require(lli.manager_page_model);
    let racine_site = lli.array_racine[5];
    let fichier = {
        "vue": racine_site + nom + "/Views" + "/" + "view-",
        "controller": racine_site + nom + "/Controller" + "/" + "control-",
        "css": racine_site + nom + "/Css" + "/" + "css-"
    };
    let dossier = ["Views", "Controller", "Css", "Model", "Outil", "Error", "Medias-Site"];
    let ok = 0;
    let do_all_the_work;

    if (choix) {
        if (CreeDossier(racine_site, nom)) {
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
        if (await CreeDossier(racine_site, nom)) {
            for (p = 0; p < sizeof(dossier); p++) {
                if (await CreeDossier(racine_site.nom, dossier[p])) {
                    ok++;
                }
            }
        } else
            do_all_the_work = false;

        if (ok = 6) {
            if (await CreeFichier(racine_site + nom +
                    "/", "index.php") && await CreeFichier(racine_site + nom +
                    "/", ".htaccess") && await CreePage(fichier, nom))
                do_all_the_work = true;
        }
    }

    return do_all_the_work;
}

async function CreeDossier(destination, nom) {
    await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
        if (err) return false;
    });
}

function CreePage(destination, nom) {
    if (destination != null && nom != null) {
        nomfichier = nom;
        vue = destination["vue"] + nom + ".ejs";
        controller = destination["controller"] + nom + ".js";
        css = destination["css"] + nom + ".css";
        console.log(nomfichier + " " + vue + " " + controller + " " + css + " ");
        if (!existsSync(vue)) {
            if (!existsSync(controller)) {
                if (!existsSync(css)) {
                    try {
                        CreeFichier();
                        CreeFichier();
                        CreeFichier();
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
    if (destination != "" && nom != "" || destination != null && nom != null) {
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

async function SupprimerFichier(destination, nom) {
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

async function CopyDir(chemin, destination) {
    if (chemin.indexOf(".") === -1) {
        await fs.stat(chemin, async function(err, stat) {
            if (err)
                throw err;
            else if (stat) {
                await fs.stat(destination, async function(err, stat) {
                    if (stat) {
                        if (os.platform() == "win32") {
                            try {
                                chemin = chemin.replace("/", "\\");
                                destination = destination.replace("/", "\\");
                                let nameDoc = chemin.substring(chemin.lastIndexOf("\\") + 1).replace("\\", "");
                                await CreateDir(destination, nameDoc);
                                child_proc.exec('xcopy /e ' + chemin + " " + destination + "\\" + nameDoc, (err, stdout, stderr) => {
                                    if (err) console.log(err);
                                });
                            } catch (err) {
                                console.log(err);
                            }
                        } else if (os.platform() == "linux") {
                            try {
                                chemin = chemin.replace("\\", "/");
                                destination = destination.replace("\\", "/");
                                let nameDoc = chemin.substring(chemin.lastIndexOf("/") + 1).replace("/", "");
                                await CreateDir(destination, nameDoc);
                                child_proc.exec('cp -r ' + chemin + " " + destination + "/" + nameDoc, (err, stdout, stderr) => {
                                    if (err) console.log(err);
                                });
                            } catch (err) {
                                console.log(err)
                            }
                        }
                    } else if (err) {
                        throw err;
                    }
                })
            }
        })
    }
}

exports.CopierDossier = CopyDir;
exports.CopyDir = CopyDir;
exports.Supp_Files = SupprimerFichier;
exports.CreeDossier = CreeDossier;