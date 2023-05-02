#!/usr/local/bin/php
<html>
    <head>
        <title>CineGator</title>
        <!-- <link rel="stylesheet" type="text/css" href="../../style.css" /> -->
        <script>
            function register() {
                document.form1.action = "register.php";
		        document.form1.submit();
            }
            function login() {
                document.form2.action = "login.php";
		        document.form2.submit();
            }
        </script>
    </head>
    <header>
        <h1 style="color:#ffffff; word-spacing:45px; letter-spacing:30px; text-shadow: 2px 1px 2px black;">CineGator</h1>
    </header>
    <body><br><br>
        <?php
            $config = parse_ini_file("database/db_config.ini");

            $connection = mysqli_init();
            mysqli_real_connect($connection, $config["servername"], $config["username"], $config["password"], $config["dbname"], 3306, NULL, MYSQLI_CLIENT_SSL);
            // $connection = new mysqli($config["servername"], $config["username"], $config["password"], $config["dbname"]);

            if ($connection->connect_error) {
                die("Connection failed: " . $connection->connect_error);
            }

            $sql = "SELECT * FROM users";
            $result = $connection->query($sql);

            echo "<div>Accounts: </div><br>";
            while($row = $result->fetch_assoc()) {
                $email = $row["email"];

                echo "<div>$email</div><br>";
            }
            $connection->close(); 
        ?>
        <hr><br><form method="post" name='form1'>
            <label style="margin-left: 75px;">Email: </label>
            <input type="text" name="email" id="email" required><br><br>
            <label style="margin-left: 75px;">Username: </label>
            <input type="text" name="username" id="username" required><br><br>
            <label style="margin-left: 75px;">Password: </label>
            <input type="text" name="password" id="password" required><br><br>
            <input style='margin-left: 75px;' type='button' value='Register' onClick='register()'>
        </form>
        <hr><br><form method="post" name='form2'>
        <label style="margin-left: 75px;">Username: </label>
            <input type="text" name="username" id="username" required><br><br>
            <label style="margin-left: 75px;">Password: </label>
            <input type="text" name="password" id="password" required><br><br>
            <input style="margin-left: 75px;" type='button' value='Login' onClick='login()'>
        </form>
        <!-- <input style="margin-left: 780px;" type='button' value='Login' onClick="document.location.href=loginForm.php"> -->
        <!-- <input style="margin-left: 75px;" type='button' value='Create Account' onClick="href=registerForm.php"> -->
    </body>
</html>