let fs = require('fs')
let fsPromises = require('fs').promises;

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

exports.CopyFile = CopyFile = (chemin, destination) => {

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
        })

    })
}