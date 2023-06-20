<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" type="image/x-icon" href="../../divers/img/favphp.ico">
    
    <title>Recupération DB : testDB(employes)</title>
</head>
<body>
    
    <?php

        $bdd = new PDO('mysql:host=localhost;dbname=testDB', 'root', '',
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        $bdd->exec("set names utf8");

        try {
            $requete = $bdd->query("SELECT * FROM employes");

            while ($data = $requete->fetch()) {
                echo '<p><span><font color="#1b36df">'.$data['nom_employes'].'</font> est embauché en tant que : </span>';
                echo '<span><font color="#00FF00">'.$data['poste_employes'].'</font>. Il gagne </span>';
                echo '<spanp><font color="#f12508">'.$data['salaire_employes'].'</font> $ par an.</span></p>';
            }
        }

        catch(Exception $exc) {
            die('Erreur : '.$exc->getMessage());
        }
    ?>

    <a href="../index.php">Retour</a>
</body>
</html>