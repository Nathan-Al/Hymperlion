<?php
       require "../../Model/class/Utilisateurs.php"; 
       require "../../Model/class/Compte.php"; 

       class ManagerUtilisateurs
       {
        
        private $_db;
        public function getAll()
        { 
            $cnx = connexionPDO();
            $requette = "select id_util,pseudo_util,nom_util,prenom_util,id_categorie from utilisateurs;";
            $reponse  = $cnx->prepare($requette);
            $reponse->execute();

            $utilisateurs = array();

            while ($donnees = $reponse->fetch())
            {
                $utilisateurs[] = new Utilisateurs($donnees["id_util"],
                                        $donnees["pseudo_util"],
                                        $donnees["nom_util"],
                                        $donnees["prenom_util"],
                                        $donnees["id_categorie"]
                                    );
            }

            return $utilisateurs;
        }

        public function getSelect($nom)
        {
            $cnx = connexionPDO();
            $requette = "select id_util,pseudo_util,nom_util,prenom_util,id_categorie from utilisateurs where pseudo_util='".$nom."';";
            $reponse  = $cnx->prepare($requette);
            $reponse->execute();

            $utilisateurs = array();

            while ($donnees = $reponse->fetch())
            {
                $utilisateurs[] = new Utilisateurs($donnees["id_util"],
                                        $donnees["pseudo_util"],
                                        $donnees["nom_util"],
                                        $donnees["prenom_util"],
                                        $donnees["id_categorie"]
                                    );
            }

            return $utilisateurs;
        }

        public function CheckCompte($identifiant, $mdp)
        {
            $cnx = connexionPDO();
            $requette = "select id_util,pseudo_util, ca.id_categorie,nom_cate from utilisateurs

            inner join catégorie ca on ca.id_categorie = utilisateurs.id_categorie
            
            where pseudo_util='".$identifiant."' and mdp_util='".$mdp."';";
            $reponse  = $cnx->prepare($requette);
            $reponse->execute();

            $compte = array();

            /*
            if($reponse->fetch())
            {*/
                while($donnees = $reponse->fetch())
                    {
                        $compte[] = new Compte($donnees["id_util"], 
                        $donnees["pseudo_util"],
                        $donnees["id_categorie"],
                        $donnees["nom_cate"]
                    );
                    }/*
            }else
            {
                $compte[] = new Compte(null,null ,null,null);
            }*/


            return $compte;
        }

        public function CheckUtiExist($pseudo)
        {
            $cnx = connexionPDO();
            $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
            $reponse  = $cnx->prepare($requette1);
            $reponse->execute();
            while($donnees = $reponse->fetch())
            {
                $idutil = $donnees["id_util"];
            }
            if(!isset($idutil))
            return true;
            else
            return false;
        }

        
        public function AjoutUtilisateurs($pseudo, $nom, $prenom, $nomMDP, $nom_cat )
        {
            //print "MANAGER O : ".$pseudo." ".$nom." ".$prenom." ".$nomMDP." ".$nom_cat;
            $cnx = connexionPDO();
            
            $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
            $reponse  = $cnx->prepare($requette1);
            $reponse->execute();
            while($donnees = $reponse->fetch())
            {
                $idutil = $donnees["id_util"];
            }
            
            if(!isset($idutil))
            {

                $requette2 = "select `id_categorie` FROM `catégorie` WHERE `nom_cate` = \"$nom_cat\";";
                $reponse1 = $cnx->prepare($requette2);
                $reponse1->execute();
                while($donnees = $reponse1->fetch())
                {
                    $idcat = $donnees["id_categorie"];
                }
                print "<br> M".$idcat;

                $requette = "insert ignore into `utilisateurs`(`pseudo_util`, `nom_util`, `prenom_util`, `mdp_util`, `id_categorie`) VALUES (\"$pseudo\",\"$nom\",\"$prenom\",\"$nomMDP\",$idcat);";
                $reponse  = $cnx->prepare($requette);
                $reponse->execute();
            }
        }

        public function AjoutUtilisateursExpl($pseudo, $nom, $prenom, $nomMDP, $idexploit )
        {
            //print "MANAGER O : ".$pseudo." ".$nom." ".$prenom." ".$nomMDP." ".$idexploit;
            $cnx = connexionPDO();
            
            $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
            $reponse  = $cnx->prepare($requette1);
            $reponse->execute();
            while($donnees = $reponse->fetch())
            {
                $idutil = $donnees["id_util"];
            }
            if(!isset($idutil))
            {
                $requette = "insert ignore into `utilisateurs`(`pseudo_util`, `nom_util`, `prenom_util`, `mdp_util`, `id_categorie`) VALUES (\"$pseudo\",\"$nom\",\"$prenom\",\"$nomMDP\",3);";
                $reponse  = $cnx->prepare($requette);
                $reponse->execute();
    
                $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
                $reponse  = $cnx->prepare($requette1);
                $reponse->execute();
    
                while($donnees = $reponse->fetch())
                {
                    $idutil = $donnees["id_util"];
                }

                $requette1 = "insert into `utilisateurs_exploitation`(`id_utilExp`, `nomCategorie_utilExp`) VALUES ($idutil,'Employe');";
                $reponse  = $cnx->prepare($requette1);
                $reponse->execute();

                $requette2 = "insert ignore into `travailler_exploitation`(`id_utilExp`, `id_exploit`) VALUES ($idutil,$idexploit);";
                $reponse  = $cnx->prepare($requette2);
                $reponse->execute();
            }else
            {
                echo "<meta http-equiv='refresh' content='0; URL=../Admin/controller.php?etape=AjoutCompte&ech=GFE7510'>";
            }
            
        }

        public function AjoutUtilisateursEntre($pseudo, $nom, $prenom, $nomMDP, $identre )
        {
            //print "MANAGER O : ".$pseudo." ".$nom." ".$prenom." ".$nomMDP." ".$idexploit;
            $cnx = connexionPDO();
            
            $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
            $reponse  = $cnx->prepare($requette1);
            $reponse->execute();
            while($donnees = $reponse->fetch())
            {
                $idutil = $donnees["id_util"];
            }
            if(!isset($idutil))
            {
                $requette = "insert ignore into `utilisateurs`(`pseudo_util`, `nom_util`, `prenom_util`, `mdp_util`, `id_categorie`) VALUES (\"$pseudo\",\"$nom\",\"$prenom\",\"$nomMDP\",3);";
                $reponse  = $cnx->prepare($requette);
                $reponse->execute();
    
                $requette1 = "select `id_util` FROM `utilisateurs` WHERE pseudo_util = \"$pseudo\";";
                $reponse  = $cnx->prepare($requette1);
                $reponse->execute();
    
                while($donnees = $reponse->fetch())
                {
                    $idutil = $donnees["id_util"];
                }

                $requette1 = "insert into `utilisateurs_entreprise`(`id_utilEnt`, `rang_hiearchie`) VALUES ($idutil,'Employe');";
                $reponse  = $cnx->prepare($requette1);
                $reponse->execute();

                $requette2 = "insert ignore into `travailler_entreprise`(`id_entre`, `id_utilEnt`) VALUES ($identre,$idutil);";
                $reponse  = $cnx->prepare($requette2);
                $reponse->execute();
            }else
            {
                echo "<meta http-equiv='refresh' content='0; URL=../Admin/controller.php?etape=AjoutCompte&ech=GFE7510'>";
            }
            
        }

        public function Modifiertilisateurs($pseudo, $mdp, $pseudoactul)
        {
            $cnx = connexionPDO();
            if(isset($pseudo))
            {
                if($pseudo!=null)
                {
                    $requette1 = "update`utilisateurs` SET `nom_util`='".$pseudo."'  WHERE pseudo_util = '".$pseudoactul."';";
                    $reponse  = $cnx->prepare($requette1);
                    $reponse->execute();
                }
            }
            if(isset($mdp))
            {
                if($mdp!=null)
                {
                    $requette1 = "update `utilisateurs` SET `mdp_util`=".$mdp." WHERE pseudo_util = '".$pseudoactul."';";
                    $reponse  = $cnx->prepare($requette1);
                    $reponse->execute();
                }
            }

        }
       }
?>