<?php
$config = parse_ini_file("database/db_config.ini");

$connection = mysqli_init();
mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

if ($connection->connect_error) {
    $response = array("status" => "error", "message" => "Connection failed: " . $connection->connect_error);
    echo json_encode($response);
    exit();
}

$user_id = $_GET['id'];

// Query the database to get the username of the user with the provided ID
$query = "SELECT username FROM users WHERE id = ?";
$stmt = $connection->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

// Check if a user with the provided ID was found
if ($row) {
    http_response_code(200);
    $response = array("username" => $row['username']);
} else {
    http_response_code(404);
    $response = array("message" => "User not found");
}

// Close the database connection
$connection->close();

// Return the response as JSON
echo json_encode($response);
exit();
