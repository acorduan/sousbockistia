angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Cocktails) {
  $scope.cocktails = Cocktails.all();
})

.controller('ProfileCtrl', function($scope, Utilisateurs) {
  $scope.$on('$ionicView.enter', function(e) {
    // get a DOM element to create our svg in
    var drawingArea = Snap("#workspace");

    // define the url to load the svg from
    var url = "../img/wine70.svg";

    // use snap to load the svg and call the specified function after loading the svg
    Snap.load(url, function(fragment) {

      // select the svg element in the content
      var svgElement = fragment.select("svg#verresvg");
      var liquide = svgElement.select("#liquide");
      var verre = svgElement.select("#verre")
      
      // append the svg element to the svg in our DOM
      drawingArea.append(svgElement);

      var from = '{"path" : "M19,101.139015 C19,101.139015 51.2763089,87.6979408 63.8326734,93.4168184 C97.7423718,108.861212 122,101.139015 122,101.139015 L114.697221,139.75 L29.9229751,139.75 L19,101.139015 Z"}';
      var to = '{"path" : "M19,44.5365247 C19,44.5365247 51.2763089,11.3912572 63.8326734,25.4938296 C97.7423718,63.5792197 122,44.5365247 122,44.5365247 L114.697221,139.75 L29.9229751,139.75 L19,44.5365247 Z"}';
      
      animateLiquide(to);
      function animateLiquide(fromorto) {
        liquide.stop().animate(JSON.parse(fromorto), 2000, mina.linear, function(){
          animateLiquide(fromorto == from ? to : from);
        });
      }
    });
  });
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
