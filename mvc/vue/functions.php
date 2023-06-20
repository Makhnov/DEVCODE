<?php // <!-------------------------------- FONCTIONS D'AFFICHAGE --------------------------------> //
    
    // CREATION D'UN ELEMENT (tag & id en arguments) //
    function element($tag, $id, $msg) {
        if ($msg === '') {
            echo '<'.$tag.' id="'.$id.'"></'.$tag.'>';
        } else {
            echo '<div id="msgIcon"></div><'.$tag.' id="'.$id.'">Votre nouvel article : <font color="#1b36df">'.$msg.'</font> a bien été ajouté à la base de données.</'.$tag.'>';
        }
    }

    // CREATION D'UN FORMULAIRE (Methode POST) D'AJOUT D'ARTICLES //
    function formulaire() {
        ?>
            <form action="/TRASHCODE/mvc/controller/index.php?action=insert&database=articles&table=article" method="POST" enctype="multipart/form-data">
                <h2>Articles</h2>
                <fieldset>
                    <legend>Ajouter un article</legend>
                    <p>
                        <input type="text" name="titre" id="nom_article" value="<?php $titre ?>">
                        <label for="nom_article">Entrez un titre :</label>
                    </p>
                    <p>
                        <textarea id="contenu_article" name="contenu" rows="10" cols="40"><?php $contenu ?></textarea>
                        <label for="contenu_article">Entrez un contenu :</label>
                    </p>
                    <div>
                        <input id="submitArticle" type="submit"value="Ajouter">
                        <div onclick="ajoutListe(this)">Voir</div>
                    </div>
                </fieldset>

                <?php
                    formContainer(); // (mvc\controller\functions.php ligne 42)
                ?>
            </form>
        <?php
    }
?>

