<?php // <!-------------------------------- FONCTIONS DE CONTROLE --------------------------------> //

    // FONCTION QUI, DANS UN PREMIER TEMPS, RECUPERE LES ARGUMENTS CONCERNANT BDD ET TABLES SI ILS EXISTENT   //
    // DANS UN SECOND TEMPS (RETURN) VA ALLER RECUPERER LES DONNES DANS LA BDD ET LA TABLE CORRESPONDANTES    //
    function getData() {
        if ((isset($_GET['database']) && !empty($_GET['database'])) && 
            (isset($_GET['table']) && !empty($_GET['table']))) {
                $db = $_GET['database']; // On va directement chercher dans l'url le nom de la BDD.
                $table = $_GET['table']; // Et celui de la table qui nous intéresse.
                return get($db, $table); // On renvoit ces infos à la fonction qui va récupérer les données (mvc/model/datas.php : ligne 4).
        }
    }

    // FONCTION QUI, DANS UN PREMIER TEMPS, RECUPERE LES ARGUMENTS CONCERNANT BDD ET TABLES SI ILS EXISTENT     //
    // DANS UN SECOND TEMPS (RETURN) VA INSERER LES DONNES ENTREES PAR L'UTILISATEUR DANS LA BDD CORRESPONDANTE //
    function insertData() {
        if ((isset($_GET['database']) && !empty($_GET['database'])) && 
            (isset($_GET['table']) && !empty($_GET['table']))) {
                $db = $_GET['database']; // On va directement chercher dans l'url le nom de la BDD.
                $table = $_GET['table']; // Et celui de la table qui nous intéresse.
                return insert($db, $table); // On renvoit ces infos à la fonction qui va insérer les données (mvc/model/datas.php : ligne 27).
        }
    }

    // FONCTION QUI AFFICHE LES INFORMATIONS DEMANDEES PAR L'UTILISATEUR //
    // DANS LA ZONE PRINCIPALE (container) DE LA PAGE PRINCIPALE (main)  //
    function mainContainer() {
        if (isset($_GET['action']) && !empty($_GET['action'])) {
        // Si une action a été engagée on récupère sa valeur dans un switch
            switch ($_GET['action']) {
                case 'vue': // Action : Affichage de données.
                    $data = getData(); // On récupère les données.
                    element('div','container', ''); // On crée un élément HTML pour accueillir les données (mvc/vue/functions.php : ligne 4)

                    ?>
                        <script> // On lance un script pour créer un DOM temporaire.
                            let titre = '';
                            let contenu = '';
                            let data = <?php echo json_encode($data);?>; // Les données sont transmises de PHP à JS (variable 'data').
                            affichageArticle(data, titre, contenu); // On lance la fonction qui affiche les données recueillies.
                        </script>
                    <?php
                    break; // Fin du premier cas.

                case 'ajout':
                case 'ajoutOK':
                    formulaire(); // On intègre le formulaire dans notre page principale.
                    if ($_GET['action'] === 'ajoutOK') {

                    }
                    break; // Fin du second cas.

                case 'insert':
                    $nom = insertData(); // On injecte les données.
                    header("Location: /TRASHCODE/mvc/controller/index.php?action=ajoutOK&list=hidden&title=$nom&database=articles&table=article"); // On redirige l'utilisateur vers la page principale du contrôleur. 
                    exit(); // On 'break' la redirection (côté serveur).                    
                    break;
            }
        }
    }

    // FONCTION QUI AFFICHE LES INFORMATIONS DEMANDEES PAR L'UTILISATEUR //
    // DANS LA ZONE ANNEXE (container) DE LA PAGE AJOUT (form)           //
    function formContainer() {
        if (isset($_GET['list']) && !empty($_GET['list'])) {
        // Si une action a été engagée on récupère sa valeur dans un switch
            switch ($_GET['list']) {
                case 'visible': // Action : Affichage de données.
                    $data = getData(); // On récupère les données.
                    $titre = '';
                    $contenu = '';

                    // On récupère les données entrées par l'utilisateur (si elles existent) pour les ré-afficher.
                    if (isset($_GET['title']) && !empty($_GET['title'])) {
                        $titre = $_GET['title'];
                    }
                    if (isset($_GET['content']) && !empty($_GET['content'])) {
                        $contenu = $_GET['content'];
                    }
                
                    element('div','container', ''); // On crée un élément HTML pour accueillir les données (mvc/vue/functions.php : ligne 4)
                    ?>
                        <script> // On lance un script pour créer un DOM temporaire.
                            let titre = <?php echo json_encode($titre);?>;
                            let contenu = <?php echo json_encode($contenu);?>;
                            let data = <?php echo json_encode($data);?>; // Les données sont transmises de PHP à JS (variable 'data').

                            affichageArticle(data, titre, contenu); // On lance la fonction qui affiche les données recueillies.
                        </script>
                    <?php
                    break; // Fin du premier cas.

                case 'hidden':
                case '':
                    element('p','msgValidation', $_GET['title']); // On crée un élément HTML pour accueillir les données (mvc/vue/functions.php : ligne 4)
                    break; // Fin du second cas.
            }
        }
    }
?>