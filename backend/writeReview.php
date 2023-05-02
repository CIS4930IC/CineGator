#!/usr/local/bin/php
<?php
    //Initial config
    $config = parse_ini_file("database/db_config.ini");

    //Establishing connection
    $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    //$id from somewhere
    //$user_id from somewhere
    //$movie_id from somewhere
    //HOW TO GET THESE?

    $title = $_POST["title"];
    $rating = $_POST["rating"];
    $review = $_POST["review"];

    $sql = "INSERT INTO reviews ('name', 'rating', 'review') VALUES ('$title', '$rating', '$review')";
    $result = $connection->query($sql);

    $connection->close();
    //header(Somewhere); Back to movie page?
?>