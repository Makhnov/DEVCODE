let zoom = 1;

function zoomIn() {
  zoom += 0.1;
  document.getElementById("scene").style.transform =
    "translate(-50%, -50%) scale(" + zoom + ")";
}

function zoomOut() {
  zoom -= 0.1;
  document.getElementById("scene").style.transform =
    "translate(-50%, -50%) scale(" + zoom + ")";
}

function zoomInit() {
  if (innerWidth / innerHeight < 1.25) {
    let largeur = window.innerWidth / 2560;
    let hauteur = (window.innerWidth * (9 / 16)) / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
    zoom = hauteur;
  } else if (innerWidth / innerHeight > 2.5) {
    let largeur = (window.innerHeight * (16 / 9)) / 2560;
    let hauteur = window.innerHeight / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
    zoom = largeur;
  } else {
    let largeur = window.innerWidth / 2560;
    let hauteur = window.innerHeight / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
    zoom = largeur;
  }
}

let ResizeTimer;

function test() {
  if (innerWidth / innerHeight < 1.25) {
    let largeur = window.innerWidth / 2560;
    let hauteur = (window.innerWidth * (9 / 16)) / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
  } else if (innerWidth / innerHeight > 2.5) {
    let largeur = (window.innerHeight * (16 / 9)) / 2560;
    let hauteur = window.innerHeight / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
  } else {
    let largeur = window.innerWidth / 2560;
    let hauteur = window.innerHeight / 1440;
    document.getElementById("scene").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
  }
}

window.onresize = function () {
  clearTimeout(ResizeTimer);
  ResizeTimer = setTimeout(function () {
    test();
  }, 500);
};
