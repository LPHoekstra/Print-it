Etape:

-ajout de la flèche gauche et droite dans le html.
-après avoir regarder le css j'ai pu voir qu'il y avait des classes déjà faite pour les éléments du carrousel,
dont .arrow, .arrow_left, .arrow_right.
-ajout des classes aux flèches ajouter dans le html plus tôt.

-récupération des deux flèches par un querySelectorAll.
-création fonction handleSlideChange qui console.log l'élément passé en paramètre.
-ajout d'une boucle forEach pour parcourir les 2 flèches selectionnées au click,
qui appelle la fonction handleSlideChange.

-création d'une div avec la class "dot" pour le nombre de slides dans cette même const.
-variable currentSlideNumber set à 0 pour savoir sur quelle slide on est.
-handleSlideChange qui vérifie sur quelle flèche l'utilisateur à cliquer.
Si c'est la flèche de droite on rajoute 1 à "currentSlideNumber", ou enlève 1 si ce n'est pas le cas. Et appelle la fonction changeSlide
-La fonction changeSlide change le src de la balise img enlève la précédente classe "dot_selected" puis ajoute cette classe au "dot" numéro "currentSlideNumber".

-le carrousel tourne à l'infini grace aux conditions dans handleSlideChange.
-Slides dans un fichier à part (slides.js) pour un code plus maintenable.
-script.js de type module dans le html pour importer slides.js

-changement de la création des éléments "dot" en utilisant appendChild à la place de innerhtml pour une meilleur optimisation en ajouter en plus une id pour les reconnaitres entre eux au clique.
-ajout d'un eventListener pour la sélection des points à la souris qui renvoie sur la bonne slide (ex: clique sur le point 3 = renvoie sur la 3eme slide).

