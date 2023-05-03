<?php
//Initial config
$config = parse_ini_file("database/db_config.ini");

$connection = mysqli_init();
mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

if ($connection->connect_error) {
    $response = array("status" => "error", "message" => "Connection failed: " . $connection->connect_error);
    echo json_encode($response);
    exit();
}

if (isset($_POST["userID"]) && isset($_POST["movieID"]) && isset($_POST["title"]) && isset($_POST["rating"]) && isset($_POST["body"])) {
    $user_id = $_POST["userID"];
    $movie_id = $_POST["movieID"];
    $title = $_POST["title"];
    $rating = $_POST["rating"];
    $body = $_POST["body"];
    $sql = "INSERT INTO reviews (`userID`,`movieID`,`title`, `rating`, `body`) VALUES ($user_id, $movie_id, '$title', $rating, '$body')";
    $result = $connection->query($sql);
    http_response_code(200);
    // Return review
    $response = array(
        "userID" => $user_id,
        "movieID" => $movie_id,
        "title" => $title,
        "rating" => $rating,
        "body" => $body
    );
    echo json_encode($response);
} else {
    http_response_code(400);
    $response = array("message" => "Provide all fields.");
    echo json_encode($response);
}

exit();
$connection->close();
