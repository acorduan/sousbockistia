// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic.utils'])

.run(function($ionicPlatform, $rootScope, $state, $localstorage, Utilisateurs, Cocktails, Ingredients) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Display back button
  $rootScope.goBack = function() {
        // function to go back
        window.history.back();
    }
  $rootScope.$on('$stateChangeSuccess', function () {
      if ($state.$current == 'cocktail') {
        $rootScope.showCustomBack = true;
      } else{
        $rootScope.showCustomBack = false;
      }
  });

  // Save in localstorage when it's the first use of the app
  if(!$localstorage.get('firstUse')) {
    $localstorage.set('firstUse', 1);
    $localstorage.setObject('utilisateurs', Utilisateurs.allInit());
    $localstorage.setObject('cocktails', Cocktails.allInit());
    $localstorage.setObject('ingredients', Ingredients.allInit());
  }



})

.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.cocktails', {
    url: '/cocktails',
    views: {
      'tab-cocktails': {
        templateUrl: 'templates/tab-cocktails.html',
        controller: 'CocktailsCtrl'
      }
    }
  })

  .state('tab.favourite', {
    url: '/favourite',
    views: {
      'tab-favourite': {
        templateUrl: 'templates/tab-favourite.html',
        controller: 'FavouriteCtrl'
      }
    }
  })

  .state('cocktail', {
    url: '/cocktail/:id',
    templateUrl: 'templates/cocktail-detail.html',
    controller: 'CocktailsDetailsCtrl'
  })

  .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
