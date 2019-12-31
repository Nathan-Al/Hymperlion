<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
    <meta charset="UTF-8">
    <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

    <link rel="stylesheet" href=<?php echo $lien_css_affichage_box ?> /> <!-- Importations du css -->
        
    <head>
            <title>Accueil</title> <!-- Titre de l'onglet de la page web -->
    </head>
        <header>
            <div class="div-headers-1">
                <a href="../" class="Lien-nav-Accueil"><h1 class="h1-sb">Samba</h1></a>
            </div>
        </header>

    <body class="Menu-Body">
            
    <nav class="Nav-Accueil-Liens">
            <nav class="Nav-Box">
<!-- BOX DU TITRE -->
                <nav class="Titre-Nav">
                    <h1>Dossier</h1>
                </nav>

                    <nav class="Nav-Dossier">
                    <?php
                    $liens = 0;
                    $default ="default";
                    $avantdossier = $_GET["dossier"];
                    for($o = 0; $o < sizeof($dossier); $o++)  
                        {
                            ?>
                                
                                <?php
                                    echo "<a href='".$controller_video_box."?video=".$default."&dossier=".$avantdossier."/".$dossier[$liens]."' class='a-doc'>".$dossier[$liens]."</a>";
                                    echo "<br>";
                                    $liens++;
                                ?>
                            <?php

                        }
                ?>
                    </nav>
            </nav>
                                    <nav class="headers-flo">
                                    <?php
        if(isset($_GET["dossier"])&& $_GET["dossier"]!="default")
        {
            $dossierRetour = BoutonRetour($_GET["dossier"]);
            if($dossierRetour!="")
            {
                
                echo "<a href='".$controller_video_box."?video=default&dossier=".$dossierRetour."' class='a-flo'>Retour</a>";
               
            }else
            {
                
                echo "<a href='".$controller_video_box."?video=default' class='a-flo'>Retour</a>";
                
            }
        
        }
        ?>
                                    </nav> 
            <nav class="Nav-Box">
<!-- BOX DU TITRE -->
                <nav class="Titre-Nav">
                    <h1>Fichiers</h1>
                </nav>

                    <nav class="Nav-Fichiers">
                    <?php
                    $liens = 0;
                    if(isset($_GET["dossier"]))
                    {
                        $NDosier=$_GET["dossier"];
                        for($o = 0; $o < sizeof($fichiers); $o++)  
                        {
                            ?>
                                <?php
                                    echo "<a href='".$controller_video_box."?dossier=".$NDosier."&video=".$fichiers[$liens]."' class='a-doc'>".$fichiers[$liens]."</a>";
                                    echo "<br>";
                                    $liens++;
                                ?>
                        
                            <?php

                        }
                    }else
                    {
                        for($o = 0; $o < sizeof($fichiers); $o++)  
                        {
                            ?>
                                
                                    <?php
                                        echo "<a class='a-liens-video' href='".$controller_video_box."?video=".$fichiers[$liens]."' class='a-doc'>".$o." :".$fichiers[$liens]."</a>";
                                        echo "<br>";
                                        $liens++;
                                    ?>
                            <?php

                        }
                    }
                ?>
                    </nav>
            </nav>
        </nav>

    </body>
</html>