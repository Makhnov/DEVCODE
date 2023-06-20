let resultat = [];
let double = [];

function rand(n) 
{
    return Math.floor(Math.random() * n)
}

function noCroix(tableau,n)
{
    let croix = false;

    for (let i = 0; i < (tableau.length); i++) 
    {
        if (tableau[i] == n) 
        {
            croix = true;
        }
    }

    return croix;
}

function verifDoublon(tab1, tab2) 
{
    for (let j = 2; j >= 0; j-- ) 
    {
        for (let k = 2; k >= 0; k--) 
        {
            if (tab1[j] == tab2[k]) 
            {
                double.push(j);
            }
        }
    }
    
    return double;
}

// console.log(verifDoublon(["Jean", "Marc", "Alain"], ["Tibo", "Alain", "Luc"])[0]);


function santa(liste) 
{
    let i = liste.length;
    let donneurs = liste;
    let receveurs = liste;
    let d = 0;
    let r = 0;

    while (i > 0) 
    {
        if (i != 2) 
        {
            d = rand(i);
            r = rand(i);

            while (donneurs[d] == receveurs[r] || noCroix(resultat, receveurs[r]+" offre son cadeau à "+donneurs[d])) 
            {
                r = rand(i);
            }

            console.log(donneurs[d]+receveurs[r]);
        } else  
        {
            if (verifDoublon(donneurs, receveurs) > 0) 
            {
                d = verifDoublon(donneurs, receveurs)[0];
            } else 
            {
                d = rand(i);
                r = rand(i);
            }

            while (donneurs[d] == receveurs[r] || noCroix(resultat, receveurs[r]+" offre son cadeau à "+donneurs[d])) 
            {
                r = rand(i);
            }
            console.log(donneurs[d]+receveurs[r]);
        }

        console.log("i ="+i+" : "+donneurs+receveurs);
        resultat.push(donneurs[d]+" offre son cadeau à "+receveurs[r]);
        donneurs.splice(d, 1);
        receveurs.splice(r, 1);
        i--;
    }

    return resultat;
}

// console.log(santa(["Jean", "Marc", "Thierry", "Alain", "Nicolas", "Luc"]))

let tablitablo = ["Jean", "Marc", "Thierry", "Alain", "Nicolas", "Luc"];
let resultabli = [];
let tablidon = ["Jean", "Marc", "Thierry", "Alain", "Nicolas", "Luc"];
let tablirec = ["Jean", "Marc", "Thierry", "Alain", "Nicolas", "Luc"];
console.log(tablitablo);
let number = rand(6);
resultabli.push(tablidon[number]+" offre son cadeau à "+tablirec[(number + 1) % 6]);
console.log(resultabli);
tablidon.splice(number, 1);
console.log(tablidon);
tablirec.splice((number + 1) % 6, 1);
console.log(tablirec);
