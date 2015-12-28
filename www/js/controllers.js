angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Cocktails) {
  $scope.cocktails = Cocktails.all();
})

.controller('ProfileCtrl', function($scope, Utilisateurs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.chats = Chats.all();
  //$scope.remove = function(chat) {
    //Chats.remove(chat);
  //};
})

.controller('CocktailsCtrl', function($scope, Cocktails) {
  $scope.cocktails = Cocktails.all();
  $scope.numberOfItemsToDisplay = 20;

  // ScrollInfinite : charge 20 cocktails de plus a chaque fois que l'on scroll la page
  $scope.addMoreItem = function(done) {
    if ($scope.cocktails.length > $scope.numberOfItemsToDisplay) {
      $scope.numberOfItemsToDisplay += 20; 
    }
    done(); 
  }
})

.controller('CocktailsDetailsCtrl', function($scope, $stateParams, Cocktails, $ionicHistory, $state) {
  $scope.cocktail = Cocktails.get($stateParams.id);
})

.controller('FavouriteCtrl', function($scope, Cocktails) {
  $scope.cocktails = Cocktails.allfavourite();
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
