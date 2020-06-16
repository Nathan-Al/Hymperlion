let fs = require('fs')
let fsPromises = require('fs').promises;
let Path = require("path");
const child_proc = require('child_process');
const os = require('os');
const rand = require('php')

const readline = require('readline');

//var ncp = require('ncp').ncp;
//ncp.limit = 16;

//const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);

//const child = spawn('ls', ['-a', '-l']);


var NameSpace_Test = {
    'name': 'Lecteur Fichiers . js',
    'Date de création ': '22/03/2020',
    'Utilisations': 'Fichiers classant toute fonction de lecture de document/dossier',
    'langage': 'JavaScript',
    'langue': 'Français',

    Site: {
        créer: async function CreerSite(nom, choix, theme) {
            //require(lli.manager_page_model);
            let racine_site = "Test/Site/"; //lli.array_racine[5];
            let dossier = ["Views", "Controller", "Css", "Model", "Outil", "Error", "Medias-Site"];
            let ok = 0;
            let do_all_the_work;

            if (choix) {
                if (NameSpace_Test.Dossier.créer(racine_site, nom)) {
                    if (NameSpace_Test.Fichier.copier(racine_template +
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
                    await NameSpace_Test.Dossier.créer(racine_site, nom);
                    try {
                        await dossier.forEach(async function(value) {
                            if (await NameSpace_Test.Dossier.créer(racine_site + nom, value)) {
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
                    let i, h, a, o = false;

                    try {
                        i = await NameSpace_Test.Fichier.créer(racine_site + nom +
                            "/", "index", ".ejs");
                    } catch (error) {
                        console.log(error);
                        do_all_the_work = false;
                        throw error;
                    }
                    try {
                        h = await NameSpace_Test.Fichier.créer(racine_site + nom +
                            "/", ".", "htaccess");
                    } catch (error) {
                        console.log(error);
                        do_all_the_work = false;
                        throw error;
                    }
                    try {
                        a = await NameSpace_Test.Site.page(racine_site + nom, "accueil");
                    } catch (error) {
                        console.log(error);
                        do_all_the_work = false;
                        throw error;
                    }
                    try {
                        o = await NameSpace_Test.Fichier.créer(racine_site + nom +
                            "/Outil", "lecteur-liens", ".js");
                    } catch (error) {
                        console.log(error);
                        do_all_the_work = false;
                        throw error;
                    }

                    //if (i & h & a & o)
                    console.log(i, h, a, o);
                    do_all_the_work = true;
                }
            }

            return do_all_the_work;
        },
        page: async function CreePage(destination, nom) {
            let everyThingIsOk = false;
            let un, deux, trois = false;

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
                    un = await NameSpace_Test.Fichier.créer(fichier["vue"], "view-" + nom, ".ejs");
                }

                if (fs.existsSync(fichier["controller"] + "control-" + nom + ".js")) {
                    console.log("Controller existe déja")
                    return new Error("Controller existe déja");
                } else {
                    deux = await NameSpace_Test.Fichier.créer(fichier["controller"], "control-" + nom, ".js");
                }

                if (fs.existsSync(fichier["css"] + "css-" + nom + ".css")) {
                    console.log("Css existe déja")
                    return new Error("Css existe déja");
                } else {
                    trois = await NameSpace_Test.Fichier.créer(fichier["css"], "css-" + nom, ".css");
                }
            }
            if (un & deux & trois == true)
                everyThingIsOk = true;
            return everyThingIsOk;
        }
    },

    Dossier: {
        lire: async function ScanDosier(liensDossier, extensions) {
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
        },
        créer: async function CreeDossier(destination, nom) {
            if (await fs.mkdir(destination + "/" + nom, { recursive: true }, (err) => {
                    if (err) return false;
                })) return true;
        },
        copier: async function CopyDir(chemin, destination) {
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
                                        await NameSpace_Test.Dossier.créer(destination, nameDoc);
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
                                        await NameSpace_Test.Dossier.créer(destination, nameDoc);
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
    },

    Fichier: {
        lire: async function LireDansFichiers(fichiers) {

            if (typeof(fichiers) == 'string') {
                let readS;
                try {
                    readS = await fs.createReadStream(fichiers);
                } catch (err) {
                    throw err;
                }
                let datas = [];
                datas[0] = fichiers;
                let buffed = Buffer.alloc(10);

                if (await readS.readable) {
                    console.log("Lisable");
                    await readS.on('data', function(chunk) {
                        buffed = chunk;
                    }).on('error', async(errt) => {
                        console.log("Erreur to read on data :: " + errt);
                        throw errt;
                    });
                    datas[1] = await new Promise(function(resolve, reject) {
                        readS.on('end', async function() {
                            resolve(await buffed.toString());
                        }).on('error', async(err) => {
                            console.log("Erreur to read on data :: " + err);
                            throw err;
                        })
                    })
                    return datas;
                } else {
                    return new Error("Stream non lisible : Le fichiers n'est pas lisible")
                }

            } else {
                return new Error("La variable envoyée n'est pas une variable.");
            }

        },
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
        copier: async function CopyFiles(path, destination) {
            //console.log("path : "+path+" destination : "+destination)
            // Fonction de copy de fichiers il faut pour cela que : path = dossier/fichier.ext : & : destination = dossier/fichiers.ext :
            let nomdoc = path.substring(path.lastIndexOf("/") + 1).replace("/", "")
            fs.stat(path, (err, stat) => {

                if (err) {
                    console.log("Erreur to stat : " + err);
                    throw err;
                } else {
                    let total = stat.size
                    let progress = 0
                    let read = fs.createReadStream(path)
                    let write = fs.createWriteStream(destination + "/" + nomdoc)

                    read.on('data', (chunk) => {
                        progress += chunk.length
                        console.log(Math.round(100 * progress / total) + "%")
                    }).on('error', (error) => {
                        console.log("Erreur to read on data :: " + error);
                        throw error;
                    })

                    read.pipe(write).on('error', (error) => {
                        console.log("Erreur to read.pipe :: " + error);
                        throw error;
                    })

                    write.on('finish', () => {
                        console.log("Fait")
                        return true;
                    }).on('error', (error) => {
                        console.log("Erreur to write :: " + error);
                        throw error;
                    })
                }
            });
        },
        créer: async function CreeFichier(destination, nom, extensions) {
            let everyThingIsOk = false;

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
                            if (await fsPromises.writeFile(destination + nom + extensions, "", (err) => {
                                    throw err;
                                }))
                                everyThingIsOk = true;
                        } catch (Exception) {
                            throw Exception;
                        }
                    } else {
                        throw err;
                    }
                });
            }
        }
    }
}

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


async function CreateDir(desti, name) {
    await fs.mkdir(desti + "/" + name, { recursive: true }, (err) => {
        if (err) throw err;
        else
            return true;
    });
}

async function LireDir(chemin, destination) {
    console.log(Path.join(__dirname, chemin));

    //let nameDoc = chemin.substring(chemin.lastIndexOf("/") + 1).replace("/", "");
    //let fichiers = undefined;
    //let dossier = undefined;
    //let index = 0;

    //let Racine = [await Leaddir(chemin, 0)];

    //Lila(Racine, chemin, 0);
    if (chemin.indexOf(".") === -1) {
        await fs.stat(chemin, async function(err, stat) {
            if (err)
                throw err
            else if (stat) {
                await fs.stat(destination, async function(err, stat) {
                    if (stat) {

                        async function Lila(Dossier, path, index) {
                            console.log("Lila 1 :                                    Chemin : " + path);
                            console.log("Lila 2 :                                    Dossier : " + Dossier[index].dossier);
                            console.log("Lila 3 :                                    Index : " + index);
                            let i = 1;
                            Dossier[index].dossier.forEach(async function(value, nb_boucle) {

                                console.log("Lila 4 :                                    PASSAGE : " + nb_boucle);

                                if (value.indexOf(".") === -1) {

                                    console.log("lila 5 : Path                             " + path + value);

                                    if (path.slice(-1) != "/")
                                        path = path + "/";

                                    Dossier.push(await Leaddir(path + value, await index + 1));

                                    for (let r = 0; r < Dossier[index].nb_dos; r++); {
                                        try {
                                            console.log("lila 6 :                           index - " + index);

                                            index = index + 1;

                                            console.log("__________________       " + index + "         _______________")

                                            Lila(Dossier, Dossier[index].path, index);

                                        } catch (er) {
                                            console.log("Lila ERROR : " + er)
                                        }
                                    }

                                } else {
                                    console.log("Lila : Pas de dossier")
                                }
                            });

                        };
                    } else if (err)
                        throw err
                })
            }
        })
    } else if (chemin.indexOf(".") > -1) {
        CopyFiles(chemin, destination);
    }

    async function Leaddir(path, index) {
        console.log("Leaddir 1 :                          Path : " + path);
        let data = undefined;

        let namepath = undefined;
        let fichiers = undefined;
        let dossiers = undefined;
        let nb_dos = undefined;

        ;
        if (path.slice(-1) != "/")
            namepath = path + "/";
        else
            namepath = path;
        try {
            data = await fsPromises.readdir(path);
        } catch (error) {
            console.log("Leaddir ERROR : " + error)
        }
        try {
            dossiers = data.filter(element => element.indexOf(".") === -1);
            nb_dos = dossiers.length;
        } catch (error) {
            console.log("Leaddir ERROR :" + error);
        }
        try {
            fichiers = data.filter(element => element.indexOf(".") > -1);
        } catch (error) {
            console.log("Leaddir ERROR :" + error);
        }
        ArrayRetur = { "index": index, "path": namepath, "nb_dos": nb_dos, "dossier": dossiers, "fichier": fichiers };


        // Tableaux : AraAra : Renvoie ["Chemin du dossier",Array avec contenue dossier]
        return ArrayRetur;
    }
}

function NettoyageCharac(variable) {
    console.log(variable)
    variable = variable.trim();
    let charac_a_enlever = ['\\', "/", ":", "*", "?", '"', "<", ">", "|", " "];
    charac_a_enlever.forEach(function(value) {
        variable = variable.replace(value, "");
    });
    variable = variable.trim();

    console.log(variable)
    return variable;
}

exports.NameSpace_Test = NameSpace_Test;