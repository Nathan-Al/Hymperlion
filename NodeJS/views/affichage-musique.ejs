<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
        <meta charset="UTF-8">
        <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

        <link rel="stylesheet" href=<?php echo $liens_css_musique ?> /> <!-- Importations du css -->
            
            <head>
                <title>Musique</title> <!-- Titre de l'onglet de la page web -->
            </head>
        <header>
            <div class="div-headers-1">
                <a href="../" class="Lien-nav-Accueil"><h1>Samba</h1></a>
            </div>
        </header>
    <body>
        <div class="div-contenue">
            <nav class="nav-liens-musique">
                <?php
                $iop = 0;
                    for($i=0; $i<sizeof($fichier);$i++)
                    {
                        echo "<div class='div-liens-musique' >
                                <div class='div-min-liens-musique'>
                                    ".$cover_musique[$iop]."
                                </div>

                                <div class='div-liens-musique-gestion'>
                                    <a href='".$controller_musique."?musique=".$fichier[$iop]."' class='liens-musique'>-".$fichier[$iop]."</a>
                                </div>
                                
                            </div>";
                        $iop++;
                    }
                ?>
            </nav>
            <div class="div-affichage-musique">

                <div class="div-affichage-info-musique">

                    <div class="gestion-div-info">
                    <?php 
                        if (!isset($image) || $image==null)
                        {
                            ?>
                                <div class="div-img">
                                    <img class="img" src= <?php echo $liensMediaSite."album.jpg" ?>>
                                </div>
                             <?php
                        }else
                        {
                            echo $info_music[0]->getImage();
                        }
                    
                    ?>

                        <div class="div-info">
                            <h2>Nom de la piste : </h2> <?php echo  $info_music[0]->getTitre() ?>
                            <h2>Nom de l'album : </h2> <?php echo  $info_music[0]->getAlbum() ?>
                            <h2>Artiste : </h2> <?php echo $info_music[0]->getArtiste() ?>
                            <h2>Genre : </h2> <?php echo $info_music[0]->getGenre() ?>
                            <h2>Durée : </h2> <?php echo $info_music[0]->getTemps() ?>
                            <h2>Date : </h2> <?php echo $info_music[0]->getAnnee() ?>
                        </div>
 
                    </div>
                   
                    <div class="gestion-div-lecteur-modif">
                        <div class="div-modif-audio">
                        <h2 class="h23">Modification du fichier .mp3</h2>
                            <form action="<?php echo $controller_musique?>" method="post" enctype="multipart/form-data">
                                <div class="div-label-textarea"> 

                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="nom">Miniature musique :  </label>
                                        </div>
                                        <div class="div-input"> 
                                            <input type="file" name="fichiers" accept="image/jpeg, image/gif, image/png" value=<?php $info_music[0]->getImage() ?> >
                                        </div>

                                    </div>
                                    <div class="div-contenue-modif">
                                    <?php
                                         echo '<div class="div-input">';
                                            foreach ($ValidTagTypes as $ValidTagType) 
                                            {
                                                echo '<p class="checkbox-php"><input type="checkbox" class="checkbox-php" name="TagFormatsToWrite[]" value="'.$ValidTagType.'"';
                                            if (count($ValidTagTypes) == 1) 
                                            {
                                                echo ' checked="checked"';
                                            } else 
                                            {
                                                switch ($ValidTagType) {
                                                    case 'id3v2.2':
                                                    case 'id3v2.3':
                                                    case 'id3v2.4':
                                                    if (isset($OldThisFileInfo['tags']['id3v2'])) {
                                                        echo ' checked="checked"';
                                                    }
                                                    break;
                            
                                                default:
                                                    if (isset($OldThisFileInfo['tags'][$ValidTagType])) {
                                                        echo ' checked="checked"';
                                                    }
                                                    break;
                                            }
                                        }
                                        echo '>'.$ValidTagType.'</p>';
                                    }
                                    if (count($ValidTagTypes) > 1) {
                                        echo '<hr><p class="checkbox-php"><input type="checkbox" name="remove_other_tags" value="1"> Remove non-selected tag formats when writing new tag</p>';
                                    }
                                    echo ' </div>';

                                    echo '<select name="APICpictureType">';
                                    
                                    $APICtypes = getid3_id3v2::APICPictureTypeLookup('', true);
                                    foreach ($APICtypes as $key => $value) {
                                        echo '<option value="'.htmlentities($key, ENT_QUOTES).'">'.htmlentities($value).'</option>';
                                    }
                                    echo '</select></td></tr>';
                                    ?>
                                    </div>
                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="nom">Nom de la piste :  </label>
                                        </div> 
                                        <div class="div-input"> 
                                            <input type="text" id="nom" name="titre" required minlength="4" maxlength="100" size="30" value="<?php echo htmlspecialchars($info_music[0]->getTitre()) ?>">
                                        </div>

                                    </div>
                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="album">Nom de l'album :   </label>
                                        </div>
                                        <div class="div-input"> 
                                            <input type="text" id="album" name="album" required maxlength="100" size="30" value="<?php echo htmlspecialchars($info_music[0]->getAlbum()) ?>">
                                        </div>

                                    </div>
                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="artiste">Artiste :   </label>
                                        </div>
                                        <div class="div-input"> 
                                            <input type="text" id="artiste" name="artiste" required maxlength="100" size="30" value="<?php echo htmlspecialchars($info_music[0]->getArtiste()) ?>">
                                        </div>

                                    </div>
                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="genre">Genre :  </label>
                                        </div>
                                        <div class="div-input"> 
                                            <input type="text" id="genre" name="genre" required maxlength="100" size="30" value="<?php echo htmlspecialchars($info_music[0]->getGenre()) ?>">
                                        </div>

                                    </div>
                                    <div class="div-contenue-modif">

                                        <div class="div-label-texte">
                                            <label for="date">Date :   </label> 
                                        </div>
                                        <div class="div-input"> 
                                            <input type="number" id="date" name="datecreation" required maxlength="100" size="30" value="<?php echo htmlspecialchars($info_music[0]->getAnnee()) ?>">
                                        </div>

                                    </div>
                           
                                <input type="hidden" required maxlength="100" name="liensmusique" value= "<?php echo htmlspecialchars($liens) ?>" />
                                <input type="hidden" name="modification" />
                                <input type="submit" value="Save Changes" />

                                </div> 
                            </form>
                        </div>

                        <div class="div-lecteur-audio">
                            <?php
                                LecteurAudio($musique); 
                            ?>
                       </div> 
                    </div>
                </div>
            </div>
        </div>
    </body>

</html>