
# Application de gestion des notes des élèves

Cette application en React avec Vite permet de créer des élèves, des matières et d'enregistrer leurs notes pour générer un tableau de classe affichant les moyennes des élèves.

## Installation

1.  Assurez-vous d'avoir Node.js installé sur votre machine.
    
2.  Clonez ce dépôt en utilisant la commande suivante :
    
    bashCopy code
    
    `git clone https://github.com/votre-utilisateur/nom-du-repo.git` 
    
3.  Accédez au répertoire du projet :
    
    bashCopy code
    
    `cd nom-du-repo` 
    
4.  Installez les dépendances :
    
    Copy code
    
    `npm install` 
    

## Démarrage de l'application

Pour démarrer l'application en mode développement, exécutez la commande suivante :

arduinoCopy code

`npm run dev` 

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173/) dans votre navigateur.

## Utilisation

L'application propose les fonctionnalités suivantes :

### Création des élèves

-   Dans la page principale, saisissez le prénom de l'élève dans le champ de saisie et cliquez sur le bouton "Ajouter élève" pour créer un nouvel élève. L'élève sera ajouté à la liste des élèves.

### Création des matières

-   Toujours dans la page principale, saisissez le nom de la matière dans le champ de saisie et cliquez sur le bouton "Ajouter matière" pour créer une nouvelle matière. La matière sera ajoutée à la liste des matières disponibles.

### Enregistrement des notes

-   Sélectionnez un élève dans le premier menu déroulant.
-   Sélectionnez une matière dans le deuxième menu déroulant.
-   Saisissez la note de l'élève pour la matière sélectionnée dans le champ de saisie.
-   Cliquez sur le bouton "Ajouter" pour enregistrer la note pour l'élève et la matière sélectionnée.

### Affichage du tableau de classe

-   Cliquez sur le lien "Tableau de classe" dans le menu pour afficher le tableau de classe.
-   Le tableau affiche les noms des élèves dans la première colonne et les notes correspondantes aux matières dans les colonnes suivantes.
-   Les moyennes des élèves sont calculées et affichées dans la dernière colonne du tableau.

## Licence

Ce projet est sous licence MIT. Vous pouvez consulter le fichier `LICENSE` pour plus d'informations.

## Auteur

Ce projet a été développé par [Votre Nom](https://github.com/votre-utilisateur).

## Remarque

Assurez-vous que vous avez Node.js et npm (Node Package Manager) installés sur votre machine avant de lancer l'application.
