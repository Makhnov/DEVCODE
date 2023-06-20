<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Exo Nico</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP#_LANGAGE">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="./js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    <link rel="stylesheet" href="./css/26JanvierMatin.css">
    <link rel="icon" type="image/x-icon" href="../divers/img/favphp.ico">

</head>

<body>

    <h1>PHP Jeudi 26 Janvier Matin</h1>
    <form action="./utils/ajoutArticle.php" method="POST" enctype="multipart/form-data">
        <h2>Articles</h2>
        <fieldset>
            <legend>Ajouter un article</legend>
            <p>
                <input type="text" name="titre" id="nom_article">
                <label for="nom_article">Entrez un titre :</label>
            </p>
            <p>
                <textarea id="contenu_article" name="contenu" rows="10" cols="50"></textarea>
                <label for="contenu_article">Entrez un contenu :</label>
            </p>
            <p>
                <input id="submitArticle" type="submit"value="Ajouter l'article">
                <button><a href="./utils/getArticle.php">Voir les articles</a></button>
            </p>
        </fieldset>
    </form>

    <?php

    ?>


</body>

</html>