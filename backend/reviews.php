#!/usr/local/bin/php
<html>
<head>
      <!--Movie title -->
    <title></title>
</head>

<body>
    <!-- <h2>Reviews for MOVIE NAME </h1> -->
    <?php
    //Initial config
    $config = parse_ini_file("database/db_config.ini");

    //Establishing connection
    $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    //HOW TO GET MOVIE_ID?
    $sql = "SELECT * FROM reviews WHERE movie_id = ";
    $result = $connection->query($sql);

    echo "<table>";

    //FORMATTING IS STILL BASIC, NEED TO CHANGE
    while($row = $result->fetch_assoc()) {
        $title = $row["title"];
        $rating = $row["rating"];
        $review = $row["review"];
        //PRINT NAME OF USER FROM USER_ID?

        echo "<tr>";
        echo "<td>$title</td>";
        echo "<td>$rating</td>";
        echo "<td>$review</td>";
        //echo "<td>$name</td>";
        echo "</tr>";
    }

    echo "</table>";
    $connection->close();
    ?>
</body>
</html>

