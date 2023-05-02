#!/usr/local/bin/php
<?php
    $config = parse_ini_file("database/db_config.ini");

    $connection = mysqli_init();
    mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);
    // $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $username = "";
    $password = "";

    if(isset($_POST["username"]) && isset($_POST["password"])) {
        $username = trim($_POST["username"]);
        $password = trim($_POST["password"]);
        
        if(!empty($username) && !empty($password)) {
            $sql = "SELECT * FROM users WHERE username='$username'";

            $result = $connection->query($sql);
            if($result -> num_rows) {
                $result_row = $result->fetch_assoc();
                if(password_verify($password, $result_row["password"])) {
                    session_start();
                    $result_row = $result->fetch_assoc();
                    $_SESSION["username"] = $result_row["username"];
                    $_SESSION["email"] = $result_row["email"];
                    $_SESSION["date"] = $result_row["date"];
                    $_SESSION["id"] = $result_row["id"];
                    header("Location: account.php"); //go to home page
                }
                else {
                    //password doesn't match
                    echo "login was unsuccessful";
                    header("Location: index.php"); //go to login page
                }
                $json = json_encode($result_row);
                echo $json;
            }
        }
    }
    else {
        echo "provide credentials";
        header("Location: index.php"); //go to login page
    }
    
    $connection->close();
?>