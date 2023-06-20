<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recupération DB : articles</title>
</head>
<body>
    
    <?php

        $bdd = new PDO('mysql:host=localhost;dbname=articles', 'root', '',
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        $bdd->exec("set names utf8");

        try {
            $requete = $bdd->query('SELECT * FROM article');

            while ($data = $requete->fetch()) {
                echo '<p>'.$data['nom_article'].'<p>';
                echo '<p>'.$data['contenu_article'].'<p>';
            }
        }

        catch(Exception $exc) {
            die('Erreur : '.$exc->getMessage());
        }
    ?>

    <a href="../index.php">Retour</a>
</body>
</html>