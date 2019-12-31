import { BodyDiv1 } from "./script-pageHtml";

const BodyDiv = BodyDiv1;
const body = document.body;
const div_affichage_action = document.getElementById('div-affichage-action');
const button_gestPage = document.getElementById("button-gestPage");
const button_gestContr = document.getElementById("button-gestContr");
const button_gestScript = document.getElementById("button-gestScript");
const button_para = document.getElementById("button-para");
const contenue_div_affichage_action = document.getElementById("div-affichage-action");
const div1 = document.getElementById("listigue-boutton");
const listpage = new Array();
const str = "<?php echo $Dossier ?>";

for (i = 0; i < sizeof(str); i++) {
    listpage[i] = "<?php echo $Dossier" + [i];
}

//const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

div1.setAttribute('id', 'div-1');
div2.setAttribute('id', 'div-2');
div3.setAttribute('id', 'div-3');

div1.classList.add('div-1');
div2.classList.add('div-2');
div3.classList.add('div-3');

button_gestPage.addEventListener('click', AffichageListingPage);
button_gestContr.addEventListener('click', AffichageModificationPage);
button_gestScript.addEventListener('click', AffichageModifThemPage);

function AffichageListingPage() {
    if (contenue_div_affichage_action) {
        IfElementExisteSupp();
    }
    for (p = 0; p < sizeof(listpage); p++) {
        div1.append(listpage[p]);
    }

}

function AffichageModificationPage() {
    if (contenue_div_affichage_action) {
        IfElementExisteSupp();
    }
    contenue_div_affichage_action.append();
}

function AffichageModifThemPage() {
    if (contenue_div_affichage_action) {
        IfElementExisteSupp();
    }
    contenue_div_affichage_action.append();
}

function IfElementExisteSupp() {
    while (contenue_div_affichage_action.firstChild) {
        contenue_div_affichage_action.removeChild(contenue_div_affichage_action.firstChild);
    }
}