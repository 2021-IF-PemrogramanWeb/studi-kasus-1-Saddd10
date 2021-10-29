<?php
//Koneksi ke database
$conn = mysqli_connect("localhost", "root", "", "pweb-f");


if(isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username' ");

    if( mysqli_num_rows($result) === 1){

        $hrs = mysqli_fetch_assoc($result);
        if( $password == $hrs["password"]){
            header("Location: ../dashboard.php");
            exit;
        }
    }
    $error = true;
 }
?>

<html>
    <head>
        <title>Halaman Login</title>
        <style type="text/css">
            @import url(style.css);
        </style>
    </head>
    <body>
    <div class="container" id="container">
        <div class="form-container sign-in-container">
            <form action="" method="post">
                <h1>Masuk</h1>
                <input type="text" name="username" id="username" placeholder="Username" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <?php if(isset($error)) : ?>
                    <p>Username/Password salah</p>
                <?php endif; ?>
                <button type="submit" name="login" >Masuk</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-right">
                    <h1>Selamat Datang!</h1>
                </div>
            </div>
        </div>
    </div>
    </body>
</html>