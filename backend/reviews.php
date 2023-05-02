#!/usr/local/bin/php
    
<?php
    //Initial config
    $config = parse_ini_file("database/db_config.ini");

    //Establishing connection
    $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    //HOW TO GET MOVIE_ID?
    $sql = "SELECT * FROM reviews WHERE movie_id = ";
    $result = $connection->query($sql);

    while($row = $result->fetch_assoc()) {


    //PRINT NAME OF USER FROM USER_ID?
    }

    $connection->close();
?>