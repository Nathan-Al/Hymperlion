let fs = require("fs")
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

const child = spawn('ls', ['-a', '-l']);


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
exports.ScanDossier = function ScanDosier(liensDossier) {
        let datas = [];
        ls.stdout.on('data', (liensDossier) => {
            datas = { data };
            //console.log(`stdout: ${data}`);
        });
        /*
        console.log("Scan Dossier : " + liensDossier)
        let document = undefined;
        let pafait = true;
        while (pafait) {
            let R = fs.readdir(liensDossier, function(err, items) {
                items.forEach(function(element, indice) {
                    document[indice] = element;
                    //console.log(document[indice] + " indice : " + indice);
                });
                console.log("Scan Dossier hors : ---------- : " + document[0]);

            });
            if (R == true)
                pafait = false
        }

*/
        return data;
    }
    /*
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
    }*/
exports.TestPromise = TestPromise;
exports.DoSomething = DoSomething;