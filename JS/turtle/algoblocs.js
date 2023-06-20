turtle.ct.fillStyle = "black";
turtle.ct.fillRect(0, 0, 600, 600);
//turtle.ct.borderRadius = "50%";
//document.getElementById("myDrawing").child.style.borderRadius = "50%";
setLineWidth(0.6 * 20);
changeColor(color.red);
setPos(300, 300);

// EXO A1 :

/*
setPos(300, 300);
setLineWidth(0.6 * 20);
setLineWidth(0.6 * 20);
forward(0.6 * 200);
faceRight();
forward(0.6 * 100);
*/

// EXO A2 :

/*
setPos(300, 300);
setLineWidth(0.6 * 20);
changeColor(color.yellow);
faceLeft();
forward(0.6 * 100);
faceDown();
forward(0.6 * 100);
faceRight();
forward(0.6 * 200);
faceUp();
forward(0.6 * 200);
*/

// EXO B1 :

/*
changeColor(color.green);
setPos(0.6 * 300, 0.6 * 300);

for (let i = 0; i < 4; i++) {
  faceRight();
  forward(0.6 * 100);
  faceDown();
  forward(0.6 * 100);
}
*/

// EXO B2 :

/*
changeColor(color.red);
setPos(0.6 * 100, 0.6 * 500);

for (let i = 0; i < 4; i++) {
  faceUp();
  forward(0.6 * 100);
  faceRight();
  forward(0.6 * 100);
  faceDown();
  forward(0.6 * 100);
  faceRight();
  forward(0.6 * 100);
}
*/

// EXO B21 :

/*
shiftColor(0.5);
setPos(0.6 * 600, 0.6 * 300);
faceRight();

for (let i = 0; i < 6; i++) {
  forward(0.6 * 200);

  for (let j = 0; j < 2; j++) {
    left(180 - 60);
    forward(0.6 * 100);
  }

  forward(0.6 * 100);
  right(180 - 120);
  forward(0.6 * 100);
  right(180 - 60);
  forward(0.6 * 100);
  up();
  right(180 - 60);
  forward(0.6 * 200);
  shiftColor(0.1);
  down();
}
*/

// EXO C8

/*
changeColor(color.green);
setPos(0.6 * 500, 0.6 * 950);
faceUp();

forward(0.6 * 400);
left(180 - 135);

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 3; j++) {
    changeColor(color.red);
    forward(0.6 * 200);
    left(180 - 60);
  }
  changeColor(color.yellow);
  forward(0.6 * 200);
  right(180 - 90);
}
*/

// EXO E10

/*
faceRight();
setPos(0.6 * 200, 0.6 * 600);

function croix() {
  down();

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      forward(0.6 * 50);
      right(180 - 90);
    }
    forward(0.6 * 50);
    left(180 - 90);
  }
  up();
}

for (let k = 0; k < 3; k++) {
  for (let l = 0; l < 2; l++) {
    croix();
    forward(0.6 * 200);
    faceUp();
  }

  faceRight();
  shiftColor(0.3);
}
*/

// EXO B17

/*
faceRight();
setPos(0.6 * 400, 0.6 * 500);
shiftColor(0.57);

for (let i = 0; i < 8; i++) {
  arcLeft(0.6 * 100, 180);
  left(180 - 60);
}
*/

// EXO B10

/*
faceRight();
setPos(0.6 * 100, 0.6 * 500);
changeColor(color.aqua);

for (let i = 0; i < 8; i++) {
  forward(0.6 * 200);
  right(180 - 45);
}
up();
changeColor(color.yellow);
forward(0.6 * 400);
down();
for (let i = 0; i < 8; i++) {
  forward(0.6 * 400);
  left(180 - 45);
}
up();
changeColor(color.fuchsia);
right(180 - 90);
forward(0.6 * 200);
down();
for (let i = 0; i < 8; i++) {
  forward(0.6 * 200);
  right(180 - 45);
}
*/

// EXO B20

/*
function appareil() {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      forward(0.6 * 200);
      arcLeft(0.6 * 100, 90);
    }
    forward(0.6 * 100);
  }
}

function goToLent() {
  up();
  arcRight(0.6 * 125, 180);
  down();
}

faceDown();
setPos(0.6 * 300, 0.6 * 400);
changeColor(color.aqua);
appareil();
faceRight();
forward(0.6 * 200);
goToLent();
arcRight(0.6 * 100, 360);
goToLent();
forward(0.6 * 200);
*/

// EXO B24

// VERSION LINEAIRE ALGOBLOC

/*
setPos(0.6 * 400, 0.6 * 400);
faceRight();

for (let i = 0; i < 8; i++) {
  forward(0.6 * 200);
  left(180 - 45);
}

forward(0.6 * 100);
changeColor(color.green);

for (let i = 0; i < 3; i++) {
  right(180 - 45);
  forward(0.6 * 200);
  left(180 - 45);
  forward(0.6 * 100);
}

forward(0.6 * 100);
right(180 - 90);
forward(0.6 * 50);

for (let i = 0; i < 2; i++) {
  left(180 - 90);
  forward(0.6 * 50);
}

right(180 - 90);
forward(0.6 * 100);

for (let i = 0; i < 3; i++) {
  forward(0.6 * 100);
  left(180 - 45);
  forward(0.6 * 200);
  right(180 - 45);
}
*/

// SOLUTION ALTERNATIVE

/*
var miroir = 1;

function demiSapin() {
  for (let i = 0; i < 3; i++) {
    right(180 - miroir * 45);
    forward(0.6 * 200);
    left(180 - miroir * 45);
    forward(0.6 * 100);
  }

  forward(0.6 * 100);
  right(180 - miroir * 90);
  forward(0.6 * 50);
  left(180 - miroir * 90);
  forward(0.6 * 25);

  if (miroir === 1) {
    miroir = -1;
  } else {
    miroir = 1;
  }
}

setPos(0.6 * 400, 0.6 * 400);
faceRight();
for (let i = 0; i < 8; i++) {
  forward(0.6 * 200);
  left(180 - 45);
}
forward(0.6 * 100);
changeColor(color.green);
demiSapin();
setPos(0.6 * 500, 0.6 * 400);
faceLeft();
demiSapin();
*/

turtle.ct.fillStyle = "#888888";
turtle.ct.fillRect(0, 0, 600, 600);

/*
for (let i = 0; i < 100; i++) {
  forward(0.6 * 8);
  shiftColor(0.01);
}
*/
/*
faceRight();
setLineWidth(0.6 * 7);
setPos(0.6 * 400, 0.6 * 900);

function polyedre(faces) {
  for (let i = 0; i < faces; i++) {
    forward(200 * 0.6);
    left(360 / faces);
  }
}

for (i = 3; i < 13; i++) {
  polyedre(i);
  shiftColor(0.1);
}
*/

shiftColor(0);
setLineWidth(0.6 * 40);
faceRight();

function psycho(taille) {
  setPos(0.6 * 500, 0.6 * (700 + 40 * taille));
  arcLeft(0.6 * (200 + 40 * taille), 360);
}

for (let i = 0; i < 8; i++) {
  psycho(i);
    shiftColor(0.2);
}


// setPos(100,300);
// faceRight();
// setLineWidth(10);

// for(let i = 0 ; i < 4 ; i++) {
//     forward(100);
//     shiftColor(0.2);
// }
/*
changeColor(color.red);
shiftColor(2 / 9);
forward(100);

changeColor(color.red);
shiftColor(-1 / 9);
forward(100);
*/

/*
shiftColor(0.66);
setPos(0.6 * 500, 0.6 * 980);
arcLeft(480 * 0.6, 360);

shiftColor(2 / 5);
setPos(0.6 * 500, 0.6 * 940);
arcLeft(440 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 900);
arcLeft(400 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 860);
arcLeft(360 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 820);
arcLeft(320 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 780);
arcLeft(280 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 740);
arcLeft(240 * 0.6, 360);

shiftColor(1 / 6);
setPos(0.6 * 500, 0.6 * 700);
arcLeft(200 * 0.6, 360);
*/
