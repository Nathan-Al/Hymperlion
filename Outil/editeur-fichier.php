<?php

require "lecteur-liens.php";
require_once $outil_lecteur_fichier;

function EditerFichier($chemin_fichier, $info, $ArrayOctetFichier)
{
    $infoarray = array();
    $infofichier = array();

    $file = fopen($chemin_fichier,'r/r+');
    $infofichier = LireFichier($chemin_fichier);

    $ligne_envoyer = 0;
    $ligne_fichier = 0;
    $output = "<br />";
    $octet_ligne_a_modifier = 0;
    $octet_line = 0;

    //Taille en octet des informations envoyer
    $taille_info = strlen($info);
    /* Taille du fichier en octet */
    $taille_fichier = filesize($chemin_fichier);
    
    $info_htmldecode = nl2br(MiseEnHtmlDecoded($info));
    $infoarray =  explode($output,$info_htmldecode);

    $ligne_envoyer = sizeof($infoarray);


    if($taille_info!=$taille_fichier)
    {
        if($taille_fichier>0)
        {
            /* Lis chaque ligne en utilisant la taille du fichier en octet */
            
            for($grace=0;$grace<$ligne_envoyer;$grace++)
            {
                $mias = trim(MiseEnHtmlDecoded($infofichier[$grace]));
                $gric= trim($infoarray[$grace]);
                if($ArrayOctetFichier[$grace]<0)
                $octet_line = $ArrayOctetFichier[$grace];
                else
                {
                    for($lit=0;$lit<$grace;$lit++)
                    {
                        $octet_line = $octet_line+$ArrayOctetFichier[$grace];
                    }
                }

                if(fgets($file,$taille_fichier))
                    $ligne_fichier++;
                   
                if(strlen($mias)!=strlen($gric))
                {
                    echo "Grace : ".$grace;
                    echo "<br>";
                    echo $gric;
                    echo "<br>";
                    echo "Ligne : ".$ligne_fichier;
                    echo "<br>";
                    echo "Pointeur ".fseek($file,$ligne_fichier);
                    echo "<br>";
                    echo "Pointeur derrière ",ftell($file);
                    echo "<br>";
                    echo "Octet :".$octet_line;
                    echo "<br>";
                    fseek($file,$octet_line);
                    $convT =  mb_convert_encoding($gric,mb_detect_encoding($gric),"UTF-8");
                    //$convT = cleanEncoding($gric);
                    fwrite($file, $convT);
                }
            }
        }else
        {
            fputs($file,$infoarray);
        }

    }
    //echo $ligne_fichier."<br>".$ligne_envoyer;
   
/*
    echo $info_htmldecode;
    echo "  <br>--------------<br>";
    for($t=0;$t<sizeof($infofichier);$t++)
    echo  MiseEnHtmlDecoded($infofichier[$t]);
    */
/*
    if(fwrite($file,$info))
        $ok = true;
    else
        $ok=false;
*/
    fclose($file);

    //return $ok;
}

function MiseEnHtmlDecoded($string)
{
    $stringArrayFarAway = htmlspecialchars($string);
    return $stringArrayFarAway;
}

function BRUTEEditerFichier($chemin_fichier, $info)
{
    $infoarray = array();
    $infofichier = array();

    $file = fopen($chemin_fichier,'r/r+');
    $infofichier = LireFichier($chemin_fichier);

    $ligne_envoyer = 0;
    $ligne_fichier = 0;

    //Taille en octet des informations envoyer
    $taille_info = strlen($info);
    /* Taille du fichier en octet */
    $taille_fichier = filesize($chemin_fichier);

    $ligne_envoyer = sizeof($infoarray);

    if($taille_info!=$taille_fichier)
    {
        if(file_put_contents ($chemin_fichier,$info ))
            return true;
        else
            return false;
    }
    
    if(fwrite($file,$info))
        $ok = true;
    else
        $ok=false;
    
    fclose($file);

    return $ok;
}

function cleanEncoding( $text, $type='standard' ){
    // determine the encoding before we touch it
    $encoding = mb_detect_encoding($text, 'UTF-8, ISO-8859-1');
    // The characters to output
    if ( $type=='standard' ){
        $outp_chr = array('...',          "'",            "'",            '"',            '"',            'â¢',            '-',            '-'); // run of the mill standard characters
    } elseif ( $type=='reference' ) {
        $outp_chr = array('&#8230;',      '&#8216;',      '&#8217;',      '&#8220;',      '&#8221;',      '&#8226;',      '&#8211;',      '&#8212;'); // decimal numerical character references
    }
    // The characters to replace (purposely indented for comparison)
        $utf8_chr = array("\xe2\x80\xa6", "\xe2\x80\x98", "\xe2\x80\x99", "\xe2\x80\x9c", "\xe2\x80\x9d", '\xe2\x80\xa2', "\xe2\x80\x93", "\xe2\x80\x94"); // UTF-8 hex characters
        $winc_chr = array(chr(133),       chr(145),       chr(146),       chr(147),       chr(148),       chr(149),       chr(150),       chr(151)); // ASCII characters (found in Windows-1252)
    // First, replace UTF-8 characters.
    $text = str_replace( $utf8_chr, $outp_chr, $text);
    // Next, replace Windows-1252 characters.
    $text = str_replace( $winc_chr, $outp_chr, $text);
    // even if the string seems to be UTF-8, we can't trust it, so convert it to UTF-8 anyway
    $text = mb_convert_encoding($text, 'UTF-8', $encoding);
    return $text;
    }