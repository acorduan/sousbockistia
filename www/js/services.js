angular.module('starter.services', [])

.factory('Utilisateurs', function($localstorage) {

  var localUtilisateurs = $localstorage.getObject('utilisateurs');

  return {
    all: function() {
      return localUtilisateurs;
    },
    remove: function(utilisateur) {
      localUtilisateurs.splice(localUtilisateurs.indexOf(chat), 1);
    },
    get: function(utilisateurId) {
      for (var i = 0; i < localUtilisateurs.length; i++) {
        if (localUtilisateurs[i].id === parseInt(utilisateurId)) {
          return localUtilisateurs[i];
        }
      }
      return null;
    }
  };
})

.factory('Cocktails', function($localstorage) {

  var localIngredients = $localstorage.getObject('ingredients');
  var localCocktails = $localstorage.getObject('cocktails');

  /**
  * Récupération des ingrédients et inclusion dans l'array des cocktails
  **/
  function fillWithIngredients(cocktailsArray){
    var ingredientsTemp = new Array();
    for (var i = 0; i < cocktailsArray.length; i++) {
      for (var ii = 0; ii < localIngredients.length; ii++) {
        for (var iii = 0; iii < localCocktails[i].ingredients.length; iii++) {
          if (cocktailsArray[i].ingredients[iii].idIngredient == localIngredients[ii].idIngredient) {
            ingredientsTemp.push(localIngredients[ii]);
          }
        }
      }
      cocktailsArray[i].ingredients = ingredientsTemp;
      ingredientsTemp = [];
    }
    return cocktailsArray;
  }

  return {
    all: function() {
      var cocktailsTemp = localCocktails;
      return fillWithIngredients(cocktailsTemp);
    },
    allfavourite: function() {
      var cocktailsTemp = new Array();
      for (var i = 0; i < localCocktails.length; i++) {
        if (localCocktails[i].favourite == 1) {
          cocktailsTemp.push(localCocktails[i]);
        }
      }
      return fillWithIngredients(cocktailsTemp);
    },
    remove: function(cocktail) {
      localCocktails.splice(localCocktails.indexOf(cocktail), 1);
    },
    get: function(cocktailId) {
      for (var i = 0; i < localCocktails.length; i++) {
        if (localCocktails[i].idCocktail === parseInt(cocktailId)) {
          return fillWithIngredients(localCocktails[i]);
        }
      }
      return null;
    }
  };
})

.factory('Ingredients', function($localstorage) {

  var localIngredients = $localstorage.getObject('ingredients');

  return {
    all: function() {
      return localIngredients;
    },
    remove: function(ingredient) {
      localIngredients.splice(localIngredients.indexOf(ingredient), 1);
    },
    get: function(ingredientId) {
      for (var i = 0; i < localIngredients.length; i++) {
        if (localIngredients[i].id === parseInt(ingredientId)) {
          return localIngredients[i];
        }
      }
      return null;
    }
  };
});

///////////////////
///////////////////
/* Local Storage */
///////////////////
///////////////////
angular.module('ionic.utils', [])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);