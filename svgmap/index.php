<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Exo Nico</title>
    <meta name="author" content="Nico M">
    <meta name="description" content="TP#_LANGAGE">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/x-icon" href="./img/favicon.ico">
</head>

<body onload="init()">
    <header>
    </header>
    <div class="container">
        <fieldset class="reinitialisation">
            <legend>Reinitialisation</legend>
            <button onclick="init()">CLEAR</button>
        </fieldset>
        <fieldset class="selection">
            <legend>Choisisez une vue</legend>
            <div>
                <input id="epci" type="radio" name="mode">
                <label for="epci">EPCI</label>
            </div>
            <div>
                <input id="communes" type="radio" name="mode">
                <label for="communes">Communes</label>
            </div>
        </fieldset>
        <fieldset class="information">
            <legend>Informations</legend>
            <div>
                <label for="denomination">Nom :</label>
                <p id="denomination"></p>
            </div>
            <div class="comcom">
                <label for="comcom">Interco :</label>
                <p id="comcom"></p>
            </div>
            <div>
                <label for="population">Population :</label>
                <p id="population"></p>
            </div>
            <div>
                <label for="code">Code :</label>
                <p id="code"></p>
            </div>        
        </fieldset>
    </div>
    <main class="container vue_epci">
        <div class="carte">
            <?php include './utils/communes.php'; ?>
        </div>
    </main>
    <footer>
    </footer>
    <script src="./js/script.js"></script>
</body>

</html>