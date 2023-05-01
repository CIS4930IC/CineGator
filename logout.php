#!/usr/local/bin/php
<?php
    session_start();
    //get rid of all user info
    session_destroy();

    $_SESSION = array();

?>