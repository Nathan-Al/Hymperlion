<?php
function ScanFichiers($meza){
    $dir = $meza;
    if ( is_dir($dir) )  {
        if ( $dh = opendir($dir) ) {
            while ( ($element = readdir($dh)) !== false){{
                    if (	($element != '_vti_cnf')	&
                        ($element != '.')		&
                        ($element != '..')		&
                        ($element != '.DS_Store')	){
                            
                            if (is_dir($dir.'/'.$element))
                            {
                                //$tb_directories[] = $element;	
                            }
                            else
                            {
                                $tb_files[] = $element;	
                            }
                        }
                    }	
                }
            }
        }
    //echo "Size TB".sizeof($tb_files)."Size TB2".sizeof($tb_files2);
   
    return $tb_files;
}

function ScanDossier($meza){
    $dir = $meza;
    if ( is_dir($dir) )  {
        //echo "etape 1";
        if ( $dh = opendir($dir) ) {
            //echo "etape 2";
            while ( ($element = readdir($dh)) !== false){{
                //echo "etape 3";
                    if (	($element != '_vti_cnf')	&
                        ($element != '.')		&
                        ($element != '..')		&
                        ($element != '.DS_Store')	){
                            //echo "etape 4";
                            
                            if (is_dir($dir.'/'.$element))
                            {
                                $tb_directories[] = $element;	
                            }
                            else
                            {
                                $tb_files[] = $element;	
                            }
                        }
                    }	
                }
            }
        }
    return $tb_directories;
}

//Affichage documents

function ScanFichiersDoc($liensfich){
    $dir = $liensfich;
    if ( is_dir($dir) )  {
        if ( $dh = opendir($dir) ) {
            while ( ($element = readdir($dh)) !== false){{
                    if (	($element != '_vti_cnf')	&
                        ($element != '.')		&
                        ($element != '..')		&
                        ($element != '.DS_Store')	){
                            
                            if (is_dir($dir.'/'.$element))
                            {
                                $tb_directories[] = $element;	
                            }
                            else
                            {
                                $tb_files[] = $element;	
                            }
                        }
                    }	
                }
            }
        }
    if($tb_directories[0]!=null)
    for ($i = 0; $i<sizeof($tb_directories);$i++)
    {
        $dir = $liensfich.$tb_directories[$i];
        if ( is_dir($dir) )  {
            if ( $dh = opendir($dir) ) {
                while ( ($element = readdir($dh)) !== false){{
                        if (	($element != '_vti_cnf')	&
                            ($element != '.')		&
                            ($element != '..')		&
                            ($element != '.DS_Store')	){
                                
                                if (is_dir($dir.'/'.$element))
                                {
                                    //$tb_directories[] = $element;	
                                }
                                else
                                {
                                    $tb_files2[] = $element;
                                }
                            }
                        }	
                    }
                }
            }
    }
    if($tb_file2[0]!=null)
    for ($p = 0; $p < sizeof($tb_file2); $p++)
    {
        $tb_files[]=$tb_files2[$p];
    }
    //echo "Size TB".sizeof($tb_files)."Size TB2".sizeof($tb_files2);
   
    return $tb_files2;
}

function ScanDossierDoc($LiensDoc){
    $dir = $LiensDoc;
    if ( is_dir($dir) )  {
        if ( $dh = opendir($dir) ) {
            while ( ($element = readdir($dh)) !== false){{
                    if (	($element != '_vti_cnf')	&
                        ($element != '.')		&
                        ($element != '..')		&
                        ($element != '.DS_Store')	){
                            
                            if (is_dir($dir.'/'.$element))
                            {
                                $tb_directories[] = $element;	
                            }
                            else
                            {
                                $tb_files[] = $element;	
                            }
                        }
                    }	
                }
            }
        }
    return $tb_directories;
}

function chargeLiens($liensenv)
{
        $dirname = $liensenv;
        $dir = opendir($dirname);
        $ona = 0;
        $page = 1;
        while($file[][] = readdir($dir)) 
        {
            $liens = 0;
            for($compteur=0; $compteur<25; $compteur++)
            {
                if($file[$liens][$page] != "." && $file[$liens][$page] != ".." && !is_dir($dirname.$file[$liens][$page] && $file[$liens][$page]!="" && $file[$liens][$page]!=false))
                {
                    //echo readdir($dir),$page. "<br>";
                    $file[$liens][$page] = readdir($dir);
                    //echo "<br> L".$liens."  P".$page."  ".$file[$liens][$page]."<br>";
                    //echo "<br>"."L".$liens."  P".$page;
                }
                if ($file[$liens][$page]=="..")
                {
                    $file[$liens][$page] = "0";
                }
                $liens++;
                
            }
            //echo "<br>"."fin du for"."<br>";
            $page++;
            
        }
        //echo "<br>"."fin while"."<br>";
        
        rsort($file);
        
    return $file;
}

function ListerTotalitefichier($chemindacces)
{
    $dossier = ScanDossier($chemindacces);
    $fichier = ScanFichiers($chemindacces);
    if($dossier!="" && $dossier !=null)
    for($p=0;$p<sizeof($dossier);$p++)
    {
        $sousfichier = ScanFichiers($chemindacces.$dossier[$p]);
        $indexmulti = sizeof($fichier)+sizeof($sousfichier);
    }
    else
    $indexmulti = sizeof($fichier);


    $o=0;
    for($m=0;$m<$indexmulti;$m++)
    {
        if($m<sizeof($fichier))
        {
            $fichierfin[$m]=$fichier[$m];
        }else
        {
            $fichierfin[$m]=$sousfichier[$o];
            
            $o++;
        }
    }
    return $fichierfin;  
}

function ChercherFicher($CharactACherh, $liensDossier)
{
    $dossier = ScanDossier($liensDossier);
    $fichier = ScanFichiers($liensDossier);

    for($p=0;$p<sizeof($dossier);$p++)
    {
        if($dossier[$p] != "." && $dossier[$p] != ".." && !is_dir($dirname.$dossier[$p] && $dossier[$p]!="" && $dossier[$p]!=false && $dossier[$p]!=null))
        {
            $sousfichier = ScanFichiers($liensDossier.$dossier[$p]);
        }
        if ($dossier[$p]=="..")
        {
            $dossier[$p] = "0";
        }
    }

    $indexmulti = sizeof($fichier)+sizeof($sousfichier);
    $o=0;
    for($m=0;$m<$indexmulti;$m++)
    {
        if($m<sizeof($fichier))
        {
            if($fichier[$m] != "." && $fichier[$m] != ".." && !is_dir($dirname.$fichier[$m] && $fichier[$m]!="" && $fichier[$m]!=false && $fichier[$m]!=null))
            {
                $fichierfin[$m]=strtolower($fichier[$m]);
            }
            if ($fichier[$m]=="..")
            {
                $fichier[$m] = "0";
            }
            
        }else
        {
            $fichierfin[$m]=$sousfichier[$o];
            
            $o++;
        }
    }
    for($l=0;$l<sizeof($fichierfin);$l++)
    {
        $position = similar_text($CharactACherh,$fichierfin[$l], $perc);
        if($perc>0)
        {
            echo "Pourcentage de similariter : $position ($perc %)\n";
            echo "<br>";
            $lienstrouver[$l] = $fichierfin[$l];
            
        }
    }
    
    return $lienstrouver;
}


function renommerfichier ($chemindossier,$anciennom,$nouveauxnom)
{
    rename ($chemindossier."/".$anciennom,$chemindossier."/".$nouveauxnom);
}

function uploadfichier($chemindossier,$fichier)
{
    $nom = strtolower($fichier['name']);
    $tmpnom = $fichier['tmp_name'];
    $taille = $fichier['size'];
    $type = $fichier['type'];
    $erreurr = $fichier['error'];
    $dossier = $chemindossier;

    //echo "Nom:".$nom." - Nom temp:".$tmpnom." - Taille:".$taille." - Type:".$type." - Erreur:".$erreur." - Dossier:".$dossier;

    $fichier = basename($nom);
    $taille_maxi = 10000000;
    $taille = filesize($tmpnom);
    $extensions = array('.png', '.gif', '.jpg', '.jpeg','.mp4', '.mkv', '.avi', '.mpeg','.mp3', '.waw', '.ogg', '.flac','.doc', '.docx', '.pdf', '.txt','.zip','.rar');
    $extension = strtolower(strrchr($nom, '.')); 
    //Début des vérifications de sécurité...
    
    if(!in_array($extension, $extensions)) //Si l'extension n'est pas dans le tableau
    {
        $erreur = 'Mauvais format de fichier';
    }
  /*
    if($taille>$taille_maxi)
    {
        $erreur = 'Le fichier est trop gros...';
    }
*/
    if(!isset($erreur)) //S'il n'y a pas d'erreur, on upload
    {
        //On formate le nom du fichier ici...
        $fichier = strtr($fichier, 
            'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ', 
            'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
        $fichier = preg_replace('/([^.a-z0-9]+)/i', '-', $fichier);

        if(move_uploaded_file($tmpnom, $dossier . $fichier)) //Si la fonction renvoie TRUE, c'est que ça a fonctionné...
        {
            return true;
        }
        else //Sinon (la fonction renvoie FALSE).
        {
            return false;
        }
    }
    elseif(isset($erreur))
    {
        if($erreur!=""&&$erreur!=null)
        echo "Erreur : ".$erreur;
        return false;
    } 

}

function nettoyageCharacters($chaineCarach)
{
    $chaineCarach = strtr($chaineCarach, 
            'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ', 
            'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
    $chaineCarach = preg_replace('/([^.a-z0-9]+)/i ', '', $chaineCarach);
    $chaineCarach = strtolower($chaineCarach);

    return $chaineCarach;
}


//-------------------------------------------------___________ LECTURE DU CONTENUE D'UN FICHIERS __________

function LireFichier($chemin_fichier)
{
    $Informations = array();
    $rt = 0;

    //Ouvrire le fichier pour avoir le nombre de ligne du doc
    if(fopen($chemin_fichier,'r'))
    {
        $file = fopen($chemin_fichier,'r');
    }else
    {
        return false;
    }
    while(fgets($file))
    {
        $rt++;
    }
    fclose($file);
    
    //Ouvrire pour récupérer les ligne
    if(fopen($chemin_fichier,'r'))
    {
        $file = fopen($chemin_fichier,'r');
    }else
    {
        return false;
    }
    for($x=0;$x<$rt;$x++)
    {
        $Informations[$x] = fgets($file);
    }
    fclose($file);
    return $Informations;

    /* Version Brute 
    
    $lines = file($chemin_fichier);
    foreach ($lines as $line_num => $line) 
    {
        $Informations[$line_num] = htmlspecialchars($line);  
    }
    */
}

function GetOctetFirtsLine($chemin_fichier)
{
    $Liste_Octal = array();
    $rt = 0;
    $r=0;

    //Ouvrire le fichier pour avoir le nombre de ligne du doc
    if(fopen($chemin_fichier,'r'))
    {
        $file = fopen($chemin_fichier,'r');
    }else
    {
        return false;
    }
    while(fgets($file))
    {
        $rt++;
    }
    fclose($file);
    
    if(fopen($chemin_fichier,'r'))
    {
        $file = fopen($chemin_fichier,'r');
    }else
    {
        return false;
    }
    fseek($file,0);
    while($rt = fgets($file))
    {
        $Liste_Octal[$r] = strlen(trim($rt));
        $r++;
    }
    fclose($file);
    return $Liste_Octal;
}