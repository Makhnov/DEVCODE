// La fonction se lance au démarrage de chaque page ET quand on clique sur la checkbox (la corde de la lampe).
// Si l'utilisateur est en SCHEME DARK, la page se lancera en MODE SOMBRE. 
// Si l'utilisateur est en SCHEME LIGHT, la page se lancera en MODE CLAIR.
// Si l'utilisateur n'a pas sélectionné de SCHEME, la page se lancera en MODE CLAIR.


function themeSwap(select) {

  selected = document.querySelector('.'+select)

  if (document.documentElement.classList.contains("clair")) { 

    document.documentElement.classList.add("sombre")
    document.documentElement.classList.remove("clair")    
    selected.innerHTML = "Bonne nuit !"

      } else if (document.documentElement.classList.contains("sombre")) {

        selected.innerHTML = "Bonjour !"     
      document.documentElement.classList.add("clair")
      document.documentElement.classList.remove("sombre") 

          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            document.documentElement.classList.add("sombre")
            document.documentElement.classList.remove("clair")
            selected.innerHTML = "Bonne nuit !"

              } else { 

              document.documentElement.classList.add("clair")
              document.documentElement.classList.remove("sombre")
              selected.innerHTML = "Bonjour !"
                           
              }
}         
