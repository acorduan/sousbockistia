angular.module('starter.services', [])

.factory('Utilisateurs', function($localstorage) {

  var utilisateurs = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    allInit: function() {
      return utilisateurs;
    },
    all: function() {
      return $localstorage.getObject('utilisateurs');
    },
    remove: function(utilisateur) {
      $localstorage.getObject('utilisateurs').splice($localstorage.getObject('utilisateurs').indexOf(chat), 1);
    },
    get: function(utilisateurId) {
      for (var i = 0; i < $localstorage.getObject('utilisateurs').length; i++) {
        if ($localstorage.getObject('utilisateurs')[i].id === parseInt(utilisateurId)) {
          return $localstorage.getObject('utilisateurs')[i];
        }
      }
      return null;
    }
  };
})

.factory('Cocktails', function($localstorage) {
  var cocktails = [{
    idCocktail: 0,
    favourite: 0,
    categorie: "Cocktails au rhum",
    nom: "Mojito",
    presentation: "• Réalisez la recette \"Mojito\" directement dans le verre. • Placer les feuilles de menthe dans le verre, ajoutez le sucre et le jus de citrons. Piler consciencieusement afin d'exprimer l'essence de la menthe mais sans la broyer. Ajouter le rhum, remplir le verre à moitié de glaçons et compléter avec de l'eau gazeuse. Mélanger doucement et servir avec une paille. • Servir dans un verre de type \"tumbler\". • Décor: Décorer de feuilles de menthe fraîches et d'une tranche de citron. • Utilise de préférence du jus de citron vert frais (pressé). Bien que la recette originale ne contienne pas d'angostura, vous pouvez y ajouter quelques gouttes afin de le rendre un peu plus sec.",
    ingredients: [
      {idIngredient: 0},
      {idIngredient: 1},
      {idIngredient: 2},
      {idIngredient: 3}
    ],
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idCocktail: 1,
    categorie: "Cocktails au rhum",
    nom: "Piña Colada",
    favourite: 1,
    presentation: "• Réalisez la recette \"Piña Colada\" au mixer. • Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout. C'est prêt ! Versez dans le verre et dégustez. Peut aussi se réaliser au shaker si c'est juste pour une personne. • Servir dans un verre de type \"verre à vin\". • Décor: Décorer avec un morceau d'ananas et une cerise confite. • Vous pouvez ajouter une touche d'onctuosité en ajoutant une cuillère à soupe de crème fraîche dans le mixer.",
    ingredients: [
      {idIngredient: 4},
      {idIngredient: 5},
      {idIngredient: 6},
      {idIngredient: 7}
    ],
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  }
  ];

  return {
    allInit: function() {
      return cocktails;
    },
    all: function() {
      return $localstorage.getObject('cocktails');
    },
    allfavourite: function() {
      var cocktailsTemp = new Array();
      for (var i = 0; i < $localstorage.getObject('cocktails').length; i++) {
        if ($localstorage.getObject('cocktails')[i].favourite == 1) {
          cocktailsTemp.push($localstorage.getObject('cocktails')[i]);
        }
      }
      return cocktailsTemp;
    },
    remove: function(cocktail) {
      $localstorage.getObject('cocktails').splice($localstorage.getObject('cocktails').indexOf(cocktail), 1);
    },
    get: function(cocktailId) {
      for (var i = 0; i < $localstorage.getObject('cocktails').length; i++) {
        if ($localstorage.getObject('cocktails')[i].idCocktail === parseInt(cocktailId)) {
          return $localstorage.getObject('cocktails')[i];
        }
      }
      return null;
    }
  };
})

.factory('Ingredients', function($localstorage) {
  var ingredients = [{
    idIngredient: 0,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 1,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 2,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 3,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 4,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 5,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 6,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  },
  {
    idIngredient: 7,
    nom: "Rhum blanc",
    dosage: 4,
    unite: "cl",
    dateDeCreation: "2015-12-20T18:25:43.511Z",
    dateDeModification: "2015-12-20T18:25:43.511Z"
  }
  ];

  return {
    allInit: function() {
      return ingredients;
    },
    all: function() {
      return $localstorage.getObject('ingredients');
    },
    remove: function(ingredient) {
      $localstorage.getObject('ingredients').splice($localstorage.getObject('ingredients').indexOf(ingredient), 1);
    },
    get: function(ingredientId) {
      for (var i = 0; i < $localstorage.getObject('ingredients').length; i++) {
        if ($localstorage.getObject('ingredients')[i].id === parseInt(ingredientId)) {
          return $localstorage.getObject('ingredients')[i];
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