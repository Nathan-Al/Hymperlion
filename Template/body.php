<?php
function body($css, $choix)
{
    if($choix==1)
    echo '
    <link rel="stylesheet" href='.$css.'><!-- Importations du css -->
    <body class="body">
        <div class="conteneur-0">
            <div class="conteneur-1" id="conteneur-1">
                <div class="div-option-site">
                    <p> Gestion des page</p>
                    <p> Script JavaScript </p>
                </div>
            </div>
            <div class="conteneur-2" id="conteneur-2">
                <div class="div-affichage-action">

                </div>
            </div>
        </div>
    </body>
    ';
}
    

function body_Two($css)
{
echo 
'
<link rel="stylesheet" href='.$css.'><!-- Importations du css -->
    <body>
        <div class="conteneur-1">
            <form method="post" class="form-1" action=<?php echo $controller_affichage_gestion ?>>
                <p>Creer une nouvelle page : </p>
                <label for="nomfichier">Nom de la page web : </label>
                <input id="nomfichier" type="text" name="name">
                <input type="submit" name="create">
            </form>

            <form method="post" class="form-2" action=<?php echo $controller_affichage_gestion ?>>
                <p>Supprimer une page : </p>
                <label for="nomfichier">Nom de la page web : </label>
                <input id="nomfichier" type="text" name="name">
                <input type="submit" name="supp">
            </form>
        </div>

        <nav class="Nav-Fichiers">'.
                $liens = 0;
                    for($o = 0; $o < sizeof($fichiers); $o++) 
                        {
                            if($tabliens[$liens] != "0")
                                {
                                    
                                    echo '<div class="div-documents">
                                            
                                                <p class="p-page-name">'.$o.':'.$fichiers[$liens].'</p>
                                        
                                        </div>';
                                    
                                }
                            $liens++;    
                        }
                            
                    //closedir($dir);
                            
        echo '   ?>
        </nav>
    </body>';
}