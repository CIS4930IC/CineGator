<?php
    $config = parse_ini_file("database/db_config.ini");

    $connection = mysqli_init();
    mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);

    if ($connection->connect_error) {
        $response = array("status" => "error", "message" => "Connection failed: " . $connection->connect_error);
        echo json_encode($response);
        exit();
    }

    $sql = "SELECT * FROM reviews ORDER BY id DESC";
    $result = $connection->query($sql);
    if ($result !== false && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $reviews[] = $row;
        }
        http_response_code(200);
        echo json_encode($reviews);
    } else {
        http_response_code(200);
        echo json_encode(array("message" => "No reviews made."));
        exit();
    }

    $connection->close();
?>