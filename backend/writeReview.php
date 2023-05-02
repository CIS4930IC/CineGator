#!/usr/local/bin/php
<?php
    //Initial config
    $config = parse_ini_file("database/db_config.ini");

    //Establishing connection
    $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $user_id = $_POST["userID"];
    $movie_id = $_POST["movieID"];
    $title = $_POST["title"];
    $rating = $_POST["rating"];
    $body = $_POST["body"];

    $sql = "INSERT INTO reviews ('userID','movieID','title', 'rating', 'body') VALUES ('$user_id','$movie_id','$title', '$rating', '$body')";
    $result = $connection->query($sql);

    $connection->close();
    //header(Somewhere); Back to movie page?
?>