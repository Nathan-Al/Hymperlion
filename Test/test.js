let test2 = require("./test2");
let y = "Site";
let G = "";
let site = "Test/";


start();


function start() {
    /*
    G = test2.ScanDossier(y, true).then(function(response) {
        console.log("Webisitelist : " + response);
        website_list = response;
    }).catch(function(error) {
        console.log("Webisitelist : Erreur " + error);
    });


    H = test2.CreeDossier(site, "MamaSita");
    if (H)
        console.log("Ok Site créer")*/

    T = test2.CopierDossier(site + "MamaSita/", site + "copierA");
}


async function start2() {

    console.log("Mama Sita :");
    let mimiki = -15555555555555;
    //let G = TestPromise(mimiki);
    let y = "Site";
    let G = "";

    G = await test2.ScanDossier(y).then(function(response) {
        console.log("Webisitelist : " + response);
        website_list = response;
    }).catch(function(error) {
        console.log("Webisitelist : Erreur " + error);
    });

    console.log("While : " + G);

    /*test2.getData(y).then((response) => {
            console.log("Webisitelist : " + response);
            website_list = response;
            // mettre ta fonction synchrone ici si tu veux en utiliser une
        }).catch((error) => {
            console.log("Webisitelist : Erreur " + error);
        })
        */
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