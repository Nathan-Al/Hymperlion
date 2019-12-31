<?php
require "../Outil/lecteur-liens.php";
require $require_lecteur_fichier;

$dossier = array();
$fichiers = array();
$dossier = ScanDossierDoc($liensHomeDocuments);
$fichiers = ScanFichiersDoc($liensHomeDocuments);

require $require_vue_affichage_documents; 

?>