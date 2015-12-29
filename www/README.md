## Plugins 
 
Installation du plugin : 
- Pour le splashscreen : cordova plugin add org.apache.cordova.splashscreen 

## Installation 

Génération de l'appli pour Android: 
```bash
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```
Pour récupérer l'apk il faut aller ici : "/platforms/android/build/outputs/apk/android-debug.apk"

Génération de l'appli pour IOS: 
```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Pour le lancer sur un navigateur web:
```bash
$ ionic serve
```