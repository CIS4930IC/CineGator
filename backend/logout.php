#!/usr/local/bin/php
<?php
    session_start();
    //get rid of all user info
    session_destroy();

    setcookie(session_name(), '', time()-3600);

    $_SESSION = array();

    header("Refresh:3; url=index.php"); //go to login page
?>
<div class="container wrapper">
    <h1 class="text-center">Logged Out</h1>
    <p class="text-center text-danger"> Thank you for your visit. You are now logged out.</p>
</div>