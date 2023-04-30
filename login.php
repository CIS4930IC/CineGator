#!/usr/local/bin/php
<?php
    $config = parse_ini_file("database/db_config.ini");

    $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $username = "";
    $password = "";

    if(isset($_POST["username"]) && isset($_POST["password"])) {
        $username = trim($_POST["username"]);
        $password = trim($_POST["password"]);
        if(!empty($username) && !empty($password)) {
            $sql = "SELECT * FROM Users WHERE username='$username' AND password='$password'";

            $result = $connection->query($sql);
            if($result -> num_rows) {
                $result_row = $result->fetch_assoc();
                if(password_verify($password, $result_row["password"])) {
                    //valid user so we can start their session
                    session_start();
                    $_SESSION["username"] = $username;
                    $result_row = $result->fetch_assoc();
                    $_SESSION["name"] = $result_row["name"];
                    $_SESSION["date"] = $result_row["date"];
                    $_SESSION["id"] = $result_row["id"];
                }
            }
        }
    }
    else {
        echo "provide credentials";
    }

    header("Location: index.php"); //go to home page
    $connection->close();
?>