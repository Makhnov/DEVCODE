<?php

class MyClass {
    public $dept;
    public $siren;
    public $raison_sociale;
    public $nature_juridique;
    public $mode_financ;
    public $nb_membres;
    public $total_pop_tot;
    public $total_pop_mun;
    public $dep_com;
    public $insee;
    public $siren_membre;
    public $nom_membre;
    public $ptot_2023;
    public $pmun_2023;
    public $path;

    public function __construct($dept, $siren, $raison_sociale, $nature_juridique, $mode_financ, $nb_membres, $total_pop_tot, $total_pop_mun, $dep_com, $insee, $siren_membre, $nom_membre, $ptot_2023, $pmun_2023, $path) {
        $this->dept = $dept;
        $this->siren = $siren;
        $this->raison_sociale = $raison_sociale;
        $this->nature_juridique = $nature_juridique;
        $this->mode_financ = $mode_financ;
        $this->nb_membres = $nb_membres;
        $this->total_pop_tot = $total_pop_tot;
        $this->total_pop_mun = $total_pop_mun;
        $this->dep_com = $dep_com;
        $this->insee = $insee;
        $this->siren_membre = $siren_membre;
        $this->nom_membre = $nom_membre;
        $this->ptot_2023 = $ptot_2023;
        $this->pmun_2023 = $pmun_2023;
        $this->path = $path;
    }
}

// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "communes31";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

$sql = "SELECT * FROM commune";
$result = $conn->query($sql);

$communes = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $communes[] = $row;
    }
}

// Fermer la connexion à la base de données
$conn->close();

// Regrouper les communes par siren
$groupedCommunes = array();
foreach ($communes as $commune) {
    $siren = $commune['siren'];
    if (!isset($groupedCommunes[$siren])) {
        $groupedCommunes[$siren] = array();
    }
    $groupedCommunes[$siren][] = $commune;
}

// Afficher le tableau de données
//print_r($communes);

// Création d'un nouveau DOMDocument
$dom = new DOMDocument();
$dom->formatOutput = true;

// Création de l'élément SVG avec les attributs nécessaires
$svg = $dom->createElement('svg');
$svg->setAttribute('width', '1000');
$svg->setAttribute('height', '1050');
$svg->setAttribute('viewBox', '0 0 268 285');
$svg->setAttribute('preserveAspectRatio', 'none');
$svg->setAttribute('version', '1.1');
$svg->setAttribute('xmlns', 'http://www.w3.org/2000/svg');
$svg->setAttribute('id', 'haute_garonne');

// Boucle sur les groupes de communes par siren
foreach ($groupedCommunes as $siren => $communesGroup) {
    // Création de l'élément <g> pour le groupe de communes avec l'ID correspondant au siren
    $g = $dom->createElement('g');
    $g->setAttribute('id', $siren);

    // Récupération des informations communes pour le groupe
    $dept = $communesGroup[0]['dept'];
    $nbMembres = $communesGroup[0]['nb_membres'];
    $totalPopMun = $communesGroup[0]['total_pop_mun'];
    $nom = $communesGroup[0]['raison_sociale'];

    // Ajout des attributs et des valeurs aux attributs de l'élément <g>
    $g->setAttribute('class', 'epci');
    $g->setAttribute('data-nom', $nom);
    $g->setAttribute('data-departement', $dept);
    $g->setAttribute('data-communes', $nbMembres);
    $g->setAttribute('data-population', $totalPopMun);

    // Boucle sur les communes du groupe pour créer les éléments <path>
    foreach ($communesGroup as $index => $commune) {
        // Récupération des informations de la commune
        $insee = $commune['insee'];
        $nomMembre = $commune['nom_membre'];
        $ptot2023 = $commune['ptot_2023'];

        // Création de l'élément <path> avec les attributs et les valeurs correspondantes
        $path = $dom->createElement('path');
        $path->setAttribute('id', $insee);
        $path->setAttribute('class', 'commune');
        $path->setAttribute('data-nom', $nomMembre);
        $path->setAttribute('data-population', $ptot2023);
        $path->setAttribute('d', $commune['path']);

        // Ajout de l'élément <path> à l'élément <g>
        $g->appendChild($path);
    }

    // Ajout de l'élément <g> à l'élément <svg>
    $svg->appendChild($g);
}

// Ajout de l'élément <svg> au DOMDocument
$dom->appendChild($svg);

// Affichage du contenu XML généré
echo $dom->saveXML();
?>
