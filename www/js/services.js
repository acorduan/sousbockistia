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

  return {
    all: function() {
      var cocktailsTemp = localCocktails;
      return cocktailsTemp;
    },
    allfavourite: function() {
      var cocktailsTemp = new Array();
      for (var i = 0; i < localCocktails.length; i++) {
        if (localCocktails[i].favoris == 1) {
          cocktailsTemp.push(localCocktails[i]);
        }
      }
      return cocktailsTemp;
    },
    categorie: function() {
      var categoriesTemp = new Array();
      var add;

      categoriesTemp.push(localCocktails[0].categorie);
      
      for(var i=0;i< localCocktails.length;i++)
      {
        add = 1;
        for(var j=0;j< categoriesTemp.length;j++)
        {
          if(categoriesTemp[j] == localCocktails[i].categorie)
          {
           add = 0;
          } 
        }
        if(add == 1)
        {
          categoriesTemp.push(localCocktails[i].categorie);
        }     
     }
     return  categoriesTemp;
  },

    remove: function(cocktail) {
      localCocktails.splice(localCocktails.indexOf(cocktail), 1);
    },
    getFromCategorie: function(categorie)
    {
      var cocktailsTemp = new Array();
      for(var i=0;i<localCocktails.length;i++)
      {
          if(localCocktails[i].categorie == categorie)
          {
            cocktailsTemp.push(localCocktails[i]);
          }
      }
      return cocktailsTemp;
    },

    get: function(cocktailId) {
      for (var i = 0; i < localCocktails.length; i++) {
        if (localCocktails[i].idCocktail === parseInt(cocktailId)) {
          return localCocktails[i];
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