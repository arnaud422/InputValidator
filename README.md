# InputValidator `(V.1.0)`
 **[InputValidator](https://github.com/arnaud422/InputValidator/)** est un petit `Framework` très léger qui permet de faciliter la validation de `formulaire de connexion`.

Il a été créé a partir de [Promesse](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises) en Javascript ce qui permet d'avoir des fonctions `callback` pour `modifier le style` des éléments html selon que l'utilisateur est entré des informations valide ou non. 

# Installation
Vous pouvez utiliser cet outil avec un **[`CDN`](https://gcorelabs.com/cdn/what-is-cdn/)** (pas encore disponible) ou en `téléchargent` directement le fichier source.

### CDN:
Le principal avantage du `CDN` est qu'il vous donnera toujours `la dernère version` du projet. Ce qui veut dire que le risque de bogue est moindre. /!\ Attention si pour une raison inconnue le server ne repond plus votre projet ne sera évidement plus en mesure d'utiliser l'outil.

#### Ajouter la balise ci-dessous dans a la fin de votre fichier `index.html` principal.
    server pas encore disponible

### Téléchargement:
Si vous `téléchargez` le projet vous ne risqué pas de ne plus avoir accès a l'outil `par contre` vous devrez vous tenir au courant des dernières `MAJ` pour éviter les bogue.

 #### Vous pouvez `télécharger` le projet avec la commande ci-dessous (en supposant que vous avez [Git](https://git-scm.com/download/win)) sinon vous pouvez toujours télécharger le fichier `ZIP` via `l'onglet code`.
    git clone https://github.com/arnaud422/InputValidator/
    
Après avoir téléchargé le fichier sur votre machine ajoutez-le dans un fichier `utils` (par exemple) à la `racine` de votre projet. 

 #### Ajouter la balise suivante dans votre fichier `index.html` principal.
    <script src="./utils/InputValidator.js"></script>
    
# Documentation
Voici l'utilisation des `trois méthodes principale` qui permetent de vérifier un [pseudo](#checkpseudoargs), une adresse mail et un un mot de passe.

## checkPseudo(_args*_)
#### `InputValidator.checkPseudo()` : _permet de vérifier la validité du pseudo_ 
checkPseudo accepte **`3 paramètres`**:

 • L'_`élément html`_ qui correspond au pseudo **(Obligatoire)**

 • Le _`nombre de caractère minium`_ que peut avoir la valeur du pseudo _(optionnel)_

 • Le _`nombre de caractère maximum`_ que peut avoir la valeur du pseudo _(optionnel)_
 ### Exemple
 ```javascript
    
 let pseudo = document.getElementById("pseudo")
 
 pseudo.addEventListener("keyup", () => {
    InputValidator.checkPseudo(pseudo)
        .then(() => {
            pseudo.classList.add('success');
            pseudo.classList.remove('error');
        })
        .catch(() => {
            pseudo.classList.remove('success');
            pseudo.classList.add('error');
        })
})
    
 ```
 > Avec cet exemple vous **ajouter** ou **supprimer** une class a l'élément `html`. Il vous suffit d'ajouter votre style
 
 ## checkEmail(_args*_)
#### `InputValidator.checkEmail()` : _permet de vérifier la validité de l'adresse mail_ 
checkEmail accepte **`3 paramètres`**:

 • L'_`élément html`_ qui correspond a l'email **(Obligatoire)**

 • Le _`nombre de caractère minium`_ que peut avoir la valeur de l'email _(optionnel)_

 • Le _`nombre de caractère maximum`_ que peut avoir la valeur de l'email _(optionnel)_
 ### Exemple
 ```javascript
    
 let email = document.getElementById("email")
 
 pseudo.addEventListener("keyup", () => {
    InputValidator.checkEmail(email)
        .then(() => {
            email.classList.add('success');
            email.classList.remove('error');
        })
        .catch(() => {
            email.classList.remove('success');
            email.classList.add('error');
        })
})
    
 ```
 > Avec cet exemple vous **ajouter** ou **supprimer** une class a l'élément `html`. Il vous suffit d'ajouter votre style
 
## checkPassword(_args*_)
#### `InputValidator.checkPassword()` : _permet de vérifier la validité de l'adresse mail_ 
checkPassword accepte **`3 paramètres`**:

 • L'_`élément html`_ qui correspond au password **(Obligatoire)**

 • Le _`nombre de caractère minium`_ que peut avoir la valeur du password _(optionnel)_

 • Le _`nombre de caractère maximum`_ que peut avoir la valeur du password _(optionnel)_
 ### Exemple
 ```javascript
    
 let password = document.getElementById("password")
 
 pseudo.addEventListener("keyup", () => {
    InputValidator.checkPassword(password,8)
        .then(() => {
            password.classList.add('success');
            password.classList.remove('error');
        })
        .catch(() => {
            password.classList.remove('success');
            password.classList.add('error');
        })
})
    
 ```
 > Avec cet exemple vous **ajouter** ou **supprimer** une class a l'élément `html`. Il vous suffit d'ajouter votre style


