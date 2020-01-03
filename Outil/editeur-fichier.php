<?php

require "lecteur-liens.php";

function EditerFichier($chemin_fichier, $info)
{
    $infoarray = array();
    $file = fopen($chemin_fichier,'r+');
    $m = 0;
    //Taille en octet des informations envoyer
    $taille_info = strlen($info);
    $l=0;
    $output = "</br >";
    parse_str($info,$output);
    echo nl2br(htmlspecialchars($info));
    echo $output[1];
    /*
    for($o=0;$o< $taille_info;$o++)
    {
        if(nl2br(htmlspecialchars($info))!=" ")
        {
            $infoarray[$l] =  $infoarray[$l].nl2br(htmlspecialchars($info));
        }else
        {
            $l++;
        }
    }
    */
    
    /* Taille du fichier en octet */
    $taille_fichier = filesize($chemin_fichier);
    /* Lis chaque ligne en utilisant la taille du fichier en octet */
    for($x=0;$x<$taille_fichier;$x++)
    {
        if(fgets($file))
        $m++;
    }

    //echo $taille_info;
    //echo "<br>".$taille_fichier;
    
    /*
        if(fwrite($file,$info))
            $ok = true;
        else
            $ok=false;
    */
    fclose($file);

    //return $ok;
}