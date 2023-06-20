<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Exo Nico</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP24Janvier_PHP">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="./js/script.js"></script>
    <link rel="stylesheet" href="./css/contact.css">
    <link rel="icon" type="image/x-icon" href="../divers/img/favphp.ico">

</head>

<body>
    <form action="contact.php" method="POST">
        <p>Veuillez entrer un prix :</p>
        <input type="number" name="#1">
        <br>
        <p>Veuillez entrer le nombre d'article :</p>
        <input type="number" name="#2">
        <p>Veuillez entrer la TVA (%) :</p>
        <input type="number" name="#3">
        <span>-</span>
        <input type="submit" class="submit" value="Valider">
    </form>
</body>

<?php

    if(isset($_POST['#1']) && isset($_POST['#2']) && isset($_POST['#3'])) {
        $nb1 = $_POST['#1'];
        $nb2 = $_POST['#2'];
        $nb3 = $_POST['#3'];
        echo '<div><span>Prix TTC :</span><span style=color:green>'.' '.( ($nb1 * $nb2) + ( ($nb1 * $nb2) * $nb3 / 100 ) ).' '.'</span><span>€</span></div>';
    }
?>

</html>