<?php

    require "../Outil/lecteur-liens.php";
    require $outil_lecteur_fichier;

    $website_list = array();

    $website_list = ScanDossier($racine_site);

    require $require_vue_menu;
    
