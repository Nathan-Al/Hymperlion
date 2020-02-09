let test2 = require("./test2");

start();

function start() {

    console.log("Mama Sita :");
    let mimiki = -15555555555555;
    //let G = TestPromise(mimiki);
    let y = "Site";
    let G = "";

    G = test2.ScanDossier(y);
    console.log("While : " + G);

    /*
    let G = test2.ScanDossier(y).then((a) => {
        console.log("Webisitelist : " + a);
    }).catch((e) => {
        console.log("Webisitelist : Erreur " + e);
    });
    */

    let R = test2.DoSomething(mimiki)
    let MR = G + R;
    console.log("Grisse :", MR);

    console.log("mimiki :" + mimiki);
}