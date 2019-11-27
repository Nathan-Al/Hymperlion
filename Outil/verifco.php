<?php

    class Verifco
    {
        public function co ()
        {
            session_start();
            if(isset($_SESSION['co']))
            {
                return true;
            }else
            {
                return false;
            }
        }
    }

?>