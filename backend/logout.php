#!/usr/local/bin/php
<?php
    session_start();
    //get rid of all user info
    session_destroy();

    $_SESSION = array();

    header("Refresh:3; url=index.php"); //go to home page

?>