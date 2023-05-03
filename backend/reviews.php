<?php
$config = parse_ini_file("database/db_config.ini");

$connection = mysqli_init();
mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

if ($connection->connect_error) {
    $response = array("status" => "error", "message" => "Connection failed: " . $connection->connect_error);
    echo json_encode($response);
    exit();
}

// Get Movie ID and make query
if (isset($_POST["movieID"])) {
    $movie_id = trim($_POST["movieID"]);
    $sql = "SELECT * FROM reviews WHERE movieID = $movie_id";
    $result = $connection->query($sql);
    if ($result !== false && $result->num_rows > 0) {
        // Return json array of reviews
        while ($row = $result->fetch_assoc()) {
            $reviews[] = $row;
        }

        http_response_code(200);
        echo json_encode($reviews);
    } else {
        http_response_code(200);
        echo json_encode(array("message" => "No reviews found."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Provide movie ID."));
}

exit();
$connection->close();
?>