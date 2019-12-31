<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
        <meta charset="UTF-8">
        <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

        <link rel="stylesheet" href=<?php echo $liens_css_video ?> /> <!-- Importations du css -->
            
            <head>
                <?php
                    if($_GET["video"]!="default" || isset($_GET["dossier"]))
                    {
                        $nom = $_GET["dossier"];
                        echo '<title> Video : '.$videosansmp4.'</title>';

                    }else
                    {
                        echo '<title>Video</title>';
                    }
                ?>
                
            </head>
    <body>
        <header>
            <div class="div-headers-1">
                <a href="../" class="Lien-nav-Accueil"><h1>Samba</h1></a>
            </div>
            <div class="div-headers-2">
                    <p>Vous regardez :  <?php echo $videosansmp4 ?></p>
            </div>
        </header>
<div class="div-contenue">
        <nav class="nav-liste-video">
       
            <div class="div-dossier-video">
                <?php
                    $liens = 0;
                    $default ="default";
                    $avantdossier = $_GET["dossier"];
                    if(isset($dossier))
                    {
                        for($o = 0; $o < sizeof($dossier); $o++)  
                        {
                            ?>
                                <?php
                                    echo "<a href='".$controller_video."?video=".$default."&dossier=".$avantdossier."/".$dossier[$liens]."' class='a-doc'>".$dossier[$liens]."</a>";
                                    echo "<br>";
                                    $liens++;
                                ?>
                            <?php

                        }
                    }

                ?>
            </div>

        <nav class='nav-separation-div'>
        <?php
        if(isset($_GET["dossier"])&& $_GET["dossier"]!="default")
        {
            $dossierRetour = BoutonRetour($_GET["dossier"]);
            if($dossierRetour!="")
            {
                
                echo "<a href='".$controller_video."?video=default&dossier=".$dossierRetour."' class='a-separation'>Avant</a>";
               
            }else
            {
                
                echo "<a href='".$controller_video."?video=default' class='a-separation'>Avant</a>";
                
            }
        
        }
        ?>
        </nav>
       
            <div class="div-liens-video">
                <?php
                    $liens = 0;
                    if(isset($_GET["dossier"]))
                    {
                        if($fichiers!="")
                        {
                            $NDosier=$_GET["dossier"];
                            for($o = 0; $o < sizeof($fichiers); $o++)  
                            {
                                ?>
                                    <?php
                                        echo "<a href='".$controller_video."?dossier=".$NDosier."&video=".$fichiers[$liens]."' class='a-doc'>".$fichiers[$liens]."</a>";
                                        echo "<br>";
                                        $liens++;
                                    ?>
                            
                                <?php
    
                            }
                        }

                    }else
                    {
                        for($o = 0; $o < sizeof($fichiers); $o++)  
                        {
                            ?>
                                
                                    <?php
                                        echo "<a class='a-doc' href='".$controller_video."?video=".$fichiers[$liens]."' class='a-doc'>".$fichiers[$liens]."</a>";
                                        echo "<br>";
                                        $liens++;
                                    ?>
                            <?php

                        }
                    }
                ?>
            </div>
           
        </nav>

        <nav class="nav-lecteur-video">
            <?php

            if($_GET["video"]=="default")
            {
                echo "<nav class='box-nav-lecteur-video'>";
                //LecteurJW($lien_retour_video.'mylivewallpapers.com-Treehouse-Summer-Rain.mp4',"");
                echo "</nav>";
            }
            elseif($_GET["video"]!="default" && isset($_GET["dossier"]))
            {
                $nom = $_GET["dossier"];
                
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurVideoBase($lien_retour_video.$nom."/".$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurJW($lien_retour_video.$nom."/".$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurJSCDN($lien_retour_video.$nom."/".$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
            }else{
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurVideoBase($lien_retour_video.$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurJW($lien_retour_video.$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
                echo "<nav class='box-nav-lecteur-video'>";
                LecteurJSCDN($lien_retour_video.$video, $liens_dossier_sous_titre.$videoenvtt);
                echo "</nav>";
            }
            ?>
        </nav>
        </div>
    </body>
</html>