let fs = require('fs')
let fsPromises = require('fs').promises;
//var ncp = require('ncp').ncp;
//ncp.limit = 16;

//const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);

//const child = spawn('ls', ['-a', '-l']);


function TestPromise(mimiki) {
    return new Promise(
        function(resolve, reject) {
            // the function is executed automatically when the promise is constructed

            while (mimiki < 15000000000000000) {
                mimiki++;
            }
            // after 1 second signal that the job is done with the result "done"

            resolve("done");

            //setTimeout(() => reject(new Error("Whoops!")), 1000);
        });
}

function DoSomething(R) {
    let my = Math.random;
    R = R * my;

    return R;
}

exports.ScanDossier = async function ScanDosier(liensDossier, extensions) {
    //La valeurs extensions ne peut être que true ou false, elle détermine si les fichier && les dossier doivent être lister
    //La fonction anonyme getAsyncArray permet de récupérer les fichiers sans avoirs a utiliser de await en dehors de la fonctions
    let promisesDocument = undefined;
    let document = [];
    let documentReturn = "";

    let getAsyncArray = async function() {
        promisesDocument = fsPromises.readdir(liensDossier);
        return promisesDocument;
    };

    documentReturn = await getAsyncArray();
    if (extensions) {
        return documentReturn;
    } else {
        let i = 0;
        if (documentReturn instanceof Array)
            documentReturn.forEach((element, index) => {
                if (element.indexOf(".") == -1) {
                    document[i] = element;
                    i++;
                }
            });
        return document;
    }

}

exports.CreeSite = function CreerSite(nom, choix) {
    require(lli.manager_page_model);
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

exports.CreeDossier = async function CreeDossier(destination, nom) {
    if (await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
            if (err) return false;
        }))
        return true;
}

exports.CreePage = function CreePage(destination, nom) {
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

exports.CreeFichier = function CreeFichier(destination, nom) {
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

exports.CopierDossier = async function CopyDir(chemin, destination) {

    async function Leaddir(path) {
        return await fsPromises.readdir(path)
    }

    let Tableaux = await Leaddir(chemin);
    let dossier = Tableaux.filter(element => element.indexOf(".") === -1);
    let fichiers = Tableaux.filter(element => element.indexOf(".") > -1)

    dossier.forEach(async function(value) {
        let r = await Leaddir(chemin + value);
        r.forEach(function(value) {
            fichiers.push(value);
        })
        console.log(fichiers);
    })


    console.log("Dossier : " + dossier, "Fichiers : " + fichiers);
    /*async function Readdir(path) {
     await fs.readdir(path, function(err, files) {
            if (err != undefined) {
                throw (err);
            } else {
                let dossier = files.filter(element => element.indexOf(".") === -1);
                let fichiers = files.filter(element => element.indexOf(".") > -1)
                return  [dossier, fichiers]
            }
        });
}*/

    /*
        await Dossier.forEach(function(value, index) {
            fs.readdir(chemin + "/" + value, function(err, files) {
                if (err != undefined) {
                    throw (err);
                } else {
                    Fichiers.push(files)
                }
            });
        })

            fs.stat(chemin, (err, stat) => {
                let total = stat.size
                let progress = 0
                let read = fs.createReadStream(chemin)
                let write = fs.createWriteStream(destination)

                read.on('data', (chunk) => {
                    progress += chunk.length
                    console.log(Math.round(100 * progress / total) + "%")
                })

                read.pipe(write)
                write.on('finish', () => {
                    console.log("Fait")
                }).on('error', (error) => {
                    console.log(error);
                    throw error;
                })

            })*/

}

exports.TestPromise = TestPromise;
exports.DoSomething = DoSomething;