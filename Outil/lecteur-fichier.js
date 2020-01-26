let fs = require('fs')

function ScanDosier($liensDossier) {
    fs.readFile($liensDossier, { "utf-8", false }, callback);
}