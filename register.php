#!/usr/local/bin/php
<?php
    //start a new session for new user
    // session_start();

    $config = parse_ini_file("database/db_config.ini");

    $connection = mysqli_init();
    mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);
    // $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $date = date("Y/m/d");

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";

    $search_result = $connection->query($sql);

    if($search_result -> num_rows == 0) {
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $sqlinsert = "INSERT INTO users (`email`, `username`, `password`, `creationDate`) VALUES ('$email', '$username', '$hashed_password', '$date')";

        $result = $connection->query($sqlinsert);

        $retry_result = $connection->query($sql);

        // $_SESSION["username"] = $username;
        // $_SESSION["password"] = $hashed_password;
        // $_SESSION["email"] = $email;
        // $_SESSION["date"] = $date;
        // $result_row = $retry_result->fetch_assoc();
        // $_SESSION["id"] = $result_row["id"];

    }
    header("Refresh:3; url=index.php"); //go to home page
?>

    <div>
        <h1 class="text-center text-success">You have successfully registered!</h1>
    </div>
    
<?php
    $row = $retry_result->fetch_assoc();
    $json = json_encode($row);

    echo $json;

    $connection->close();
?>