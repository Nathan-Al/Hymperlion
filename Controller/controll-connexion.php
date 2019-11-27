<?php 

    function chargerModel($classe)
    {
        /*
        On inclut la classe correspondante
        au param�tre pass�.
        */
        //require "../../model/manager/".$classe.".php";
        include_once  "../../Model/manager/".$classe.".php";
        //require_once("../../p");
    }
    spl_autoload_register('chargerModel');
    $managercopdo = new ManagerCoPDO();

    if(isset($_POST["identifiant"]) && isset($_POST["mdp"]))
    {
        $identifiant = "N";
        $mdp = "N";
        $identifiant = $_POST["identifiant"];
        
        $mdp =  trim($_POST["mdp"]);
        $mdp =  md5($mdp);
        $mdp =  sha1($mdp);
        session_start();
        $managercompte = new ManagerUtilisateurs();
        $compte = array();

        
        $compte = $managercompte->CheckCompte($identifiant, $mdp);

        if($compte!=null)
        {
            $_SESSION['id']= $compte[0]->getId();
            $_SESSION['identifiant']=$compte[0]->getPseudo();
            $_SESSION['id_categorie']=$compte[0]->getId_categorie();
            $_SESSION['nom_categorie']=$compte[0]->getNom_categorie();
            $_SESSION['co']=true;

            if($_SESSION['id'] != "" && $_SESSION['identifiant']!= "")
            {
                setcookie('id',$_SESSION['id'],time()+101, null, null, false, true);
                setcookie('identifiant',$_SESSION['identifiant'],time()+101, null, null, false, true);
                setcookie('id_categorie',$_SESSION['id_categorie'],time()+101, null, null, false, true);
                setcookie('nom_categorie',$_SESSION['nom_categorie'],time()+101, null, null, false, true);
                setcookie('co',$_SESSION['co'],time()+101, null, null, false, true);

                echo "<meta http-equiv='refresh' content='0; URL=../../'>";
            }
        }
        else
        {
            //echo "<meta http-equiv='refresh' content='0; URL=../Controller/Connexion.php'>";
        }

    }

    require '../../vue/Connexion/Connexion.php';

?>