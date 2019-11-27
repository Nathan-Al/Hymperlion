<html>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
        <meta charset="UTF-8">
        <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

        <link rel="stylesheet" href=<?php echo $liens_css_upload ?> /> <!-- Importations du css -->
            
            <head>
                <title>Upload de fichier</title> <!-- Titre de l'onglet de la page web -->
            </head>
    <body>
        <header>
            <div class="div-headers-1">
                <a href="../" class="Lien-nav-Accueil"><h1>Samba</h1></a>
            </div>
        </header>
            <div class="div-text">
                <h2>Upload Fichiers</h2>
                <p>Bonjour bienvenue sur la page d'upload du serveur, ici vous pouver envoyer vos fichier directement sur le serveur.</p>
                
                <p>Fichier en prise en charge : Images (png,gif,jpg,jpeg), Vidéo (mp4,mkv,avi,mpeg), Musique (mp3,waw,ogg,flac), Documents (doc,docx,pdf,txt,zip,rar)</p>
            </div>
        <form method="POST" action= <?php echo $controller_upload ?> enctype="multipart/form-data">	
            <div class="div-menu">
                <nav class="nav-upload">
                    
                    <input type="file" name="fichiers">
                </nav>
            </div>
            <input type="submit" name="envoyer" value="Envoyer le fichier">
        </form> 
        <?php
            if(isset($effectuer))
            {
                if($effectuer==true)
                {
                    echo 'Upload effectué avec succès !';
                }
                else
                {
                    echo 'Echec de l\'upload !';
                }
            }

        ?>
    </body>
</html>