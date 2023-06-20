<?php // <!-------------------------------- INTERACTIONS BDD --------------------------------> //

    // RECUPERATION DES DONNES D'UNE TABLE SPECIFIQUE //
    function get($db, $table){
        try {
            $PDO = connect($db, 'root', '', true); // On se connecte à la BDD (plus d'infos : mvc/model/connect.php). 
            $data = $PDO->query("SELECT * FROM `$table`"); // On lance une requête pour sélectionner tous les éléments d'une table donnée.
            $data = $data->fetchAll(); // On récupère la totalité de ces éléments sous la forme d'un tableau associatif.
            return $data; // On renvoit ce tableau et on termine la connexion.
        }

        
        // ON RECUPERE LES EXCEPTIONS LEVEES DANS LE TRY // 
        // Dans notre instance les erreurs sont considérées comme des exceptions (cf. mvc/model/connect.php lignes 12-13 ).
        catch(Exception $exc) { 
            return $exc->getMessage(); // On renvoit le message d'erreur.
            die(); // On arrête l'exécution php directement après avoir envoyé le message d'erreur (mode 'développement').
        }
    }

    // INSERTION DE DONNES DANS UNE TABLE SPECIFIQUE //
    function insert($db, $table) {
        try {
            $PDO = connect($db, 'root', '', true);
            // On prépare notre requête avec deux variables : 'titre' et 'contenu'.
            $insert = $PDO->prepare("
                INSERT INTO `$table`(nom_article, contenu_article)
                VALUES (:titre, :contenu)
            ");

            // On définit les équivalences des paramètres de notre requête.
            $insert->bindParam(':titre', $nom_article);
            $insert->bindParam(':contenu', $contenu_article);

            // Lors de la validation du formulaire (Méthode POST) on définit les valeurs des paramètre ci-dessus.
            if (isset($_POST['titre']) && (isset($_POST['contenu']))) {
                $nom_article = $_POST['titre'];
                $contenu_article = $_POST['contenu'];
            }

            $insert->execute(); // On exécute la requête préparée.
            $insert->closeCursor(); // On clot la connexion avec la BDD.
            return $nom_article; // On renvoit le titre de l'article ajouté.
        }

        catch(Exception $exc) {
            return $exc->getMessage();
            die();
        }
    }
?>

