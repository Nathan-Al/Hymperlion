
<?php
function Footer($css, $choix)
{
    if($choix==1)
    echo '
    <link rel="stylesheet" href='.$css.'><!-- Importations du css -->
        <footer>
            
        </footer>
    ';
}
