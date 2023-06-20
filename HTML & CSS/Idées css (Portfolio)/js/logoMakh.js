let ResizeTimer;

function adjust() {
    let largeur = window.innerWidth / 2560;
    let hauteur = window.innerHeight / 1440;
    document.getElementById("arrierePlan").style.transform =
      "translate(-50%, -50%) scale(" + largeur + ", " + hauteur + ")";
}

window.onresize = function () {
  clearTimeout(ResizeTimer);
  ResizeTimer = setTimeout(function () {
    adjust();
  }, 500);
};
