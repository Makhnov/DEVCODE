// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();
// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
function f2() {
    return(17);
}
// Utiliser la fonction f2 pour afficher 17 dans la console.
console.log(f2());
// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//On peut l'utiliser dans des opérations ( i.e. 4*f2() renverrait 68 contrairement à 4*f1() )


// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(double) {
    console.log(2*double);
    /*return 2*double;*/
}
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);
// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(rDouble) {
    return 2*rDouble;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);
// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(xSomme,ySomme) {
    console.log(xSomme+ySomme);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42,77);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(xSommeR,ySommeR) {
    return xSommeR+ySommeR;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log(f6(42,77));
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a += f6(42,77);
/*console.log(a);*/
// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7 (aEstIlPlusGrand,bEstIlPlusGrand) {
   return Math.max(aEstIlPlusGrand,bEstIlPlusGrand);
}
//ou
function f7 (xEstIlPlusGrand,yEstIlPlusGrand) {
    if (xEstIlPlusGrand >= yEstIlPlusGrand) {
        return xEstIlPlusGrand;
    } else {
        return yEstIlPlusGrand;
    }
}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
/*function f8 (iEstIlPlusGrand,jEstIlPlusGrand,kEstIlPlusGrand) {
    return Math.max(iEstIlPlusGrand,jEstIlPlusGrand,kEstIlPlusGrand);
 }
 //ou
 function f8 (iEstIlPlusGrand,jEstIlPlusGrand,kEstIlPlusGrand) {
     if (iEstIlPlusGrand >= jEstIlPlusGrand && iEstIlPlusGrand >= kEstIlPlusGrand) {
         return iEstIlPlusGrand;
     } else {
        if (jEstIlPlusGrand >= kEstIlPlusGrand) {
            return jEstIlPlusGrand;
        } else {
            return kEstIlPlusGrand;
        }
    }
 } */

 //ou 

 function f8 (f7xEstIlPlusGrand, f7yEstIlPlusgrand, zEstIlPlusGrand ) {
    let resultatf7 = f7(f7xEstIlPlusGrand,f7yEstIlPlusgrand)
    if (resultatf7 >= zEstIlPlusGrand) {
        return resultatf7;
    } else {
        return zEstIlPlusGrand;
    } 
 }

 console.log(f8(79,31,22));
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
// CF AU DESSUS
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
/*function f9 (nombreDefois,aPhotocopier) {
    console.log(aPhotocopier.repeat(nombreDefois))
}*/


//ou

function f9 (occurencePhotocopies,texteAPhotocopier) {
    for (i = 0; i < occurencePhotocopies; i++) {
        console.log(texteAPhotocopier);
    }
}

f9(4,"bidibi");

let age = "Jean-François";
console.log(age);
age = age.slice(5);
console.log(age);

let arr = [1,3,4,47];
console.log(arr);
arr[1] = 12;