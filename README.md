# Instagram Challenge

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 📷 Screenshots
***

<table>
  <tr>
    <td><img src="./screenshots/login-screen.png" width="300"></td>
    <td><img src="./screenshots/signup-screen.png" width="300"></td>
  <tr>
  <tr>
    <td><img src="./screenshots/signup-screen-validation.png" width="300"></td>
 <td><img src="./screenshots/home-screen.png" width="300"></td>
<tr>
  <tr>
    <td><img src="./screenshots/new-post-screen.png" width="300"></td>
  <tr>
</table>

## Fonctionnalités
***

- Authentification & base de données avec Firebase (Authentication & Cloud Firestore)
- création de compte et connexion via Firebase
- Ajout et récupération de post dynamique via Firebase
- Formulaire avec Formik et validations avec Yup
- validation dynamique des champs de formulaire avec l'affichage d'une bordure rouge en cas d'erreur
- Système de like / unlike dynamique avec la base de données
- Stack navigation

## 🚀 Installation
***

- récupération du projet sur Github par HTTPS :

```shell script
$ https://github.com/tony-dugue/instagram-challenge.git
```

- installer les packages :
```shell script
$ yarn install
```
ou `npm install`

- dans le fichier `.env`, mettre les identifiants et les clés de connexion à la base de données Firebase

## Démarrer l'application
***

- Pour ouvrir le Metro Bundler dans le navigateur :
```shell script
$ yarn start
```

- Ouvrir le projet dans un appareil avec Expo Go :
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: avec n'importe quel navigateur

## Ajout de code natif
***

Ce projet peut être exécuté à partir d'un navigateur Web ou de l'application client Expo.
Du code natif peut être ajouté par la suite. on peut le faire en éjectant le projet et en le reconstruisant nous-même.

Pour ajouter du code natif, il faut éjecter le projet avec `yarn eject`
