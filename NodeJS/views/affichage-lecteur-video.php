
<meta http-equiv="Content-Type" content="text/html; charset=iso-10646"/>
    <meta charset="UTF-8">
    <LINK rel="icon" type="image/png" href=<?php echo $IconeSite ?> /> <!-- Icone de l'onglet de la page web -->

    <link rel="stylesheet" href="../Css/affichage-video.css" /> <!-- Importations du css -->

<head>
	<link href="https://vjs.zencdn.net/7.6.0/video-js.css" rel="stylesheet">
  
	<!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
	<script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
  </head>
  
  <body>
	<video id='my-video' class='video-js' controls preload='auto' width='640' height='264'
    poster='MY_VIDEO_POSTER.jpg' data-setup='{}'>
    <?php
	  echo "<source src='../Video".$nom."/".$video."' type='video/mp4'>";
      echo "<source src='../Video".$nom."/".$video."' type='video/webm'>";
    ?>
	  <p class='vjs-no-js'>
		To view this video please enable JavaScript, and consider upgrading to a web browser that
		<a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
	  </p>
	</video>
  
	<script src='https://vjs.zencdn.net/7.6.0/video.js'></script>
  </body>
