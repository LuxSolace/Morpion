- Un joueur
    Marqueur 
    Nom
    Si c'est son tour
    (Si c'est le vainqueur)
    Score

- Un jeu / gameflow
    - Un array auquel sont rattachés des cubes en HTML
    - Quand un cube est cliqué, l'array change
    - l'array ne change que si c'est le tour du joueur && que l'endroit du clic n'est pas déjà changé
    - Si un certain array est réalisé, c'est une victoire
    - En cas de victoire, +1 point de Score au joueur
    - Possibilité de rejouer avec reset
    - Possibilité de commencer le jeu

- Display 
    - Une grille est générée en fonction de l'array
    - Si l'array est composé de 1, ça fait une croix, et un 2, ça fait un rond. Un 0 = le bloc est vide et cliquable
    - En cas de victoire, sortir les confettis
    - Y mettre tout ce qui est relatif au DOM ?

(ou juste utiliser le symbole 0 et X)

