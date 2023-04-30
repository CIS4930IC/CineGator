#!/usr/local/bin/php
<html>
    <head>
        <title>CineGator</title>
        <link rel="stylesheet" type="text/css" href="../../style.css" />
    </head>
    <header>
        <h1 style="color:#ffffff; word-spacing:45px; letter-spacing:30px; text-shadow: 2px 1px 2px black;">CineGator</h1>
    </header>
    <body><br><br>
        <?php
            $config = parse_ini_file("database/db_config.ini");

            $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $sql = "SELECT * FROM users";
            $result = $connection->query($sql);

            echo "<div>Accounts: </div><br>";
            while($row = $result->fetch_assoc()) {
                $name = $row["name"];

                echo "<div>$name</div><br><br>";
            }
            $connection->close();
        ?>
        <!-- <input style="margin-left: 780px;" type='button' value='Login' onClick="document.location.href=loginForm.php"> -->
        <input type='button' value='Create Account' onClick="document.location.href=registerForm.php">
    </body>
</html>