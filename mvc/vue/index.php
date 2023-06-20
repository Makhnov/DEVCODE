<?php // <!-------------------------------- STRUCTURE HTML DE LA PAGE PRINCIPALE --------------------------------> //?>

<!DOCTYPE html>

<html lang="fr">

<head>
    <title>BDD Articles</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP99_PHP MVC">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- !!! Les liens ci-dessous sont en relatifs par rapport à la page de référence !!! -->
    <!-------------- (ici : mvc\controller\index.php et non mvc\vue\index.php -------------->
    <link rel="stylesheet" href="../../utils/css/articles.css" href="">
    <link rel="icon" type="image/x-icon" href="../../utils/img/favphp.ico">
    <script src="..\..\utils\js\articles.js"></script>
    
</head>

<body>
    <header>
        <h2><a href="./index.php">Accueil</a></h2>
        <nav>
            <ul>
                <!-- Le lien ci-dessous lance une requête (affichage) sur une BDD (articles) et une table (article) spécifiques -->
                <li><a href="./index.php?action=vue&database=articles&table=article">Articles</a></li> 
                <!-- Le lien ci-dessous lance une requête (insertion) sur une BDD (articles) et une table (article) spécifiques -->
                <li><a href="./index.php?action=ajout&database=articles&table=article">Ajout article</a></li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
                <li>Menu 6</li>
            </ul>
        </nav>
    </header>

    
    <?php
        mainContainer(); // (mvc\controller\functions.php ligne 27)
    ?>

    <footer>
        <h2>Footer</h2>
    </footer>

</body>

</html>