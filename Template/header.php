<?php
function Headers($IcoSite, $css, $titre_page, $choix)
{
    $def=0;
    $def = $def+$choix;

    if($choix==$def)
    echo '
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
        <meta charset="UTF-8">
            <LINK rel="icon" type="image/png" href="'.$IcoSite.'"/> <!-- Icone de l onglet de la page web -->

            <link rel="stylesheet" href='.$css.'><!-- Importations du css -->
                        
                <head>
                        <title>'.$titre_page.'</title> <!-- Titre de l onglet de la page web -->
                </head>
                    <header>
                        <div class="div-header-nom">
                            <a href="../" class="a-headers"><h1> Hymperlion </h1></a>
                        </div>
                    </header>
    ';
}

                        

