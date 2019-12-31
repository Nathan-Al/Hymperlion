<?php
    require "../Outil/lecteur-liens.php";
    require $require_lecteur_fichier;
    require $require_lecteur_musique;
    require $require_model_musique;
    require_once($require_decodeur_id3);

   $getID3 = new getID3;
   $PageEncoding = 'UTF-8';
   $cover_musique = array();
   $ValidTagTypes = array('id3v1', 'id3v2.3', 'ape');
   $fichier = ListerTotalitefichier($liensHomeMusique);
   $liens_musique = array();
   $cover_musique = array();
   $s = "img-min-liens-musique";
   
   //$getID3->setOption(array('encoding'=>$TaggingFormat));

   for($r=0;$r<sizeof($fichier); $r++)
   {
      $Line_liens = $lien_retour_musique.$fichier[$r];
      
      $liens_musique[$r] = $getID3->analyze($Line_liens);
      //getid3_lib::CopyTagsToComments($liens_musique[$r]);
   }

   for($r=0;$r<sizeof($liens_musique); $r++)
   {
      $cover_musique[$r] = GetImageCover($liens_musique[$r], false, $PageEncoding,$s);
   }

   if(isset($_GET["musique"]))
    {
      if($_GET["musique"])
      {	
         $musique = $lien_retour_musique.$_GET["musique"];
         $liens = $liensHomeMusique.$_GET["musique"];

         $OldThisFileInfo = $getID3->analyze($liens);
         getid3_lib::CopyTagsToComments($OldThisFileInfo);
        
         $ValidTagTypes = ValidTagTypes($OldThisFileInfo);
        
         // Analyze file and store returned data in $ThisFileInfo
         $ThisFileInfo = $getID3->analyze($musique);

         getid3_lib::CopyTagsToComments($ThisFileInfo);
         $info_music = array();
         
            $c = "img";
            $titre = $ThisFileInfo['tags']['id3v2']['title'][0];
            $album = $ThisFileInfo['tags']['id3v2']['album'][0];
            $artiste = $ThisFileInfo['comments_html']['artist'][0];
            $band = $ThisFileInfo['comments_html']['band'][0];
            $genre = $ThisFileInfo['comments_html']['genre'][0];
            $time = $ThisFileInfo['playtime_string'];
            $date = $ThisFileInfo['comments_html']['year'][0];
            $image = GetImageCover($ThisFileInfo, false, $PageEncoding,$c);
            $arara = array('Data'=>GetDataImage($ThisFileInfo, false, $PageEncoding));
            $format_file = $ThisFileInfo['fileformat'];
            $format_size = $ThisFileInfo['filesize'];
            $bitrate = $ThisFileInfo['audio']['bitrate'];

            $Data = $arara['Data'];
            $return_music =  Verify($titre , $album , $artiste , $genre , $time , $date , $image, $format_file , $format_size ,$bitrate);
  
            $info_music [] =  new Musique (
               $return_music [0],
               $return_music [1],
               $return_music [2],
               $return_music [3],
               $return_music [4],
               $return_music [5],
               $return_music [6],
               $return_music [7],
               $return_music [8],
               $return_music [9]);
      }
   }
   else
   {
      $info_music [] =  new Musique (
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         null ,
         "",
         "");
   }
   if(isset($_POST["modification"]))
   {
      if(isset($_POST["titre"]))
      $titre_modif = $_POST["titre"];
      if(isset($_POST["album"]))
      $album_modif = $_POST["album"];
      if(isset($_POST["artiste"]))
      $artiste_modif = $_POST["artiste"];
      if(isset($_POST["genre"]))
      $genre_modif = $_POST["genre"];
      if(isset($_POST["datecreation"]))
      $datecreation_modif = $_POST["datecreation"];
      if(isset($_POST["liensmusique"]))
      $liensmusique_modif = $_POST["liensmusique"];


      //echo " ".$liensmusique_modif." ".$titre_modif." ".$album_modif." ".$artiste_modif." ".$genre_modif." ".$datecreation_modif ;

      require_once($require_write_id3);
      $TagFormatsToWrite = (isset($_POST['TagFormatsToWrite']) ? $_POST['TagFormatsToWrite'] : array());
         //echo 'starting to write tag(s)<BR>';
      
            $tagwriter = new getid3_writetags;
            $tagwriter->filename = $liensmusique_modif;
            $tagwriter->tagformats = $TagFormatsToWrite;
            $tagwriter->overwrite_tags    = true;  // if true will erase existing tag data and write only passed data; if false will merge passed data with existing tag data (experimental)
            $tagwriter->remove_other_tags = false; // if true removes other tag formats (e.g. ID3v1, ID3v2, APE, Lyrics3, etc) that may be present in the file and only write the specified tag format(s). If false leaves any unspecified tag formats as-is.
            $tagwriter->tag_encoding      = $TextEncoding;
            $tagwriter->remove_other_tags = false;

            //populate data array
            $TagData = array(
               'title'                  => array($titre_modif),
               'artist'                 => array($artiste_modif),
               'album'                  => array($album_modif),
               'year'                   => array($datecreation_modif),
               'genre'                  => array($genre_modif),
            );

            $TagFormatsToWrite = (isset($_POST['TagFormatsToWrite']) ? $_POST['TagFormatsToWrite'] : array());
            if (!empty($TagFormatsToWrite)) {
              
               if (!empty($_FILES['fichiers']['tmp_name'])) {
                
                  if (in_array('id3v2.4', $tagwriter->tagformats) || in_array('id3v2.3', $tagwriter->tagformats) || in_array('id3v2.2', $tagwriter->tagformats)) {
                    
                     if (is_uploaded_file($_FILES['fichiers']['tmp_name'])) {
                        
                        if ($APICdata = file_get_contents($_FILES['fichiers']['tmp_name'])) {
                              
                           if ($exif_imagetype = exif_imagetype($_FILES['fichiers']['tmp_name'])) {
                                 
                              $TagData['attached_picture'][0]['data']          = $APICdata;
                              $TagData['attached_picture'][0]['picturetypeid'] = $_POST['APICpictureType'];
                              $TagData['attached_picture'][0]['description']   = $_FILES['fichiers']['name'];
                              $TagData['attached_picture'][0]['mime']          = image_type_to_mime_type($exif_imagetype);
         
                           } else {
                              echo '<b>invalid image format (only GIF, JPEG, PNG)</b><br>';
                           }
                        } else {
                           echo '<b>cannot open '.htmlentities($_FILES['fichiers']['tmp_name']).'</b><br>';
                        }
                     } else {
                        echo '<b>!is_uploaded_file('.htmlentities($_FILES['userfile']['tmp_name']).')</b><br>';
                     }
                  } else {
                     echo '<b>WARNING:</b> Can only embed images for ID3v2<br>';
                  }
               }
            }
         $tagwriter->tag_data = $TagData;

         // write tags
         if ($tagwriter->WriteTags()) {
            //echo 'Successfully wrote tags<br>';
            $fait = true;
            $liens = $liensHomeMusique.$_GET["musique"];
               echo "<meta http-equiv='refresh' content='0; URL=controll-musique.php?musique=".$liens."'>";
            $message = "Modification effectué ! ";
               echo "<script type='text/javascript'>alert('$message');</script>";
            if (!empty($tagwriter->warnings)) {
               //echo 'There were some warnings:<br>'.implode('<br><br>', $tagwriter->warnings);
               $fait = "middle";
            }
         } else {
            //echo 'Failed to write tags!<br>'.implode('<br><br>', $tagwriter->errors);
            $fait = false;
         }
      
   }

   require $require_vue_affichage_musique;
?>


<!-- --------------------------------------------- / --------------------------------------------->


<?php

function GetImageCover($variable, $wrap_in_td=false, $encoding='ISO-8859-1',$classimage) {
	$returnstring = "";
	switch (gettype($variable)) {
		case 'array':
			
			foreach ($variable as $key => $value) {
                
				//if (($key == 'data') && isset($variable['image_mime']) && isset($variable['dataoffset'])) {
				if (($key == 'data') && isset($variable['image_mime']) && $returnstring!="") {
					$imageinfo = array();
					if ($imagechunkcheck = getid3_lib::GetDataImageSize($value, $imageinfo)) {
                  $returnstring .= '</td>'."\n".'<td><img class="'.$classimage.'" src="data:'.$variable['image_mime'].';base64,'.base64_encode($value).'" width="'.$imagechunkcheck[0].'" height="'.$imagechunkcheck[1].'"></td></tr>'."\n";
					} else {
						$returnstring .= '</td>'."\n".'<td><i>invalid image data</i></td></tr>'."\n";
					}
				} else {
					$returnstring .= '</td>'."\n".GetImageCover($value, true, $encoding,$classimage).'</tr>'."\n";
				}
			}
			break;
    }
	return $returnstring;
}

function GetDataImage($variable, $wrap_in_td=false, $encoding='ISO-8859-1')
{
	$returnstring = "";
	switch (gettype($variable)) {
		case 'array':
			
			foreach ($variable as $key => $value) {
                
				//if (($key == 'data') && isset($variable['image_mime']) && isset($variable['dataoffset'])) {
				if (($key == 'data') && isset($variable['image_mime']) && $returnstring!="") {
					$imageinfo = array();
					if ($imagechunkcheck = getid3_lib::GetDataImageSize($value, $imageinfo)) {
                  $variable['image_mime'];
					}
				} else {
					$returnstring .= '</td>'."\n".GetImageCover($value, true, $encoding,$classimage).'</tr>'."\n";
				}
			}
			break;
    }
	return $returnstring;
}

function ValidTagTypes ($OldThisFileInfo)
{
	switch ($OldThisFileInfo['fileformat']) {
		case 'mp3':
		case 'mp2':
		case 'mp1':
			$ValidTagTypes = array('id3v1', 'id3v2.3', 'ape');
			break;

		case 'mpc':
			$ValidTagTypes = array('ape');
			break;

		case 'ogg':
			if (!empty($OldThisFileInfo['audio']['dataformat']) && ($OldThisFileInfo['audio']['dataformat'] == 'flac')) {
				//$ValidTagTypes = array('metaflac');
				// metaflac doesn't (yet) work with OggFLAC files
				$ValidTagTypes = array();
			} else {
				$ValidTagTypes = array('vorbiscomment');
			}
			break;

		case 'flac':
			$ValidTagTypes = array('metaflac');
			break;

		case 'real':
			$ValidTagTypes = array('real');
			break;

		default:
			$ValidTagTypes = array();
			break;
	}

	return $ValidTagTypes;
}

function Verify($titre , $album , $artiste , $genre , $time , $date , $image , $format_file , $format_size , $bitrate)
{
   $info_music_veri = array();
   if($titre=="" || $titre==null)
   {
      $info_music_veri [0] = "Inconnue";
   }else
   {
      $info_music_veri [0] = $titre;
   }
   
   if ($album==""|| $album==null)
   {
      $info_music_veri [1]= "Inconnue";
   }else
   {
      $info_music_veri [1]= $album;
   }
   
   if ($artiste=="")
   {
      $info_music_veri [2]="Inconnue";
   }else
   {
      $info_music_veri [2]=$artiste;
   }
   
   if ($genre=="")
   {
      $info_music_veri [3]="Inconnue";
   }else
   {
      $info_music_veri [3]=$genre;
   }
   
   if ($time=="")
   {
      $info_music_veri [4]="Inconnue";
   }else
   {
      $info_music_veri [4]=$time;
   }
   
   if ($date=="")
   {
      $info_music_veri [5]="Inconnue";
   }else
   {
      $info_music_veri [5]=$date;
   }
   
   if ($image=="" || $image==null)
   {
      $info_music_veri [6]=null;
   }else
   {
      $info_music_veri [6]=$image;
   }
   
   if ($format_file=="")
   {
      $info_music_veri [7]="Inconnue";
   }else
   {
      $info_music_veri [7]=$format_file;
   }
   
   if ($format_size=="")
   {
      $info_music_veri [8]="Inconnue";
   }else
   {
      $info_music_veri [8]=$format_size;
   }
   
   if ($bitrate=="")
   {
      $info_music_veri [9]="Inconnue";
   }else
    {
      $info_music_veri [9]=$bitrate;
    }

   return $info_music_veri;
}

?>