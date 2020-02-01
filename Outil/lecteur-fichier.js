let fs = require('fs')

exports.ScanDossier = function ScanDosier(liensDossier) {
    console.log("Scan Dossier : " + liensDossier)
    let document = [];

    fs.readdir(liensDossier, function(err, items) {
        items.forEach(function(element, indice) {
            document[indice] = element;
        });
    });
    return document;
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