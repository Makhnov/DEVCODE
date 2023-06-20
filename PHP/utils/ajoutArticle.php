<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recupération formulaire</title>
</head>
<body>
    
    <?php
                    
        $bdd = new PDO('mysql:host=localhost;dbname=articles', 'root', '',
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        $bdd->exec('set names utf8');

        try {
           // $reponse = $bdd->exec("INSERT INTO article (nom_article, contenu_article) VALUES ('$nom_article','$contenu_article');");
           // $reponse = $bdd->exec('INSERT INTO article (nom_article, contenu_article) VALUES ("'.$nom_article.'","'.$contenu_article.'");');

           $insert = $bdd->prepare("
                INSERT INTO article(nom_article, contenu_article)
                VALUES (:titre, :contenu)
            ");

            $insert->bindParam(':titre', $nom_article);
            $insert->bindParam(':contenu', $contenu_article);

            if (isset($_POST['titre']) && (isset($_POST['contenu']))) {
                $nom_article = $_POST['titre'];
                $contenu_article = $_POST['contenu'];
                
                echo 'Titre : '.$nom_article.'<br>'.
                    'Contenu : '.$contenu_article.'<br>'
                ;
            }

            $insert->execute();
            $insert->closeCursor();
        }

        catch(Exception $exc) {
            die('Erreur : '.$exc->getMessage());
        }
    ?>

    <a href="../index.php">Retour</a>
</body>
</html>