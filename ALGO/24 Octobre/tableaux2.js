// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function tabA(tab) 
{
    console.log(tab[tab.length-1]);
}

tabA([4,5,6,12]);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function tabB(tab) 
{
    return tab[tab.length-1];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function tabC(tab) 
{
    let minTab = tab[0];

    for (let i = 0; i < (tab.length-1); i++) 
    {
        if (minTab > tab[i+1]) 
        {
            minTab = tab[i+1];
        }        
    }

    return minTab;
}

console.log(tabC([17,15,26,7,9,3]));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function tabD(tab) 
{
    let maxTab = tab[0];

    for (let i = 0; i < (tab.length-1); i++) 
    {
        if (maxTab < tab[i+1]) 
        {
            maxTab = tab[i+1];
        }        
    }

    return maxTab;
}

console.log(tabD([1117,15,26,157,9,611]));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

function tabE(tab) 
{
    let maxTab = tab[0];
    let max2Tab = tab[1];

    for (let i = 0; i < (tab.length-1); i++) 
    {
        if (maxTab < tab[i+1]) 
        {
            max2Tab = maxTab;
            maxTab = tab[i+1];                         
        }
        else if (max2Tab < tab[i+1])
        {
            max2Tab = tab[i+1];
        }
    }

    return max2Tab;
}

console.log(tabE([417,415,26,157,9,551]));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function tabF(tab,n)
{
    let occurence = 0;

    for (let i = 0; i < (tab.length); i++) 
    {
        if (tab[i] == n) 
        {
            occurence++
        }
    }

    return occurence;
} 

console.log(tabF([415,417,415,26,157,9,1,415,0,415],415));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function tabG(tab,n)
{
    let occurence = false;

    for (let i = 0; i < (tab.length); i++) 
    {
        if (tab[i] == n) 
        {
            occurence = true;
        }
    }

    return occurence;
} 

console.log(tabG([415,417,415,26,157,9,1,415,0,415],9));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

function tabH(tab,n)
{
    let partMin = 0
    let partMax = tab.length-1;
    let partMid = Math.ceil((partMin+partMax)/2);
    let resultat = false;

    for (let i = 0; i < (tab.length).toString(2).length; i++)
    {
        if (tab[partMid] > n)
        {
            partMax = partMid;
            partMid = Math.ceil((partMin+partMax)/2);
        }
        else if (tab[partMid] < n)
        {
            partMin = partMid;
            partMid = Math.ceil((partMin+partMax)/2);
        }
        else 
        {
            return !resultat;
        }
    }

    return resultat;       
} 

console.log(tabH([1,17,41,150,157,159,160,180,190,195,200,211,250,251,252,253,260,278,259,294,305,309,325,415,500,515],200));

// Créer un tableau qui contient [1,2,3,...,7777].

let tab7777 = [];

for (let i = 0; i < 7777; i++) 
{
    tab7777.push(i+1);
}

console.log(tab7777.length);
// Créer un tableau qui contient [10,20,30,...,77770].

let tab77770 = [];

for (let i = 0; i < 7777; i++) 
{
    tab77770.push(10*i);
}

console.log(tab77770.length);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].


let tabDemi77770 = [];
let iMax = tab77770.length;

for (let i = 0; i < iMax; i++) {
    tabDemi77770.push(tab77770[i]/2);
}
console.log(tabDemi77770.length);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

function tabJ(tab) 
{
    for (let i = tab.length-1; i >= 0; i--)
    {
        if (tab[i] < 50)
        {
            tab.pop();
        }
        else  
        {
            return tab;
        }
    }
}

console.log(tabJ([1,45,88,14,23,-1100,-112]));

// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
// Il manque une ")