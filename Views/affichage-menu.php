<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
            <meta charset="UTF-8">
            <LINK rel="icon" type="image/png" href='<?php echo $IconeSite ?>'/> <!-- Icone de l onglet de la page web -->

            <link rel="stylesheet" href=<?php echo $liens_css_menu ?>><!-- Importations du css -->
                
                <head>
                    <title>Menu</title> <!-- Titre de l onglet de la page web -->
                </head>

                <header>
                    <div class="div-header-nom">
                        <h1> Hymperlion </h1>
                    </div>
                    <div class="div-header-editions">
                        <div class="div-header-editions-newsite">
                            <a href="<?php echo $controller_newsite."?newsite" ?>" class="a-div-header-edtions">Nouveaux Site</a>
                        </div>
                      
                    </div>
                </header>

        <body>
            <div class="conteneur-1">
                <div class="div-1">
                    <h1> Hymperlion</h1>
                    <p> Bienvenu sur la page d'accueil du CMS </p> 
                </div>

                <div class="div-2">

                    <?php
                        if($website_list[0]!=null)
                        for($i = 0; $i < sizeof($website_list); $i++)
                        {
                    ?>
                        <div class="affichage-div-image">
                            <div class="min-affichage-div-image">
                                <a class="a-image" href="<?php echo $racine_site.$website_list[$i] ?>">
                                    <div class="a-image-background">
                                            <!-- Background nom image (apparait en hover) -->
                                        <span class="div-image-span"><?php echo $website_list[$i] ?></span>
                                    </div>
                                </a>  
                                                                
                                <div class="div-image">
                                    <img class="Min-Image" src="<?php echo $racine_site.$website_list[$i]."/Medias-Site/miniature.png" ?>"/>
                                </div>
                            </div>

                            <div class="div-affichage-image-gestion">
                                <a class="a-div-affichage-image-gestion" href="<?php echo $racine_controller.$controller_gestion."?nom_site=".$website_list[$i] ?>">Gestion du site</a>
                            </div>
                        </div>
                    <?php
                        }
                    ?>

                </div>
               
            </div>
        </body>

</html>