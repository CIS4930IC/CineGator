#!/usr/local/bin/php
<html>
    <head>
        <title>user account</title>
        <!-- <link rel="stylesheet" type="text/css" href="../../style.css" /> -->
    </head>
    <header>
        <h1 style="color:#ffffff; word-spacing:45px; letter-spacing:30px; text-shadow: 2px 1px 2px black;">User Account</h1>
    </header>
    <body>
        <?php
            session_start();
            echo "Email: " . $_SESSION["email"] . "<br>";
            echo "Username: " . $_SESSION["username"] . "<br>";
            echo "Date Created: " . $_SESSION["date"] . "<br>";
            echo "ID: " . $_SESSION["id"] . "<br>";
        ?>
        <div></div>
    </body>
</html>