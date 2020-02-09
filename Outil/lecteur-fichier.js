let fs = require('fs')
let fsPromises = require('fs').promises;

exports.ScanDossier = function ScanDosier(liensDossier) {
        return new Promise(function(resolved, reject) {
            console.log("Scan Dossier : " + liensDossier)
            let document = [];
            fs.readdir(liensDossier, function(err, items) {
                items.forEach(function(element, indice) {
                    document[indice] = element;
                    //console.log(document[indice] + " indice : " + indice);
                });
                console.log("Scan Dossier hors : ---------- : " + document[0]);
                if (err)
                    reject(err);
            })
            resolved(document)
        });

        //resolve(document);

        /*
                fs.readdir(liensDossier,
                    function(err, items) {
                        items.forEach(function(element, indice) {
                            document[indice] = element;
                            //console.log(document[indice] + " indice : " + indice);
                        });
                        console.log("Scan Dossier hors : ---------- : " + document[0]);
                    });
                return document;*/
    }
    /*
    exports.ScanDossier = function ScanDosier(liensDossier) {
        console.log("Scan Dossier : " + liensDossier)
        let document = [];
        document = fs.readdirSync(liensDossier);
        document.forEach(function(element, indice) {
            //document[indice] = element;
            console.log(document[indice] + " indice : " + indice);
        });

        return document;
    };*/
    /*
    exports.ScanDossier = function ScanDosier(liensDossier) {
            return new Promise(function(resolve, reject) {
                console.log("Scan Dossier : " + liensDossier)
                let document = [];
                fs.readdir(liensDossier, function(err, items) {
                    items.forEach(function(element, indice) {
                        document[indice] = element;
                        //console.log(document[indice] + " indice : " + indice);
                    });
                    console.log("Scan Dossier hors : ---------- : " + document[0]);
                    if (document[0] != undefined) {
                        resolve(document);
                    } else {
                        reject(document);
                    }
                });

            });
        }*/
    /*
    exports.ScanDossier = function ScanDosier(liensDossier) {
        console.log("Scan Dossier : " + liensDossier)
        let document = [];

        fs.readdir(liensDossier, function(err, items) {

            items.forEach(function(element, indice) {
                document[indice] = element;
            });
            console.log("Scan Dossier hors : ---------- : " + document[0]);
        });

        return document;
    }*/

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