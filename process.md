- Basique (old) :

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

- GAME CONTROLLER : 

    START GAME :
        Formulaire soumis;
        Le modal disparait;
        Le data est récupéré pour créer deux joueurs;
        Le board est créé;
        Le premier tour commence avec le joueur qui a l'initiative;

    PLAY GAME : 

        Le joueur 1 place son marker. Le tour change (+1 btw)(fonctionner en pair / impair ?).
        Le joueur 2 place son marker mais seulement si : la place est vide && c'est son tour.
        Le joueur 1 place son marker (...). 
        Au bout du 5e tour, on vérifie qu'un winning combo n'est pas présent. S'il l'est, le joueur dont c'est le tour est vainqueur. +1 score. Si score = 3 pour un des deux joueurs, on a notre grand vainqueur. Confetti.jpg.

    RESET GAME :
        On actualise la p- non en vrai on rétablit toute les valeurs à 0 et ton remet le modal. On verra ça à la fin.
