<?php
// Initialize the session.
session_start();

// Unset all of the session variables.
$_SESSION = array();

// Kill the session cookie.
$params = session_get_cookie_params();
setcookie(
    session_name(),
    '',
    time() - 42000,
    $params["path"],
    $params["domain"],
    $params["secure"],
    $params["httponly"]
);

// Finally, destroy the session.
session_destroy();

$response = array("message" => "Successfully logged out.");
echo json_encode($response);

exit();