#!/usr/local/bin/php
<html>
    <head>
        <title>Write Review</title>
        <link rel="stylesheet" type="text/css"/>
    </head>

    <body>
        <form action="writeReview.php" method="post">

            <label for="name">Title:</label>
            <input type="text" name="tile" id="title" required><br><br>

            <label for="rating">Rating:</label>
            <select name="rating" id="rating" required>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select> <br><br>

            <label for="review">Review text:</label>
            <textarea name="review" id="review" required></textarea>
            <input type="submit" value="Publish">
        </form>
    </body>
</html>