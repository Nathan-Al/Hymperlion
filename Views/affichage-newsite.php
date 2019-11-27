<html>
    <?php
      include_once $require_html_header;
    ?>
    <link rel="stylesheet" href='<?php echo $liens_css_newsite ?>'><!-- Importations du css -->
    <form method="post" class="form-1" action=<?php echo $controller_newsite ?> enctype="multipart/form-data">

        <body>
            <div class="conteneur-1" id="conteneur-1">
                <div class="div-1">
                <div class="div-2"> 
                        <h1 class="h1-a">Créer un nouveaux Site : </h1>
                            <label for="nomfichier">Nom du site : </label>
                                    <input id="nomfichier" type="text" name="name" pattern="[aA-zZ]{1,10}" required>

                                    <input type="submit" id="buttonSubmit" name="create">

                                <p id="warning_p" class="warning_p"></p>
                                    Utiliser un thème ?
                                    <input type="checkbox" name="use_theme" value="true" checked>
                                
                                    Utiliser le thème default
                                    <input type="radio" name="theme" value="default" checked>
                                </p> 
                            
                            <p>Eviter de mettre qu'elle que chose de stupide :-)</p>
                </div>
                
                <div class="div-3">

                <?php
                            if($website_list[0]!=null)
                            for($i = 0; $i < sizeof($website_list); $i++)
                            {
                        ?>
                            <div class="affichage-div-image">
                                <div class="min-affichage-div-image">
                                    <a class="a-image" href="<?php echo "Site de téléchargement du thème" ?>">
                                        <div class="a-image-background">
                                                <!-- Background nom image (apparait en hover) -->
                                        </div>
                                    </a>  
                                                                    
                                    <div class="div-image">
                                        <img class="Min-Image" src="<?php echo "../media-site/default.png" ?>"/>
                                    </div>
                                </div>

                                <div class="div-affichage-image-gestion">
                                    <p class="p-div-affichage-image-gestion"><?php echo $website_list[$i] ?></p>
                                    <input type="radio" name="theme" value="<?php echo $website_list[$i] ?>">
                                </div>
                            </div>
                        <?php
                            }
                        ?>
                </div>
                </div>
            </div>
            <script type="text/javascript" src="<?php echo $scrip_newsite ?>"></script>
        </body>
    </form>
</html>