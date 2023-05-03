<?php
$config = parse_ini_file("database/db_config.ini");

$connection = mysqli_init();
mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

if ($connection->connect_error) {
    $response = array("status" => "error", "message" => "Connection failed: " . $connection->connect_error);
    echo json_encode($response);
    exit();
}

$username = "";
$password = "";

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if (!empty($username) && !empty($password)) {
        $stmt = $connection->prepare("SELECT * FROM users WHERE username=?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows) {
            $result_row = $result->fetch_assoc();
            if (password_verify($password, $result_row["password"])) {
                session_start();
                $_SESSION["loggedIn"] = true;
                $_SESSION["username"] = $result_row["username"];
                $_SESSION["email"] = $result_row["email"];
                $_SESSION["id"] = $result_row["id"];
                http_response_code(200);
                $response = array("message" => "Login successful.");
                echo json_encode($response);
            } else {
                http_response_code(401);
                $response = array("message" => "Incorrect password.");
                echo json_encode($response);
                exit();
            }
        } else {
            http_response_code(401);
            $response = array("message" => "Username not found.");
            echo json_encode($response);
            exit();
        }
    } else {
        http_response_code(400);
        $response = array("message" => "Provide both username and password.");
        echo json_encode($response);
        exit();
    }
} else {
    http_response_code(400);
    $response = array("message" => "Provide credentials.");
    echo json_encode($response);
    exit();
}

$connection->close();
