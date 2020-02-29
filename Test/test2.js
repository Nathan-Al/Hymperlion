let fs = require('fs')
let fsPromises = require('fs').promises;
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

exports.TestPromise = TestPromise;
exports.DoSomething = DoSomething;