<html>
<?php
        require $require_html_header;
        require $require_html_footer;
        //require $require_html_body;
        Headers($IconeSite, $cssheader,$titre_page,$nom_site, $choix);
    ?>
    <script src="jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href='style-body.css'>
    <!-- Importations du css -->
    <body class="body">
        <div class="conteneur-0">
            <div class="conteneur-1" id="conteneur-1">
                <div class="div-option">
                <button class="button-gesSite" id="button-gestPage">Gestion des Pages</button>
                <button class="button-gesSite" id="button-gestContr">Gestion des Controllers</button>
                <button class="button-gesSite" id="button-gestScript"> Gestion des script</button>
                <button class="button-gesSite" id="button-gestScript"> Gestion des script</button>
                </div>
                </div>
            <!------ ------------------------------------------------------------- --->
            <div class="conteneur-2" id="conteneur-2">
                <div class="div-1" id="listigue-boutton">

                </div>
                <div class="div-affichage-action" id="div-affichage-action">

                    <div class="div-2" id="">
                        <div class="div-3" id="">
                            <div class="" id="">
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </body>
    <?php
        //Body($cssbody,$choix);
        Footer($cssfooter,$choix);
    ?>
        <script type="module" src="<?php echo $scrip_gestion_site?>"></script>

</html>