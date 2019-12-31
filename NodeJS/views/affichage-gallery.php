<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
        <meta charset="UTF-8">
        <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

        <link rel="stylesheet" href=<?php echo $liens_css_image ?> /> <!-- Importations du css -->
            
            <head>
                <title>Image</title> <!-- Titre de l'onglet de la page web -->
            </head>
    <body>
        <header>
            <div class="div-headers-1">
                <a href="../" class="Lien-nav-Accueil"><h1>Samba</h1></a>
                <div class="div-separation"></div>
            </div>
            <div class="div-headers-2">
                <?php
                echo "<p>Page ".$page."/".$nbpage."</p>";
                ?>
            </div>
            <div class="div-headers-3">
                <form action="<?php echo $controller_affichage_image ?>?chgp=chercher" method="post">
                    <input type="search" name="searchEngine" placeholder="Recherche..." />
                    <input type="submit" value="Valider" />
                </form>
                <a href="<?php echo $controller_affichage_image ?>?chgp=0 & page=1" class="Lien-nav-Accueil">Première page</a>
                <?php
                    if($page!=1)
                    {
                ?>
                    <form action="<?php echo $controller_affichage_image ?>?chgp=1 & chang=prec" method="post">
                        <input name="Précédent" value="Précédent" type="submit" />
                        <input name="prec" value ="<?php echo $page?>" type="hidden" class="Lien-nav-Accueil"/>
                    </form>
                <?php
                    }
                    if($tabliens[0][$page+1]!=null)
                    {
                ?>
                    <br>
                    <form action="<?php echo $controller_affichage_image ?>?chgp=1 & chang=suiv" method="post">
                        <input name="Suivante" value="Suivante" type="submit" />
                        <input name="suiv" value ="<?php echo $page?>" type="hidden" class="Lien-nav-Accueil"/>
                    </form>
                <?php
                    }
                ?>
            </div>
        </header>
<?php
   /* if ($_GET["chgp"]==0)
    {*/
?>
        <div class="conteneur-1">
            <div class="conteneur-2">
                <?php
                $liens = 0;
                //echo $tabliens[0][1];
                if($page!=null)
                {
                    //echo $page;
                    while($liens != 25) 
                    {
                        //echo "<br> L".$liens." P".$page;
                       //echo $tabliens[$liens][$page];
                       if($tabliens[$liens][$page] != "0")
                       {
                        ?>
                            <div class="affichage-div-image">
                                <a class="a-image" href="<?php echo $require_vue_affichage_image ?>">
                                    <div class="a-image-background">
                                        <!-- Background nom image (apparait en hover) -->
                                        <span class="div-image-span"><?php echo $tabliens[$liens][$page] ?></span>
                                    </div>
                                    </a>
                                                                    
                                <div class="div-image">
                                        <img class="Min-Image" src="<?php echo $lien_retour_images.$tabliens[$liens][$page] ?>"/>
                                </div>
                            </div>
                        <?php
                       }
                        $liens++;
                            
                    }
                    //$page++;
                    
                    //closedir($dir);
                }
 
                ?>

                <?php
                    if(isset($_GET["chgp"]))
                    {
                        if($_GET["chgp"]=="chercher")
                        {
                            for($liens=0;$liens<sizeof($tabliens);$liens++)
                            {
                                if($tabliens[$liens] != "0")
                                {
                                    if($lien_retour_images.$tabliens[$liens]!=$lien_retour_images)
                                    {
                           ?>
                                <div class="div-image">
                                    <img class="Min-Image" src="<?php echo $lien_retour_images.$tabliens[$liens] ?>"/>
                                </div>
                           <?php
                                    }
                                } 
                            }
                        }
                    }

                ?>
            </div>
        </div>
<?php
    //}
?>
    </body>
    
</html>