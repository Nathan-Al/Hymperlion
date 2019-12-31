<?php
    require "../Outil/lecteur-liens.php";
    require $require_lecteur_fichier;
    
    if(isset($_GET["chgp"]))
    {
        if($_GET["chgp"]==0)
        {
            $nbpage = 0;
            $tabliens = array();
            $tabliens = chargeLiens($liensHomeImage);
            $page=$_GET["page"];
            for ($i =1; $i < sizeof($tabliens); $i++)
            {
                if($tabliens[0][$i]!=null)
                $nbpage++;
            }
        }
        if($_GET["chgp"]==1)
        {
            $tabliens = array();
            $tabliens = chargeLiens($liensHomeImage);
            for ($i =1; $i < sizeof($tabliens); $i++)
            {
                if($tabliens[0][$i]!=null)
                $nbpage++;
            }
            
            //echo "TAB ".$tabliens[1][2];

            if(isset($_POST["suiv"]))
            {
                $page = $_POST["suiv"]+1;
            }
            if(isset($_POST["prec"]))
            {
               $page = $_POST["prec"]-1;
            }
        }
        if($_GET["chgp"]=="chercher")
        {
            if(isset($_POST["searchEngine"]))
            {
                if($_POST["searchEngine"]!=""&&$_POST["searchEngine"]!=null&&$_POST["searchEngine"]!=false)
                {
                    $motachercher = $_POST["searchEngine"];
                    $tabliens = array();
                    $tabliens = ChercherFicher($motachercher,$liensHomeImage);
                }else
                {
                    $tabliens = array();
                    $tabliens = chargeLiens($liensHomeImage); 
                    echo "<meta http-equiv='refresh' content='0; URL=".$controller_affichage_image."?chgp=0 & page=1'>";
                }
            }
        }
        require $require_vue_affichage_gallery;    
    }

?>