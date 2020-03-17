let fs = require('fs')
let fsPromises = require('fs').promises;
let Path = require("path");
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
    console.log(Path.join(__dirname, chemin));
    /* 
        Extraire nom du fichier ou du dossier de  : chemin : grâce a méthode lastIndexof & substring

        vérifier que : destination : n'existe pas si il existe vérifier qu'il est vide ou non

        si : chemin : pointe sur dossier faire 
        {
            Racine =  aborescence totale du dossier(chemin)
                        function aborescence totale du dossier(chemin)
                        {
                            ArrayDirComp = Leaddir(chemin);

                            Fichiers = ArrayDirComp.filter(si : . : a la fin)
                            Dossier = ArrayDirComp.filter (si : . : pas la fin)
                            let Directory = [];

                            Logique Array Sauvegarder path des fichiers et des dossier :
                                Directory = { 
                                    Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                    Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                    Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                    Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                }
                        }

            Si dossier est créer 
            - copier fichier dans dossier principale
            - créer dossier dans dossier principale
            - copier fichier dans chaque dossier créer dossier dans chaque dossier etc....
        }else
        {
            fonction de copy de fichiers simple.
        }
        
    */


    if (chemin.indexOf(".") === -1) {
        await fs.stat(chemin, async function(err, stat) {
            if (err)
                throw err
            else if (stat) {
                await fs.stat(destination, async function(err, stat) {
                    if (stat) {
                        /*
                            function aborescence totale du dossier(chemin)
                                {
                                    ArrayDirComp = Leaddir(chemin);

                                    Fichiers = ArrayDirComp.filter(si : . : a la fin)
                                    Dossier = ArrayDirComp.filter (si : . : pas la fin)
                                    let Directory = [];

                                    Logique Array Sauvegarder path des fichiers et des dossier :
                                        Tant que dossier existe :
                                        Directory.push = Leaddir(chemin dossier)
                                            Leaddir (chemin du dossier )
                                            {
                                                Array[0] = nom dossier
                                                Array.push(fsPromises.readdir(path));
                                                exemple Array dans Direcotry :
                                                Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                                Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                                Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                                Array [Dossier , fichiers 1 , fichiers 2 , fichiers 3 , etc....],
                                            }

                                        
                                } 
                        */

                        async function Leaddir(path,index) {
                            console.log("Leaddir : Path : " + path);
                            let data = undefined;
                            let AraAra = [];
                            let namepath = undefined;
                            let fichiers = undefined;
                            let dossiers = undefined;
                            let nb_dos = undefined;
                            /*let AraAra = [path+"/"][path.substring(path.lastIndexOf("/") + 1).replace("/", "")]*/
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
                                nb_dos =  dossiers.length;
                            } catch (error) {
                                console.log("Leaddir ERROR :" + error);
                            }
                            try {
                                fichiers = data.filter(element => element.indexOf(".") > -1);
                            } catch (error) {
                                console.log("Leaddir ERROR :" + error);
                            }
                            ArrayRetur = { "index":index, "path": namepath, "nb_dos": nb_dos, "dossier": dossiers, "fichier": fichiers };


                            // Tableaux : AraAra : Renvoie ["Chemin du dossier",Array avec contenue dossier]
                            return ArrayRetur;

                        }



                        let nameDoc = chemin.substring(chemin.lastIndexOf("/") + 1).replace("/", "");
                        let Racine = [await Leaddir(chemin,0)];
                        let fichiers = undefined;
                        let dossier = undefined;
                        /*let Racine = [];
                        Racine.push(await Leaddir(chemin));*/
                        Lila(Racine, chemin, 0);

                        async function Lila(Dossier, path, index) {
                            console.log("Lila :                                    Chemin : " + Dossier[index].path);
                            console.log("Lila :                                    Dossier : " + Dossier[index].dossier);
                            console.log("Lila :                                    Index : " + index);
                            let i = 1;
                            await Dossier[index].dossier.forEach(async function(value) {

                                console.log("Lila :                                    PASSAGE : " + i++);

                                if (value.indexOf(".") === -1) {

                                    console.log("lila : Path " + path + value);

                                    if (path.slice(-1) != "/")
                                        path = path + "/";

                                    await Dossier.push(await Leaddir(path + value,index));

                                    for (let r = 0; r < Dossier[index].nb_dos; r++); {
                                        try {
                                            console.log("lila : index - " + index);
                                            let moke = index+1;
                                            index = index + 1;
                                            if(index<moke || index>moke);
                                            console.log("__________________ALERT INDEX EST MAL INDEX _______________")
                                            
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

                        //RT(chemin,nameDoc,Racine,1,aRRay=[]);
                        async function RT(path, name, arrayDossier, Index, NameDir) {
                            console.log(" ", "Array Dossier : " + arrayDossier + " Index : " + Index)
                            if (arrayDossier[0] != undefined) {
                                // Créer Dossier racine
                                //await CreateDir(destination,name);
                                // Récupérer informations dans la racine

                                // Copier les fichiers dans la racine
                                console.log("Array : " + arrayDossier[Index] + " ou " + arrayDossier[0][0])

                                try {
                                    fichiers = arrayDossier[Index].filter(element => element.indexOf(".") > -1);
                                } catch (error) {
                                    console.log(error);
                                }

                                try {
                                    dossier = arrayDossier[Index].filter(element => element.indexOf(".") === -1);
                                } catch (error) {
                                    console.log(error);
                                }

                                fichiers.forEach(async function(value, index) {
                                    //let OkCopdir = await CopyFiles(path+"/"+value,destination+"/"+name)
                                })

                                dossier.forEach(async function(value, index) {
                                    //let OkCreat = await CreateDir(destination+"/"+arrayDossier[0],value)
                                })

                                /*if(OkCopdir==true && OkCreat== true)
                                {*/
                                //let NameDir=[];
                                dossier.forEach(function(value, index) {
                                    NameDir[index] = value;
                                });

                                NameDir.forEach(async function(value, index) {
                                    //arrayDossier.push(await Leaddir(chemin+"/"+value)) ;
                                    let MAMA = await Leaddir(chemin + "/" + value)
                                    MAMA.forEach(function(value, index) {
                                            arrayDossier.push(value);
                                        })
                                        //arrayDossier[index] = await Leaddir(chemin+"/"+value);
                                        //console.log("Array    :   "+arrayDossier);
                                    let V = arrayDossier[Index + 1];
                                    RT(V, value, arrayDossier, Index + 2, NameDir)
                                });

                                //RT()
                                //}
                            }
                        }
                    } else if (err)
                        throw err
                })
            }
        })
    } else if (chemin.indexOf(".") > -1) {
        CopyFiles(chemin, destination);
    }


    /*    await Dossier.forEach(function(value, index) {
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

async function CopyFiles(path, destination) {
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
}

async function CreateDir(desti, name) {
    await fs.mkdir(desti + "/" + name, { recursive: true }, (err) => {
        if (err) throw err;
        else
            return true;
    });
}

exports.CopyFiles = CopyFiles;
exports.CreateDir = CreateDir;
exports.TestPromise = TestPromise;
exports.DoSomething = DoSomething;