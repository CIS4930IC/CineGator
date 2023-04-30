#!/usr/local/bin/php
<html>
    <head>
        <title>Create Account</title>
        <link rel="stylesheet" type="text/css" href="../style.css" />
        <script>
            function register() {
                document.form1.action = "register.php";
		        document.form1.submit();
            }

            // function change() {
            //     document.form1.action = "change.php";
		    //     document.form1.submit();
            // }
        </script>
    </head>
    <header>
        <h1 style="color:#ffffff; word-spacing:45px; letter-spacing:30px; text-shadow: 2px 1px 2px black;">Register</h1>
    </header>
    <body><br><br>
        <form method="post" name='form1'>
            <label style="margin-left: 75px;">Name: </label>
            <input type="text" name="name" id="name" required><br><br>
            <label style="margin-left: 75px;">Username: </label>
            <input type="text" name="username" id="username" required><br><br>
            <label style="margin-left: 75px;">Password: </label>
            <input type="text" name="password" id="password" required><br><br>
            <label style="margin-left: 75px;">Confirm Password: </label>
            <input type="text" name="confpassword" id="confpassword" required>
            <input type='button' value='Register' onClick='register()'>
        </form>
    </body>
</html>
<?php

?>