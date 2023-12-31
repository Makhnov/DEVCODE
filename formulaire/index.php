<!DOCTYPE html>

<html lang="fr">

<head>
    <title>Exo Nico</title>

    <meta name="author" content="Nico M">
    <meta name="description" content="TP#_LANGAGE">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/style.css">
    <link rel="icon" type="image/x-icon" href="../divers/img/favexo.ico">

</head>

<body id="exo1">

    <header>
        <a href="#exo1">Exercice 1<br>
            Formulaire</a>
        <a href="#exo2">Exercice 2<br>
            Validations</a>
        <a href="#exo3">Exercice 3<br>
            TBC</a>
        <a href="#exo4">Exercice 4<br>
            TBC</a>
    </header>

    <div id="container">
        <section>
            <h1>Exercice JavaScript : Formulaire</h1>
            <form action="login.html" method="GET" id="login">
                <h2>Se connecter</h2>

                <div class="ligneForm">
                    <label for="name">Nom :</label>
                    <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" />
                    <span></span>
                </div>
                <div class="ligneForm">
                    <label for="name">Prenom:</label>
                    <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" />
                    <span></span>
                </div>
                <div class="ligneForm">
                    <label for="name">Age:</label>
                    <input type="text" id="age" name="age" placeholder="Entrez votre âge" />
                    <span></span>
                </div>
                <div class="ligneForm">
                    <label for="name">Code postal:</label>
                    <input type="text" id="cp" name="cp" placeholder="Entrez votre code postal" />
                    <span></span>
                </div>
                <div class="ligneForm">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Entez votre e-mail" />
                    <span></span>
                </div>
                <div class="boutons">
                    <button onclick="annuler()" class="annuler">Annuler</button>
                    <button type="submit" class="valider">Valider</button>
                </div>
            </form>
            <div class="footer" id="exo2"></div>
        </section>

        <section>
            <h1>Validation données</h1>

            <div class="footer" id="exo3"></div>
        </section>

        <section>
            <h1>TBC</h1>

            <div class="footer" id="exo4"></div>
        </section>

        <section>
            <h1>TBC</h1>

        </section>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>