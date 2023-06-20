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
        private $nom_maison;
        private $longueur_maison;
        private $largeur_maison;
        private $nbEtages_maison;
    
        public function __construct($nom, $longueur, $largeur, $nbEtages) {
            $this->nom_maison = $nom;
            $this->longueur_maison = $longueur;
            $this->largeur_maison = $largeur;
            $this->nbEtages_maison = $nbEtages;
        }

        // GETTERS //
        public function getNomMaison() {
            return $this->nom_maison;
        }
        public function getLongueurMaison() {
            return $this->longueur_maison;
        }
        public function getLargeurMaison() {
            return $this->largeur_maison;
        }
        public function getEtagesMaison() {
            return $this->nbEtages_maison;
        }

        // SETTERS //
        public function setNomMaison($str) {
            $this->$nom_maison = $str;
            return $this->nom_maison;
        }
        public function setLongueurMaison($float) {
            $this->$longueur_maison = $float;
            return $this->longueur_maison;
        }
        public function setLargeurMaison($float) {
            $this->$largeur_maison = $float;
            return $this->largeur_maison;
        }
        public function setEtagesMaison($int) {
            $this->$nbEtages_maison = $int;
            return $this->nbEtages_maison;
        }

        public function surface() {
            $surface = $this->getLongueurMaison() * $this->getLargeurMaison() * $this->getEtagesMaison();
            echo "<div>La superficie de la <span style=color:green;>" . $this->getNomMaison() . "</span> est de <span style=color:red;>" . $surface . "</span> m².</div>";
        }
    }
    
    $maison1 = new Maison("Maison bleue", 10, 8, 2);
    $maison2 = new Maison("Grande maison", 17, 15, 3);

    
    $maison1->surface();
    $maison2->surface();

    ?>
</body>

</html>