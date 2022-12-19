<?php
    $mysql = new mysqli("localhost", "root", "", "reglog");
    if ($mysql->connect_error) {
        die("Connection failed: " . $mysql->connect_error);
    }
?>
