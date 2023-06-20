<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" type="image/x-icon" href="../../divers/img/favphp.ico">
<title>Ajout employé</title>

</head>
<body onload="addPHP()">
<script src="../js/script.js"></script>

    <div id="confirmAjoutEmployes">Le nouvel employé à été ajouté avec succès !</div>
        
    <?php

        if ( isset($_POST['nom']) && (isset($_POST['poste'])) && (isset($_POST['salaire'])) ) {

            $bdd = new PDO('mysql:host=localhost;dbname=testDB', 'root', '',
            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            $bdd->exec('set names utf8');

            try {
                // $reponse = $bdd->exec("INSERT INTO article (nom_article, contenu_article) VALUES ('$nom_article','$contenu_article');");
                // $reponse = $bdd->exec('INSERT INTO article (nom_article, contenu_article) VALUES ("'.$nom_article.'","'.$contenu_article.'");');

                $insert = $bdd->prepare("
                    INSERT INTO employes(nom_employes, poste_employes, salaire_employes)
                    VALUES (:nom, :poste, :salaire)
                ");

                $insert->bindParam(':nom', $nom_employes);
                $insert->bindParam(':poste', $poste_employes);
                $insert->bindParam(':salaire', $salaire_employes);

                $nom_employes = $_POST['nom'];
                $poste_employes = $_POST['poste'];
                $salaire_employes = $_POST['salaire'];
                
                
                ?>
                     <script>
                        let nom_employes = <?php echo json_encode($nom_employes); ?>;
                        let ajout_employes = true;
                        let messageBDD = document.getElementById('confirmAjoutEmployes');
                        messageBDD.textContent = "True";
                        console.log('hello True');
                        console.log(nom_employes);
                        console.log(ajout_employes);
                     </script>
                 <?php
                

                $insert->execute();
                $insert->closeCursor();
                header("location: ajoutEmployes.php?nom_employes=$nom_employes");
            }

            catch(Exception $exc) {
                ?>
                    <script>
                        let messageErreur = <?php $exc.getMessage(); ?>;
                        let messageDiv = document.getElementById('confirmAjoutEmployes');
                        messageDiv.textContent = messageErreur;
                    </script>
                <?php
                die();
            }
        }
    ?>

    <a href="../index.php">Retour</a>
</body>
</html>