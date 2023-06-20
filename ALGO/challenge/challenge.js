let space = " ";
let br = "\n";

// Somme d'entiers //

// function SE2E (a,b)
// {
   
//     if ( a > b)
//     {
//         return ((a*(a+1)/2)-(b*(b+1)/2)+b);        
//     }
//     else
//     {
//         return ((b*(b+1)/2)-(a*(a+1)/2)+a);
//     }
// }

// console.log(SE2E(445,566));

// NB DE MOTS //

// function NDM(str)
// {
//     console.log(str.match(/e/g).length);    
// }

// NDM("zaeazeazeazeae");

// S'il est actuellement minuit (00:00:00), 
// quelle heure sera-t-il dans 15384 secondes ? 
// La réponse doit être de la forme : 'XX:XX:XX'.

// function QHEI(a)

// {
//     let sec = a%60;
//     a = Math.trunc(a/60);
//     let min = a%60;    
//     let heure = Math.trunc(a/60);
//     console.log(heure + ":" + min + ":" + sec);    
// }

// QHEI(58346);



// Quel est le nombre en position 25 dans cette liste 
// (attention, le premier est en position 0) ?

// function positionN (a,str)
// {
//     console.log(str[a]);
// }

// positionN(,);



//

// function entierSauf3 (n)

// {
//     let total = 0;
//     for (let i = 0; i <= n; i++) 
//     {
//         if (i%3 != 0) 
//         {
//             total += i;
//         }
//     }
//     return total;
// }

// console.log(entierSauf3(968));


// Combien y a-t-il de voyelles ('a','e','i','o','u','y') dans le texte suivant ?

// function NDV(str)
// {
//     console.log(str.match(/ a| e| i| o| u| y/gi).length);
// }

// NDV("");




// function nombreDeMots(n,str) 
// {
//     let nPrem = "";
//     let strMots = str.split(' ');
//     console.log(strMots);
//     for (let i = 0; i < n; i++)
//     {
//         nPrem = nPrem+","+strMots[i];
//         console.log(nPrem);       
//     }
// }

// quelle est la lettre la plus utilisée ?

// function lettre(str)

// {
//     let lettreMax = "a";
//     let occurenceMax = 0; 

//     for (let i = 0; i < str.length; i++)
//     {
//         let lettre = str.charAt(i);
//         let tab = str.split(lettre);
//         let lettreOccurence = tab.length-1;;
//         console.log(lettre)
//         console.log(lettreOccurence);
        
//         if (lettreOccurence > occurenceMax && lettre != " ")
//         {
//             occurenceMax = lettreOccurence;
//             lettreMax = lettre;
//         }
//     }
    
//     console.log(lettreMax+" : "+occurenceMax);
// }

// lettre("");

// console.log('a'.charCodeAt(0));
// console.log(String.fromCharCode(97));



// Nous sommes lundi matin. Un escargot est au fond d'un puits de 274 mètres. 
// Tous les jours, il monte de 8 mètres. Toutes les nuits, il redescend de 3 mètres.
// Quel jour l'escargot sortira-t-il du puits ?

// function puits(jourDepart,h,m,d)
// {

// let semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
// let jour = 0;
// let esc = m;
// console.log(esc);

//     while (esc < h)
//     {   
//         esc-=d;
//         console.log(esc);
        
//         jour++;        
//         esc+=m;
//         console.log(esc);

//     }

// console.log("jours : "+jour);
// console.log(semaine[(semaine.indexOf(jourDepart) + jour)%7]);
// }

// puits("jeudi",181,8,7);


// var re = new RegExp(yyy, 'g');
// xxx.match(re);

// function nombreAbsent(str) 
// {
//     let stop = true;
//     let result = 0;
//     let strN = str.split(' '); 
    
//     for (let i = 1; i < strN.length && stop; i++)
//     {        
//         i = i.toString();
                
//         if (strN.indexOf(i) == "-1") 
//         {
//             result = i;
//             stop = false;
//         }          
//     }
//     console.log(result);
// }

// nombreAbsent("");


// Quelle est la carte manquante dans ce jeu ?
// ['5 de trèfle', '9 de pique', 'Dame de coeur', 'Roi de carreau', etc.]


// function carteManquante(str)
// {
//     let couleur = [' de pique', ' de coeur', ' de carreau', ' de trèfle'];
//     let valeur = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi'];
//     let stop = true;
//     let carte = "";

//     for (let i = 0; i < couleur.length && stop; i++) 
//     {
//         for (let j = 0; j < valeur.length && stop; j++)
//         {
//             carte = valeur[j]+couleur[i];

//             if (str.indexOf(carte) == "-1")
//             {
//                 stop = false;
//             }
//         }
//     }

//     console.log(carte);
// }

// carteManquante();


// Fibonacci

// function fibo(n)
// {

// let enneMoinsDeux = 1;
// let enneMoinsUn = 0;
// let enneTemp = 0;

// for (let i = 0; i < n-2; i++) 
// {   
//     enneTemp = enneMoinsUn;
//     enneMoinsUn += enneMoinsDeux;
//     enneMoinsDeux = enneTemp;
// }
// console.log(enneMoinsDeux+enneMoinsUn)
// }

// fibo(38);


// Quels sont les 42 derniers mots de ce texte ?

// function lastWord(n,str)
// {
//     let strN = str.split(' ');
//     let strR = "";
//     console.log(strN.length);
//     console.log(strN[strN.length-n]);
//     for (let i = (strN.length-n); i < strN.length; i++)
//     {
//         strR=strR+" "+strN[i];
//     } 
//     console.log(strR.substring(1));
// }

// lastWord(,"");

// Un matin, un escargot est au fond d'un puits de 830 mètres. Tous les jours, il monte de 5 mètres. 
// Toutes les nuits, il redescend de 2 mètres. Au bout de combien de jour parviendra-t-il à sortir du puits ?

// function puits(jourDepart,h,m,d)
// {
//     let semaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
//     let jour = 1;
//     let esc = m;

//     while (esc < h)
//     {   
//         esc-=d;
//         jour++;        
//         esc+=m;
//     }

//     console.log("jours : "+jour);
//     console.log(semaine[(semaine.indexOf(jourDepart) + jour)%7]);
// }

// puits("dimanche",10,10,1);

// Le nombre disparu
// Quel nombre est manquant dans la liste ci-dessous ?

// La réponse à ce challenge est la liste obtenue en doublant chaque élément de celle-ci :

// function doubleTab(tab)
// {
//     let tabDouble = [];
//     let iMax = tab.length;

//     for (let i = 0; i < iMax; i++) 
//     {
//         tabDouble.push(tab[i]*2);
//     }
// console.log(tabDouble);
// }

// doubleTab();

//Dans ce challenge, il faut garder seulement les nombres qui sont supérieurs ou égaux à 6 :

// function supSix(tab)
// {
//     let tabSup ="[";
//     for (let i = 0; i < tab.length; i++) 
//     {
//         if (tab[i] > 5)
//         {
//             tabSup = tabSup + tab[i] + ", ";
//         }
//     }

//     console.log(tabSup.substring(0,tabSup.length-2)+"]");
// }


// supSix();

// Pour la réponse à ce challenge, vous devez ne conserver que les nombres qui ont 2 chiffres

// function deuxChiffres(tab)
// {
//     let tabDeux ="[";
//     for (let i = 0; i < tab.length; i++) 
//     {
//         if (tab[i] > 9 && tab[i] < 100)
//         {
//             tabDeux = tabDeux + tab[i] + ", ";
//         }
//     }

//     console.log(tabDeux.substring(0,tabDeux.length-2)+"]"); 
// }

// deuxChiffres();

// Échange de bases

// En sortant de votre base martienne, vous croisez un extraterrestre qui vous donne la réponse : 1212.

// Vrai ou faux niveau 2

// C'est la même chose, mais en plus grand !

// function vraiOuFaux(str)
// {
//     let engStr = "";
//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i] = "(")
//         {

//         }
//     }
// }

// let strEng ="";

// function reecrire(str)
// {
//     let strR = str.split(' ');

    
//     for (let i = 0; i < strR.length; i++)
//     {
//         if (strR[i].indexOf("Vrai") != -1)
//         {
//             strEng = strEng+strR[i].replace('Vrai', 'true');
//         }
//         else if (strR[i].indexOf("Faux") != -1)
//         {
//             strEng = strEng+strR[i].replace('Faux', 'false');
//         }
//         else if (strR[i].indexOf("NON") != -1)
//         {
//             strEng = strEng+strR[i].replace('NON', '!');
//         }
//         else if (strR[i].indexOf("OU") != -1)
//         {
//             strEng = strEng+strR[i].replace('OU', '||');
//         }
//         else if (strR[i].indexOf("ET") != -1)
//         {
//             strEng = strEng+strR[i].replace('ET', '&&');
//         }
//     }     
  
//     console.log(strEng);

// }

// reecrire("((NON (NON ((((Vrai ET Faux) ET ((Vrai OU (NON (Vrai ET (NON (Vrai ET Vrai))))) OU Faux)) ET (((Faux OU Faux) OU Vrai) OU (NON ((Faux ET Faux) ET (NON Vrai))))) ET ((NON (NON (NON Faux))) OU (Faux ET Vrai))))) OU ((((Faux OU (Vrai OU Faux)) ET Faux) ET Vrai) ET Vrai))");

// console.log(((!(!((((true&&false)&&((true||(!(true&&(!(true&&true)))))||false))&&(((false||false)||true)||(!((false&&false)&&(!true)))))&&((!(!(!false)))||(false&&true)))))||((((false||(true||false))&&false)&&true)&&true)));

// (((NON (((((Faux OU Vrai) OU Faux) OU (NON Faux)) OU (Faux OU (Vrai ET Vrai))) OU (NON (((NON Vrai) OU (Faux ET Faux)) OU Vrai)))) OU (NON (Faux ET Faux))) OU (NON (NON ((Vrai ET ((NON Faux) OU (((NON (NON Faux)) ET (Faux ET Faux)) ET Faux))) ET (NON Faux)))))

/**/

// Nombre de chemins

// Aux États-Unis, les rues sont très souvent quadrillées. 
// Il est alors facile de trouver un plus court chemin entre deux intersections, 
// mais il n'y en a rarement qu'un !
// Par exemple, dans l'image ci-dessous dans laquelle on voulait se déplacer d'une colonne et de deux lignes, 
// 3 chemins ont été trouvés 

// function factorielle(n) {
//     if(n<2) {
//         return 1;
//     }
//     return n*factorielle(n-1);
// }

// console.log(factorielle(10));


/* ---- Q-SUITE ENONCE---- */

// Q(1)=1
// Q(2)=1
// Pour n>2, Q(n)=Q(n-Q(n-1))+Q(n-Q(n-2))
// n= 4 : Q4 = Q(4 - Q3) + Q(4 - Q2)
// n = 3 : Q3 = 2

// L'entrée du problème est une séquence contenant 2 valeur (i,j), 
// avec i strictement inférieur à j. 
// Vous devez répondre par un entier contenant la somme de tous les termes 
// Q(i)+...+Q(j) 

/* ---- Q-SUITE //ENONCE ---- */

/* ---- QSUITE CODE ---- */

// let qn;
// let result = 0;
// let q = [0, 1, 1, 2];

// function Q(a, b) {
    
//     if (b > 0) {

//         for (i = 4; i < (b + 1); i++) {
//             qn = q[i - q[i-1]] + q[i - q[i-2]];
//             q.push(qn); 
//         }

//         for (i = a; i < (b + 1); i++) {
//             result += q[i];
//             console.log(q[i]);
//         }

//         return result;

//     } else {

//         if (a > 3) {
//             for (i = 4; i < (a + 1); i++) {
//                 qn = q[i - q[i-1]] + q[i - q[i-2]];
//                 q.push(qn); 
//             }
//             return q[(q.length -1)];
//         } else {
//             return q[a];
//         }           
//     } 
// }

// console.log(Q(1583, 1697));

/* ---- QSUITE //CODE ---- */

/* ---- L'ESCARGOT COURAGEUX ENONCE ---- */

// Un escargot veut gravir une tour de 324 mètres. Le premier jour, il monte de x centimètres. 
// La première nuit, il glisse (vers le bas) de y centimètres. 
// Chaque jour supplémentaire, il monte de 2 centimètre(s) de moins que la journée précédente. 
// En revanche, la nuit il glisse toujours de y centimètres.

// Dans la région où est située cette tour, il pleut toutes les 5 nuits. 
// Lorsque ça se produit, au bout de la nuit, l'escargot se retrouve au même endroit que 48 heures auparavant.

// En appelant le jour 0 celui de son départ (il part le matin), 
// et sachant qu'il vient de pleuvoir la nuit dernière, quel jour l'escargot arrive-t-il en haut de la tour ?

// Pour vérifier la compréhension de l'énoncé, voici le début du parcours de l'escargot, pour x=1330 et y=300 

// Fin du jour 0 : altitude=          1330 cm
// Fin de la nuit 0 : altitude=1030 cm
// Fin du jour 1 : altitude=          2358 cm
// Fin de la nuit 1 : altitude=2058 cm
// Fin du jour 2 : altitude=          3384 cm
// // Fin de la nuit 2 : altitude=3084 cm
// Fin du jour 3 : altitude=          4408 cm
// Fin de la nuit 3 : altitude=4108 cm
// Fin du jour 4 : altitude=          5430 cm
// // Fin de la nuit 4 : altitude=3084 cm
// Fin du jour 5 : altitude=          4404 cm
// Fin de la nuit 5 : altitude=4104 cm
// Fin du jour 6 : altitude=          5422 cm
// Fin de la nuit 6 : altitude=5122 cm
// Fin du jour 7 : altitude=          6438 cm
// // Fin de la nuit 7 : altitude=6138 cm
// Fin du jour 8 : altitude=          7452 cm
// Fin de la nuit 8 : altitude=7152 cm
// Fin du jour 9 : altitude=          8464 cm
// // Fin de la nuit 9 : altitude=6138 cm

/* ---- ESCARGOT ENONCE// ---- */

/* ---- ESCARGOT CODE ---- */

// function escargot(x, y) {

//     let echec = "L'escargot n'a pas réussi à atteindre le sommet de la tour...";
//     let succes = "L'escargot est arrivé en haut de la tour en";
//     let apogee = (x - y)/2;
//     let escargot = x;
//     let jour = 0;
//     let dna = 0;

//     for (i = 0; i < apogee; i++) {

//         if (escargot > 32400) {
//             return succes+space+jour+space+"jours"+br+"Apogeé :"+space+apogee;
//         }

//         console.log ("Altitude à la fin de la journée"+space+i+space+":"+space+escargot);

//         if ((jour + 1)%5 == 0) {
//             escargot = dna;
//             console.log("Une nuit pluvieuse...")
//         } else if ((jour + 3)%5 == 0) {
//             escargot -= y;
//             dna = escargot;
//             console.log("Une nuit comme les autres...")
//         } else {
//             escargot -= y;
//             console.log("Une nuit comme les autres...")
//         }
//         console.log ("Altitude à la fin de la nuit"+space+i+space+":"+space+escargot);

//         jour++;
//         escargot += (x - (2 * jour));
//         console.log("Une journée comme les autres...") 
//     }

//     return echec+space+"("+Math.trunc(escargot/100)+space+"mètres)"+br+"Apogeé :"+space+apogee;
// }

// console.log(escargot(859, 400));


/* ---- ESCARGOT CODE ---- */
