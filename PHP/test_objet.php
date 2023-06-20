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

    <h1>PHP Lundi 20 Février matin</h1>
 

    <?php
    class Maison {
        public $nom;
        public $longueur;
        public $largeur;
        public $nbEtages;
    
        public function __construct($nom, $longueur, $largeur, $nbEtages) {
            $this->nom = $nom;
            $this->longueur = $longueur;
            $this->largeur = $largeur;
            $this->nbEtages = $nbEtages;
        }
    
        public function surface() {
            $surface = $this->longueur * $this->largeur * $this->nbEtages;
            echo "<div>La superficie de la <span style=color:green;>" . $this->nom . "</span> est de <span style=color:red;>" . $surface . "</span> m².</div>";
        }
    }
    
    $maison1 = new Maison("Maison bleue", 10, 8, 2);
    $maison2 = new Maison("Grande maison", 17, 15, 3);

    
    $maison1->surface();
    $maison2->surface();

    ?>
</body>

</html>