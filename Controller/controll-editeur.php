<?php

require "../Outil/lecteur-liens.php";
require $outil_lecteur_fichier;
require $outil_editeur_fichier;

$liens_papa = "../Views/test.html";

$InfoFichier = LireFichier($liens_papa);

if(isset($_POST["code-ecrit"]))
{
    $info = $_POST["code-ecrit"];
    /*
    if(EditerFichier($liens_papa,$info,GetOctetFirtsLine($liens_papa)))
    {
        echo "<meta http-equiv='refresh' content='0; URL=".$controller_editeur."'>";
        GetOctetFirtsLine($liens_papa);
    }
    */
    if(BRUTEEditerFichier($liens_papa,$info))
    {
        echo "<meta http-equiv='refresh' content='0; URL=".$controller_editeur."'>";
    }

}


require  $require_vue_ecriture;