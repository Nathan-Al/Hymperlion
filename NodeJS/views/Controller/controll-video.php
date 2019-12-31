<?php
    require "../Outil/lecteur-liens.php";
    require $require_lecteur_fichier;
    require $require_lecteur_video;

    if(isset($_GET["video"]))
    {
        if(isset($_GET["dossier"]))
        {
            if($_GET["dossier"]!=null && $_GET["dossier"]!="")
            {
                $dos = $dos."/".$_GET["dossier"];
                $meza = $liensHomeVideo.$dos."/";
            }
        }else
        {
            $meza = $liensHomeVideo;
        }

        if($_GET["video"]=="default")
        {
            $dossier= array();
            $fichiers = ScanFichiers($meza);
            $dossier = ScanDossier($meza);
            require $require_vue_affichage_video;  
        }
        elseif($_GET["video"]!="" && $_GET["video"]!=null)
        {
            $dossier= array();
            $video = $_GET["video"];
            $videoenvtt = str_replace(".mp4",".vtt", $video);
            $videosansmp4 = str_replace(".mp4"," ", $video);
            
            $fichiers = ScanFichiers($meza);
            $dossier = ScanDossier($meza);
            require $require_vue_affichage_video;
        }elseif(isset($_GET["dossier"]))
        {
            if($_GET["NomDossierPlus"]!=null && $_GET["NomDossierPlus"]!="")
            {
                echo $_POST["NomDossierPlus"];
            }
        }

    }

    function BoutonRetour($dosierpressent)
    {
        //echo $dosierpressent." ";
        $ch = "/";
        $m = substr(strrchr($dosierpressent, $ch),0);
        $rem = str_replace($m, "",$dosierpressent);
        return $rem;
    }
?>