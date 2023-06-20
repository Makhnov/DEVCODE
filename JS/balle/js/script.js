let space = " ";

// function exo2() {

// let inscription = parseInt(prompt("Combien souhaitez vous inscrire d\'enfants (Maxi 5)?"));

// if (inscription > 5) {
//     inscription = 5;
// } 

// for (i = 1; i <= inscription; i++) {
//     switch(i) {
//         case 1:
//             window["age"+i] = parseInt(prompt("Quel age à votre premier enfant ?"));
//             break;
//         case 2:
//             if (inscription == 2) {
//                 window["age"+i] = parseInt(prompt("Quel age à votre second enfant ?"));
//             } else {
//                 window["age"+i] = parseInt(prompt("Quel age à votre deuxième enfant ?"));
//             }
//             break;
//         case 3:
//             window["age"+i] = parseInt(prompt("Quel age à votre troisième enfant ?"));
//             break;
//         case 4:
//             window["age"+i] = parseInt(prompt("Quel age à votre quatrième enfant ?"));
//             break;        
//         case 5:
//             window["age"+i] = parseInt(prompt("Quel age à votre cinquième enfant ?"));
//             break;
//     }
// } 

// let enfants = [];

// for (i = 1; i <= inscription; i++) {
//     if (window["age"+i] < 6) {
//         enfants.push("encore trop jeune pour être inscrit au club. Désolé.");
//     } else {

//         if (window["age"+i] < 8) {
//             enfants.push("dans la catégorie des Pousins !");
//         } else {

//             if (window["age"+i] < 10) {
//                 enfants.push("dans la catégorie des Pupilles !");
//             } else {

//                 if (window["age"+i] < 12) {
//                     enfants.push("dans la catégorie des Minimes !");
//                 } else {
                    
//                     if (window["age"+i] < 18) {
//                         enfants.push("dans la catégorie des Cadets !");
//                     } else {
//                         enfants.push("un adulte !");
//                     }
//                 }
//             }
//         }
//     }
// }

// for (i = 1; i <= inscription; i++) {
//     switch(i) {
//         case 1:
//             console.log("Votre premier enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             break;
//         case 2:
//             if (inscription == 2) {
//                 console.log("Votre second enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             } else {
//                 console.log("Votre deuxième enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             }
//             break;
//         case 3:
//             console.log("Votre troisième enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             break;
//         case 4:
//             console.log("Votre quatrième enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             break;        
//         case 5:
//             console.log("Votre cinquième enfant ("+window["age"+i]+"ans) est "+enfants[(i-1)])
//             break;
//     }
// }

// return enfants;
// }


/* --------------------------------------- EXO3 --------------------------------------- */

// function exo3() {

//     let child = [];
//     let categorie = [];
//     let résultat = [];
//     let temp;
//     let tempR = "";
//     function getChild() {

//         let inscription = parseInt(prompt("Combien souhaitez vous inscrire d\'enfants (Maxi 5)?"));

//         if (inscription > 5) {
//             inscription = 5;
//         } 


//         for (i = 1; i <= inscription; i++) {
//             switch(i) {
//                 case 1:
//                     temp = parseInt(prompt("Quel age à votre premier enfant ?"));
//                     child.push(temp);
//                     break;
//                 case 2:
//                     if (inscription == 2) {
//                         temp = parseInt(prompt("Quel age à votre second enfant ?"));
//                         child.push(temp);
//                     } else {
//                         temp = parseInt(prompt("Quel age à votre deuxième enfant ?"));
//                         child.push(temp);
//                     }
//                     break;
//                 case 3:
//                     temp = parseInt(prompt("Quel age à votre troisième enfant ?"));
//                     child.push(temp);
//                     break;
//                 case 4:
//                     temp = parseInt(prompt("Quel age à votre quatrième enfant ?"));
//                     child.push(temp);
//                     break;        
//                 case 5:
//                     temp = parseInt(prompt("Quel age à votre cinquième enfant ?"));
//                     child.push(temp);
//                     break;
//             }
//         }
//         console.log(child);
//     }

//     function getCategorie() {

//         for (i = 1; i <= child.length; i++) {

//             if (child[(i-1)] < 6) {
//                 categorie.push("encore trop jeune pour être inscrit au club. Désolé.");
//             } else {

//                 if (child[(i-1)] < 8) {
//                     categorie.push("dans la catégorie des Pousins !");
//                 } else {

//                     if (child[(i-1)] < 10) {
//                         categorie.push("dans la catégorie des Pupilles !");
//                     } else {

//                         if (child[(i-1)] < 12) {
//                             categorie.push("dans la catégorie des Minimes !");
//                         } else {
                            
//                             if (child[(i-1)] < 18) {
//                                 categorie.push("dans la catégorie des Cadets !");
//                             } else {
//                                 categorie.push("un adulte !");
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//         console.log(categorie);
//     }

//     getChild();
//     getCategorie();

//     for (i = 1; i <= child.length; i++) {            
//         switch(i) {
//             case 1:
//                 tempR = "\n"+"Votre premier enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//             case 2:
//                 if (child.length == 2) {
//                     tempR = "\n"+"Votre second enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                     résultat.push(tempR);
//                 } else {
//                     tempR = "\n"+"Votre deuxième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                     résultat.push(tempR);
//                 }
//                 break;
//             case 3:
//                 tempR = "\n"+"Votre troisième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//             case 4:
//                 tempR = "\n"+"Votre quatrième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;        
//             case 5:
//                 tempR = "\n"+"Votre cinquième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//         }
//     }

//     alert(résultat);
// }


/* --------------------------------------- EXO3 BIS--------------------------------------- */



// function exo3Bis() {

//     let child = [];
//     let categorie = [];
//     let résultat = [];
//     let temp;
//     let tempR = "";

//     function getChild() {

//         let inscription = parseInt(prompt("Combien souhaitez vous inscrire d\'enfants (Maxi 5)?"));

//         if (inscription > 5) {
//             inscription = 5;
//         } 


//         for (i = 1; i <= inscription; i++) {
//             switch(i) {
//                 case 1:
//                     temp = parseInt(prompt("Quel age à votre premier enfant ?"));
//                     child.push(temp);
//                     break;
//                 case 2:
//                     if (inscription == 2) {
//                         temp = parseInt(prompt("Quel age à votre second enfant ?"));
//                         child.push(temp);
//                     } else {
//                         temp = parseInt(prompt("Quel age à votre deuxième enfant ?"));
//                         child.push(temp);
//                     }
//                     break;
//                 case 3:
//                     temp = parseInt(prompt("Quel age à votre troisième enfant ?"));
//                     child.push(temp);
//                     break;
//                 case 4:
//                     temp = parseInt(prompt("Quel age à votre quatrième enfant ?"));
//                     child.push(temp);
//                     break;        
//                 case 5:
//                     temp = parseInt(prompt("Quel age à votre cinquième enfant ?"));
//                     child.push(temp);
//                     break;
//             }
//         }
//         console.log(child);
//     }

//     function getCategorie() {

//         for (i = 1; i <= child.length; i++) {

//             if (child[(i-1)] < 6) {
//                 categorie.push("encore trop jeune pour être inscrit au club. Désolé.");
//             } else {

//                 if (child[(i-1)] < 8) {
//                     categorie.push("dans la catégorie des Pousins !");
//                 } else {

//                     if (child[(i-1)] < 10) {
//                         categorie.push("dans la catégorie des Pupilles !");
//                     } else {

//                         if (child[(i-1)] < 12) {
//                             categorie.push("dans la catégorie des Minimes !");
//                         } else {
                            
//                             if (child[(i-1)] < 18) {
//                                 categorie.push("dans la catégorie des Cadets !");
//                             } else {
//                                 categorie.push("un adulte !");
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//         console.log(categorie);
//     }

//     getChild();
//     getCategorie();

//     for (i = 1; i <= child.length; i++) {            
//         switch(i) {
//             case 1:
//                 tempR = "\n"+"Votre premier enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//             case 2:
//                 if (child.length == 2) {
//                     tempR = "\n"+"Votre second enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                     résultat.push(tempR);
//                 } else {
//                     tempR = "\n"+"Votre deuxième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                     résultat.push(tempR);
//                 }
//                 break;
//             case 3:
//                 tempR = "\n"+"Votre troisième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//             case 4:
//                 tempR = "\n"+"Votre quatrième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;        
//             case 5:
//                 tempR = "\n"+"Votre cinquième enfant ("+child[(i-1)]+"ans) est "+categorie[(i-1)];
//                 résultat.push(tempR);
//                 break;
//         }
//     }

//     alert(résultat);
// }


/* --------------------------------------- EXO3 TER--------------------------------------- */


// function calc() {

//     function getNumber() {
//         let tab = [];
//         tab.push(parseInt(prompt("Choisissez un nombre :")));
//         tab.push(parseInt(prompt("Choisissez en un autre :")));
//         console.log(tab);
//         return tab;
//     }

//     function getSomme(x, y) {

//         let somme = x + y;
//         return somme;
//     }

//     function getProduit(x, y) {

//         let produit = x * y;
//         return produit;
//     }

//     function getMoyenne(x, y) {

//         let moyenne = (x + y) / 2;
//         return moyenne;
//     }

//     function getReste(x, y) {

//         let reste = x%y;
//         return "\n"+"Le reste de"+space+x+space+"que divise"+space+y+space+"est de :"+space+reste;
//     }

//     let tabTemp = getNumber();
//     a = tabTemp[0];
//     b = tabTemp[1];
//     let resultat = [];
//     resultat.push("\n"+"La somme de ces deux nombres est de :"+space+getSomme(a,b));
//     resultat.push("\n"+"Le produit de ces deux nombres est de :"+space+getProduit(a,b));    
//     resultat.push("\n"+"La moyenne de ces deux nombres est de :"+space+getMoyenne(a, b));
//     resultat.push(getReste(a,b));
//     alert(resultat);
// }

/* --------------------------------------- EXO4 --------------------------------------- */


// class Complexe {

//     constructor(nom, r, i) {    
//         this.nom = nom;
//         this.r = r;
//         this.i = i;
//     }

//     getNom() {
//         return this.nom;
//     }

//     getR() {
//         return this.r;
//     }

//     getI() {
//         return this.i;
//     }

//     setNom(nom) {
//         this.nom = nom;
//     }

//     setR(r) {
//         this.r = r;
//     }

//     setI(i) {
//         this.i = i;
//     }

//     toString() {
//         return ("La forme algébrique de"+space+this.nom+space+"est :"+space+this.r+space+"+"+space+this.i+"*i.")
//     }

//     addition(y) {
//         return ("La somme algébrique de"+space+this.nom+space+"plus"+space+y.nom+space+"est :"+(this.r + y.r)+space+"+"+space+(this.i + y.i)+"*i.");
//     }
// }

// let im1 = new Complexe("im1", 4, 2);
// let im2 = new Complexe("im2", 5, 1);
// let im3 = new Complexe("im3", 8, 4);

// alert(im1);
// alert(im2);
// alert(im3);

// alert(im1.addition(im2));

/* --------------------------------------- EXO4 BIS--------------------------------------- */

// class Rectangle {

//     constructor(long, larg) {
//         this.long = long;
//         this.larg = larg;
//     }

//     getLong() {
//         return this.long;
//     }

//     getLarg() {
//         return this.long;
//     }

//     setLong(long) {
//         this.long = long;
//     }

//     setLarg(larg) {
//         this.larg = larg;
//     }

//     toString() {
//         return ("La longueur est de :"+space+this.long+"\n"+"La largeur est de :"+space+this.larg)
//     }

//     getPerimetre() {
//         return 2*(parseInt(this.long) + parseInt(this.larg));
//     }

//     getSurface() {
//         return (parseInt(this.long) * parseInt(this.larg));
//     }

// }

// let rec1 = new Rectangle (10, 5);
// let rec2 = new Rectangle (7, 6);

// rec1.setLarg(prompt("Veuillez entrer une nouvelle largeur pour rec1 :"));
// alert(rec1);
// alert(rec2);
// alert(rec1.getSurface());
// alert(rec2.getPerimetre());

/* --------------------------------------- EXO4 TER--------------------------------------- */

// let ch1 = "Une chaine de caractère";
// let ch2 = new String (4,3);

// alert("type de ch1 :"+space+typeof(ch1)+"\nType de ch2 :"+space+typeof(ch2));

/* --------------------------------------- EXO4 QAR--------------------------------------- */

// function testString(str1, str2) {
//     if (str1.includes(str2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let ch1 = "coucou j'aime les patates";
// let ch2 = "patates";
// let ch3 = "pommes de terre";

// alert(ch1+"\n"+ch2+"\n"+ch3);
// alert(tostring(ch1)+"\n"+tostring(ch2)+"\n"+tostring(ch3))
// alert(testString(ch1, ch2));
// alert(testString(ch1, ch3));

/* --------------------------------------- EXO CASSE BRIQUE --------------------------------------- */

let ballX = 0;
let ballY = 0;
let dr = false;
let ga = false;
let ha = false;
let ba = false;

function droite() {

    dr = true;
    ga = false;

    setTimeout(function() {  
        ballX += 1;
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";

        if (ballX < 48 && dr) {           
        droite();             
        }

    }, 200)
}

function gauche() {

    ga = true;
    dr = false;

    setTimeout(function() {  
        ballX -= 1;
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";

        if (ballX > -48 && ga) {           
        gauche();             
        }

    }, 200)
}

function haut() {

    ha = true;
    ba = false;

    setTimeout(function() {  
        ballY -= 1;
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";

        if (ballY > -48 && ha) {           
        haut();             
        }

    }, 200)
}

function bas() {

    ba = true;
    ha = false;

    setTimeout(function() {  
        ballY += 1;
        document.getElementById("ball").style.transform = "translate(" + ballX + "vw, "+ ballY +"vh)";

        if (ballY < 48 && ba) {           
        bas();             
        }

    }, 200)
}

function stop() {
    ga = false;
    dr = false;
    ha = false;
    ba = false;
}

// game();
// document.getElementById("start").addEventListener("keypress", game);


/* --------------------------------------- EXO ARRAY --------------------------------------- */

// let semaine = ['lun', 'mra', 'mer', 'jeu', 'ven', 'sam'];
// alert(semaine);
// alert("Le nouveau tableau possède"+space+semaine.push('dim')+space+"éléments.\n"+semaine);
// alert("On remplace :"+space+semaine.splice(1,1,'mar')+space+"par :"+space+semaine[1]+"\nNouveau tableau :"+space+semaine);
// document.write(semaine.length);
// alert("La troisième valeur du tableau est :"+space+semaine[2]);

/* --------------------------------------- EXO DATE --------------------------------------- */

