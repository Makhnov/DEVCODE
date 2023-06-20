<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Exo Nico</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP#_LANGAGE">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/x-icon" href="../divers/img/favphp.ico">

</head>

<body>

    <h1>PHP Jeudi 26 Janvier Apres-Midi</h1>
    <form action="./utils/ajoutEmployes.php" method="POST" enctype="multipart/form-data">
        <h2>Employés</h2>
        <fieldset>
            <legend>Ajout d'employé</legend>
            <p>
                <input type="text" name="nom" id="nom_employes">
                <label for="nom_employes">Nom du salarié :</label>
            </p>
            <p>
                <input type="text" name="poste" id="poste_employes">
                <label for="poste_employes">Intitulé du poste :</label>
            </p>
            <p>
                <input type="text" name="salaire" id="salaire_employes">
                <label for="salaire_employes">Salaire (Annuel) :</label>
            </p>
            <p>
                <input id="submitEmployes" type="submit" value="Embaucher">
                <button><a href="./utils/getEmployes.php">Voir les<strike>larbins</strike>employés</a></button>
            </p>
        </fieldset>
    </form>

    <?php

    ?>

    <script src="./js/script.js"></script>
</body>

</html>