<?php
    $login = filter_var(trim($_POST['email']),
    FILTER_SANITIZE_STRING);
    $name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRING);
    $password = filter_var(trim($_POST['password']),
    FILTER_SANITIZE_STRING);

    echo $login;
    echo $name;
    echo $password;

    include('reglog.php');

    $mysql -> query("INSERT INTO `users`(`login`, `password`, `name`) VALUES ('$login', '$password', '$name')");

    echo '<script>alert("Success!!!")</script>';

    header('Location: /b2b.html');
?>