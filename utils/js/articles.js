// const body = document.getElementsByTagName('body')[0];
// const footer = document.getElementsByTagName('footer')[0];

console.log('COUCOU'); //On dit bonjour, c'est important d'être poli, même pour un dev.

function ajoutListe(e) {
    let titre = e.parentNode.parentNode.children[1].children[0].value;
    let contenu = e.parentNode.parentNode.children[2].children[0].value;
    console.log(titre);
    console.log(contenu);
    window.location = "./index.php?action=ajout&list=visible&title="+titre+"&content="+contenu+"&database=articles&table=article"
}

function affichageArticle(data, titre, contenu) {
    const container = document.getElementById('container');

    data.forEach( function(e) {
        section(e);
        span(e);
        h3(e);
        p(e);
    });

    if (titre !== '') {
        let title = document.getElementById('nom_article');
        title.value = titre;
    }

    if (contenu !== '') {
        let content = document.getElementById('contenu_article');
        content.value = contenu;
    }
}

function section(data) {
    let bloc = document.createElement('section');
    container.appendChild(bloc);
}

function span(data) {
    let id = document.createElement('span');
    id.textContent = data[0];
    // span.setAttribute('onclick', 'edit(this)');
    container.lastChild.appendChild(id);
}

function h3(data) {

    let titre = document.createElement('h3');
    titre.textContent = data[1];
    // h3.setAttribute('onclick', 'edit(this)');
    container.lastChild.appendChild(titre);
}

function p(data) {

    let contenu = document.createElement('p');
    contenu.textContent = data[2];
    // p.setAttribute('onclick', 'edit(this)');
    container.lastChild.appendChild(contenu);

}