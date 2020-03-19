let fs = require('fs')
let fsPromises = require('fs').promises;
const child_proc = require('child_process');
const os = require('os');

exports.ScanDossier = async function ScanDosier(liensDossier, extensions) {
    //La valeurs extensions ne peut être que true ou false, elle détermine si les fichier && les dossier doivent être lister
    //La fonction anonyme getAsyncArray permet de récupérer les fichiers sans avoirs a utiliser de await en dehors de la fonctions
    //let promisesDocument = await fsPromises.readdir(liensDossier);
    let document = [];
    let documentReturn = await fsPromises.readdir(liensDossier);

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


exports.LireFichier = function LireFichier($fichier) {
    let infoFichier = "";
    infoFichier = fs.readFile();
}

exports.CopyFiles = async function CopyFiles(path, destination) {
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

exports.NettoyageCharacters = async function nettoyageCharacters(chaineCarach) {
    await chaineCarach.replace(
        'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ',
        'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
    await chaineCarach.replace('/([^.a-z0-9]+)/i ', '');
    await chaineCarach.toLowerCase(chaineCarach);

    return chaineCarach;
}