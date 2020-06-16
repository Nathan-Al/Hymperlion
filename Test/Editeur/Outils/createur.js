//const lli = require("../Outil/lecteur-liens.js");
const fs = require("fs");
let fsPromises = require('fs').promises;
const child_proc = require('child_process');
const os = require('os');
//const normalisations = require(lli.outil_normalisations);
//const lecteur_fichiers = require("lecteur.js")

var NameSpace_CreateurFichiers = {
    'createur': 'Prudentos Allan',
    'name': 'Createur Fichiers . js',
    'Date de création ': '22/05/2020',
    'Utilisations': 'Fichiers classant toute fonction de création de document/dossier',
    'langage': 'JavaScript',
    'langue': 'Français',

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
exports.NameSpace_CreateurFichiers = NameSpace_CreateurFichiers;