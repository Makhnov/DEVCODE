let scale = 1;
let originalHeight;
let originalWidth;

function open() {
    // Récupérer la taille de l'écran
    const screenX = window.innerWidth;
    console.log(screenX);
    const screenY = window.innerHeight;
    console.log(screenY);

    // Taille de l'image
    const carteX = 12447;
    const carteY = 9397;

    // Calculer le facteur de transformation
    const scaling = 1 / Math.max(carteX / screenX, carteY / screenY);
    const newWidth = Math.round(scaling * carteX);
    const newHeight = Math.round(scaling * carteY);
    console.log(scaling);
    console.log(newWidth);
    console.log(newHeight);

    // Appliquer la transformation à la div contenant la carte
    const container = document.getElementById("container");

    container.style.width = `${newWidth}px`;
    container.style.height = `${newHeight}px`;
    originalHeight = newHeight;
    originalWidth = newWidth;

    const carteDiv = document.getElementById("carte");

    // Ajouter l'écouteur d'événements pour le clic de la souris
    carteDiv.addEventListener("click", handleImageClick);

    // Ajouter l'écouteur d'événements pour la molette de la souris
    carteDiv.addEventListener("wheel", handleImageWheel);

    // Changer l'icône du curseur en loupe
    carteDiv.style.cursor //= "zoom-in";
}

function handleImageClick(event) {
    event.preventDefault();

    const carteDiv = event.target;
    const boundingRect = carteDiv.getBoundingClientRect();
    const container = document.getElementById("container");

    const x = (event.clientX - boundingRect.left) / boundingRect.width;
    const y = (event.clientY - boundingRect.top) / boundingRect.height;

    console.log(`Clic sur l'image: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`);
    console.log(scale);

    if (scale === 1) {
        // Zoom in
        scale = 4;
        carteDiv.style.cursor = "zoom-out";
        carteDiv.style.width = `${originalWidth * scale}px`;
        carteDiv.style.height = `${originalHeight * scale}px`;
    } else {
        // Zoom out
        scale = 1;
        carteDiv.style.cursor = "zoom-in";
        carteDiv.style.width = `${originalWidth}px`;
        carteDiv.style.height = `${originalHeight}px`;
        carteDiv.style.transform = 'none';
        container.scrollTo(0, 0); // Réinitialiser le scroll
        return;
    }

    // Calculer la nouvelle position de scroll
    const scrollX = x * (carteDiv.offsetWidth - container.offsetWidth);
    const scrollY = y * (carteDiv.offsetHeight - container.offsetHeight);

    // console.log(carteDiv.offsetWidth);
    // console.log(container.offsetWidth);

    // Appliquer le nouveau zoom et scroll
    container.scrollTo(scrollX, scrollY);
    //console.log(scrollX);

}


function handleImageWheel(event) {
    event.preventDefault();

    const carteDiv = event.target;
    const boundingRect = carteDiv.getBoundingClientRect();
    const x = (event.clientX - boundingRect.left) / boundingRect.width;
    const y = (event.clientY - boundingRect.top) / boundingRect.height;

    const currentTransform = carteDiv.style.transform;

    if (currentTransform) {
        const scaleRegex = /scale\((.*)\)/;
        const match = currentTransform.match(scaleRegex);
        if (match && match.length > 1) {
            scale = parseFloat(match[1]);
        }
    }

    let scaleDelta = 0.1;
    if (scale >= 8) {
        scaleDelta = 0.5;
    } else if (scale >= 4) {
        scaleDelta = 0.25;
    } else if (scale >= 2) {
        scaleDelta = 0.2;
    } else if (scale >= 1.5) {
        scaleDelta = 0.15;
    }

    if (event.deltaY < 0) {
        // Zoom in
        scale *= (1 + scaleDelta);
        carteDiv.style.cursor = "zoom-out";
        //console.log('in');
    } else {
        // Zoom out
        //console.log('out');

        scale /= (1 + scaleDelta);
        if (scale <= 1) {
            scale = 1;
        } else {
            carteDiv.style.cursor = "zoom-in";
        }
    }

    const translateX = (-x + 0.5) * (scale - 1);
    const translateY = (-y + 0.5) * (scale - 1);
    const newTransform = `translate(${translateX * 100}%, ${translateY * 100}%) scale(${scale})`;

    carteDiv.style.transform = newTransform;

    const container = document.getElementById("container");
    const scrollX = x * (carteDiv.offsetWidth - container.offsetWidth);
    const scrollY = y * (carteDiv.offsetHeight - container.offsetHeight);

    container.scrollTo(scrollX, scrollY);
}
