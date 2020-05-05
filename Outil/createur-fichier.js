const lli = require("../Outil/lecteur-liens.js");
const fs = require("fs");
let fsPromises = require('fs').promises;
const child_proc = require('child_process');
const os = require('os');
const normalisations = require(lli.outil_normalisations);
const lecteur_fichiers = require("../Outil/lecteur-fichier.js")

var NameSpace_CreateurFichiers = {
        'name': 'Createur Fichiers . js',
        'Date de création ': '22/03/2020',
        'Utilisations': 'Fichiers classant toute fonction de création de document/dossier',
        'langage': 'JavaScript',
        'langue': 'Français',

        Site: {
            créer: async function CreerSite(nom, choix, theme) {
                //require(lli.manager_page_model);
                let racine_site = lli.array_racine[5]; //lli.array_racine[5];
                let dossier = ["Views", "Controller", "Css", "Model", "Outil", "Error", "Medias-Site"];
                let ok = 0;
                let do_all_the_work;

                if (choix) {
                    if (NameSpace_CreateurFichiers.Dossier.créer(racine_site, nom)) {
                        if (lecteur_fichiers.NameSpace_LecteurFichiers.Dossier.copier(racine_template +
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
                    try {
                        await NameSpace_CreateurFichiers.Dossier.créer(racine_site, nom);
                        try {
                            await dossier.forEach(async function(value) {
                                if (await NameSpace_CreateurFichiers.Dossier.créer(racine_site + nom, value)) {
                                    ok++;
                                }
                            })
                        } catch (e) {
                            do_all_the_work = false;
                            throw e;
                        }

                    } catch (e) {
                        do_all_the_work = false;
                        throw e;
                    }

                    if (ok = 6) {
                        await NameSpace_CreateurFichiers.Fichier.créer(racine_site + nom +
                            "/", "index", ".ejs")
                        await NameSpace_CreateurFichiers.Fichier.créer(racine_site + nom +
                            "/", ".", "htaccess")
                        await NameSpace_CreateurFichiers.Site.page(racine_site + nom, "accueil")
                        do_all_the_work = true;
                    }
                }

                return do_all_the_work;
            },
            page: async function CreePage(destination, nom) {
                if (destination != null && nom != null) {
                    let fichier = {
                        "vue": destination + "/Views/",
                        "controller": destination + "/Controller/",
                        "css": destination + "/Css/"
                    };

                    //console.log(nomfichier + " " + vue + " " + controller + " " + css + " ");
                    if (fs.existsSync(fichier["vue"] + "view-" + nom + ".ejs")) {
                        console.log("Vue existe déja")
                        return new Error("Vue existe déja");
                    } else {
                        await NameSpace_CreateurFichiers.Fichier.créer(fichier["vue"], "view-" + nom, ".ejs");
                    }

                    if (fs.existsSync(fichier["controller"] + "control-" + nom + ".js")) {
                        console.log("Controller existe déja")
                        return new Error("Controller existe déja");
                    } else {
                        await NameSpace_CreateurFichiers.Fichier.créer(fichier["controller"], "control-" + nom, ".js");
                    }

                    if (fs.existsSync(fichier["css"] + "css-" + nom + ".css")) {
                        console.log("Css existe déja")
                        return new Error("Css existe déja");
                    } else {
                        await NameSpace_CreateurFichiers.Fichier.créer(fichier["css"], "css-" + nom, ".css");
                    }
                }
            }
        },

        Fichier: {
            ecrire: async function EcrireDansFichiers(path, trucAEcrire) {
                //fs.stat(path, async(err, stat) => {
                if (!fs.statSync(path)) {
                    if (err.code === 'EEXIST') {
                        console.error('myfile already exists');
                        throw err;
                    }
                    throw err;
                } else {
                    let write = await fs.createWriteStream(path)
                    await write.write(trucAEcrire, 'utf-8')

                    //let j = await new Promise(function(resolve, reject) {
                    let k = write.on('end', async function() {
                            resolve(true);
                        }).on('error', async(err) => {
                            console.log("Erreur to read on data :: " + err);
                            throw err;
                        })
                        //})

                    return k;
                }
                // });
            },
            créer: async function CreeFichier(destination, nom, extensions) {
                if (nom.lastIndexOf("/") != "-1")
                    nom.replace("/", "")
                if (nom.lastIndexOf(".") != -1)
                    nom = nom.slice(0, nom.lastIndexOf("."))

                if (destination != "" && nom != "" || destination != null && nom != null) {
                    if (destination.slice(-1) != "/") {
                        destination = destination + "/";
                    }

                    destination = destination.replace("//", "/");

                    if (extensions.lastIndexOf(".") == -1 || extensions.lastIndexOf(".") != 0)
                        extensions = "." + extensions;

                    await fs.stat(destination, async function(err, stat) {
                        if (stat) {
                            try {
                                await fsPromises.writeFile(destination + nom + extensions, "", (err) => {
                                    throw err;
                                });
                                return true;
                            } catch (Exception) {
                                throw Exception;
                            }
                        } else {
                            throw err;
                        }
                    });
                }
            },
        },

        Dossier: {
            créer: async function CreeDossier(destination, nom) {
                if (await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
                        if (err) return false;
                    })) return true;
            }
        }
    }
    /*
    CreerSite = async function CreerSite(nom, choix, theme) {
        //require(lli.manager_page_model);
        let racine_site = "Site/"; //lli.array_racine[5];
        let dossier = ["Views", "Control", "Css", "Model", "Tools", "Error", "Medias", "BDD"];
        let ok = 0;
        let do_all_the_work;

        if (choix) {
            if (CreeDossier(racine_site, nom)) {
                if (CopyFiles(racine_template +
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
            try {
                await CreeDossier(racine_site, nom);
                try {
                    await dossier.forEach(async function(value) {
                        if (await CreeDossier(racine_site + nom, value)) {
                            ok++;
                        }
                    })
                } catch (e) {
                    do_all_the_work = false;
                    throw e;
                }

            } catch (e) {
                do_all_the_work = false;
                throw e;
            }

            if (ok = 6) {
                let work_do = 0;
                if (await CreeFichier(racine_site + nom + "/", "index", ".ejs")) {
                    work_do++;
                }
                if (await CreeFichier(racine_site + nom + "/", ".", "htaccess")) {
                    work_do++;
                }
                if (await CreeFichier(racine_site + nom + "/Tools/", "lecteur-liens", ".php")) {
                    work_do++;
                }
                if (await CreePage(racine_site + nom, "accueil")) {
                    work_do++;
                }
                if (work_do == 4)
                    do_all_the_work = true;
            }
        }

        return do_all_the_work;
    }

    async function CreeDossier(destination, nom) {
        if (await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
                if (err) return false;
            })) return true;
    }

    async function CreePage(destination, nom) {
        let page_ok = 0;
        let finish = false;
        if (destination != null && nom != null) {
            let fichier = {
                "vue": destination + "/Views/",
                "controller": destination + "/Controller/",
                "css": destination + "/Css/"
            };

            if (fs.existsSync(fichier["vue"] + "view-" + nom + ".ejs")) {
                console.log("Vue existe déja")
                return new Error("Vue existe déja");
            } else {
                await CreeFichier(fichier["vue"], "view-" + nom, ".ejs");
                page_ok++;
            }

            if (fs.existsSync(fichier["controller"] + "control-" + nom + ".js")) {
                console.log("Controller existe déja")
                return new Error("Controller existe déja");
            } else {
                await CreeFichier(fichier["controller"], "control-" + nom, ".js");
                page_ok++;
            }

            if (fs.existsSync(fichier["css"] + "css-" + nom + ".css")) {
                console.log("Css existe déja")
                return new Error("Css existe déja");
            } else {
                await CreeFichier(fichier["css"], "css-" + nom, ".css");
                page_ok++;
            }
        }
        if (page_ok == 3)
            finish = true;

        return finish;
    }

    async function CreeFichier(destination, nom, extensions) {
        let finish = false;
        if (nom.lastIndexOf("/") != "-1")
            nom.replace("/", "")
        if (nom.lastIndexOf(".") != -1)
            nom = nom.slice(0, nom.lastIndexOf("."))

        if (destination != "" && nom != "" || destination != null && nom != null) {
            if (destination.slice(-1) != "/") {
                destination = destination + "/";
            }

            destination = destination.replace("//", "/");

            if (extensions.lastIndexOf(".") == -1 || extensions.lastIndexOf(".") != 0)
                extensions = "." + extensions;

            if (fs.existsSync(destination)) {
                try {
                    await fs.writeFile(destination + nom + extensions, "", (err) => {
                        if (err) { throw err };
                    })
                    finish = true;
                } catch (e) {
                    throw e;
                }

            } else {
                finish = false;
            }
        }
        return finish;
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
    */
exports.NameSpace_CreateurFichiers = NameSpace_CreateurFichiers;