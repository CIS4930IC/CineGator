<?php
    session_start();
    if(isset($_SESSION["loggedIn"]) && $_SESSION["loggedIn"] == true) {
        http_response_code(200);
        $response = array(
            'loggedIn' => true,
            'id' => $_SESSION["id"],
            'username' => $_SESSION["username"],
            'email' => $_SESSION["email"]
        );
    }
    else {
        http_response_code(400);
        $response = array("message" => "No user logged in.");
    }
    echo json_encode($response);
?>