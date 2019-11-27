<html>
    <?php
        require $require_html_header;
        require $require_html_body;
        require $require_html_footer;
        Headers($IconeSite, $cssheader,$titre_page, $choix);
        Body($cssbody,$choix);
        Footer($cssfooter,$choix);
    ?> 
</html>