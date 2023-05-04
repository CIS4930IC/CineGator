<?php
//start a new session for new user
session_start();

$config = parse_ini_file("database/db_config.ini");

$connection = mysqli_init();
mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$email = $_POST["email"];
$username = $_POST["username"];
$password = $_POST["password"];
$date = date("Y/m/d");
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Prepare SQL to protect against SQL injection
$stmt = $connection->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$search_result = $stmt->get_result();

if ($search_result->num_rows == 0) {
    // Prepare SQL to protect against SQL injection
    $stmt = $connection->prepare("INSERT INTO users (`email`, `username`, `password`, `creationDate`) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $email, $username, $hashed_password, $date);
    $stmt->execute();

    $retry_result = $connection->query("SELECT * FROM users WHERE username='$username'");

    $_SESSION["loggedIn"] = true;
    $_SESSION["username"] = $username;
    $_SESSION["password"] = $hashed_password;
    $_SESSION["email"] = $email;
    $result_row = $retry_result->fetch_assoc();
    $_SESSION["id"] = $result_row["id"];

    http_response_code(200);
    $response = array("message" => "Registration successful.");
    echo json_encode($response);
} else {
    http_response_code(401);
    $response = array("message" => "Username already exists.");
    echo json_encode($response);
    exit();
}

$connection->close();
