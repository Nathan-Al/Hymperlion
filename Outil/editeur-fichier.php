<?php

require "lecteur-liens.php";

function EditerFichier($chemin_fichier, $info)
{
    $chemin = $chemin_fichier;

    $file1 = fopen($chemin_fichier,'r+');

    fwrite($file1,$info);
    fclose($file1);
}