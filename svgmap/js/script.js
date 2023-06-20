//Démarrage
function init() {
    resize();
    logs();
    clear('all');
}

function logs() {
    console.log('coucou');
}

function clear(index) {
    switch (index) {
        case 1:
        case 'texte':
            denomination.textContent = '';
            code.textContent = '';
            population.textContent = '';
            interco.textContent = '';
            break;
        case 2:
        case 'radio':
            epciRadio.checked = false;
            epciRadio.dispatchEvent(new Event('change'));
            communesRadio.checked = false;
            communesRadio.dispatchEvent(new Event('change'));
            break;
        case 3:
        case 'zoom':
            carte.style.transform = 'scale(1)';
            container.scrollLeft = 0;
            container.scrollTop = 0;
            scale = 1;
            break;
        case 4:
        case 'all':
            denomination.textContent = '';
            code.textContent = '';
            population.textContent = '';
            interco.textContent = '';
            epciRadio.checked = false;
            epciRadio.dispatchEvent(new Event('change'));
            communesRadio.checked = false;
            communesRadio.dispatchEvent(new Event('change'));
            carte.style.transform = 'scale(1)';
            container.scrollLeft = 0;
            container.scrollTop = 0;
            scale = 1;
            break;
    }
}

//Variables 
const carte = document.querySelector('.carte');
const container = document.querySelector('main.container');
const svg = document.getElementById('haute_garonne');

const ggs = document.querySelectorAll('main.container g');
const paths = document.querySelectorAll('main.container path');

const denomination = document.getElementById('denomination');
const code = document.getElementById('code');
const labelCode = document.querySelector('label[for="code"]');
const population = document.getElementById('population');
const intercoBox = document.querySelector('div.comcom');
const interco = document.getElementById('comcom');

const epciRadio = document.getElementById("epci");
const communesRadio = document.getElementById("communes");

let scale = 1;

// Fonction de délai (debounce)
function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

// Fonction de redimensionnement
function resize() {

    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    const svgHeight = svg.height.baseVal.value;
    const svgWidth = svg.width.baseVal.value;

    const heightRatio = containerHeight / svgHeight;
    const widthRatio = containerWidth / svgWidth;

    const coverRatio = Math.max(heightRatio, widthRatio);
    const newHeight = svgHeight * coverRatio;
    const newWidth = svgWidth * coverRatio;

    svg.setAttribute('height', newHeight);
    svg.setAttribute('width', newWidth);
}

function zoom(bool, event) {
    if (bool) {
        if (event) { event.preventDefault(); }
        const scaleAmount = 0.1;
        let scaleDelta = 0;

        if (event.deltaY < 0) {
            // Zoom in
            scaleDelta = scaleAmount;
        } else {
            // Zoom out
            scaleDelta = -scaleAmount;
        }

        // Calculate new scale
        const newScale = Math.max(Math.min((scale + scaleDelta), 3), .7);

        // Get mouse position relative to the container
        const rect = container.getBoundingClientRect();
        const offsetX = event.clientX - rect.left + container.scrollLeft;
        const offsetY = event.clientY - rect.top + container.scrollTop;

        // Calculate percentages with respect to the SVG's actual size (which might be zoomed)
        const xPercent = offsetX / (carte.offsetWidth * scale);
        const yPercent = offsetY / (carte.offsetHeight * scale);

        // Update scaling
        carte.style.transform = `scale(${newScale})`;

        // Compute new scroll position: position to keep the cursor over the same point in the SVG
        const newScrollLeft = xPercent * carte.offsetWidth * newScale - event.clientX + rect.left;
        const newScrollTop = yPercent * carte.offsetHeight * newScale - event.clientY + rect.top;

        // Scroll
        container.scrollLeft = newScrollLeft;
        container.scrollTop = newScrollTop;

        scale = newScale;
    } else {
        clear('all');
    }
}

//LISTENERS
window.addEventListener('resize', debounce(resize, 300));

container.addEventListener('wheel', (event) => {
    zoom(true, event);
});

epciRadio.addEventListener("change", function () {
    container.classList.remove("vue_communes");
    container.classList.add("vue_epci");
    labelCode.textContent = 'SIREN :';
    intercoBox.style.display = "none";
    clear('texte');
});

communesRadio.addEventListener("change", function () {
    container.classList.remove("vue_epci");
    container.classList.add("vue_communes");
    labelCode.textContent = 'INSEE :';
    intercoBox.style.display = "flex";
    clear('texte');
});

ggs.forEach((g) => {
    g.addEventListener('mouseover', () => {
        // Obtenir l'état du bouton radio EPCI
        const epciSelected = document.getElementById('epci').checked;

        // N'exécuter l'action au survol que si EPCI est sélectionné
        if (epciSelected) {
            const nom = g.getAttribute('data-nom');
            const id = g.getAttribute('id');
            const pop = g.getAttribute('data-population');

            denomination.textContent = nom;
            code.textContent = id;
            population.textContent = pop;
        }
    });
});

// Installer un écouteur 'mouseover' sur chaque élément <path>
paths.forEach((path) => {
    path.addEventListener('mouseover', () => {
        // Récupérer les valeurs des attributs de données
        const nom = path.getAttribute('data-nom');
        const interco = path.parentNode.getAttribute('data-nom');
        const pop = path.getAttribute('data-population');
        const id = path.getAttribute('id');

        // Remplir le fieldset d'informations
        document.getElementById('denomination').textContent = nom;
        document.getElementById('comcom').textContent = interco;
        document.getElementById('population').textContent = pop;
        document.getElementById('code').textContent = id;
    });
});