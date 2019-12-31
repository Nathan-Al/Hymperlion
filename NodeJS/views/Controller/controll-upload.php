<?php
    require "../Outil/lecteur-liens.php";
    require $require_lecteur_fichier;

    $extensionsimage = array('.png', '.gif', '.jpg', '.jpeg');
    $extensionsvideo = array('.mp4', '.mkv', '.avi', '.mpeg');
    $extensionsmusique = array('.mp3', '.waw', '.ogg', '.flac');
    $extensionsdocuments = array('.doc', '.docx', '.pdf', '.txt','.zip','.rar');
    
    if(isset($_FILES['fichiers']))
    {
        $fichier = $_FILES['fichiers'];
        $nom = $_FILES['fichiers']['name'];
        $extension = strtolower(strrchr($nom, '.'));

        if(in_array($extension, $extensionsimage))
        {
            $effectuer = uploadfichier($liensHomeImage,$fichier);
            //echo 'image <br>';
        }
        elseif(in_array($extension, $extensionsvideo))
        {
            //echo 'video <br>';
            $effectuer = uploadfichier($liensHomeVideo,$fichier);
        }
        elseif(in_array($extension, $extensionsmusique))
        {
            $effectuer = uploadfichier($liensHomeMusique,$fichier);
            //echo 'musique <br>';
        }
        elseif(in_array($extension, $extensionsdocuments))
        {
            $effectuer = uploadfichier($liensHomeDocuments,$fichier);
            //echo 'documents <br>';
        } 
    }
    require $require_vue_affichage_upload;
?>