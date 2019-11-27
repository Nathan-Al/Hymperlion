<?php
    
    if(isset($_GET["admin"]))
    {
        require "Controller/controll-gestion.php";
    }else
    {
        echo "<meta http-equiv='refresh' content='0; URL=Controller/controll-menu.php'>";
    }
?>