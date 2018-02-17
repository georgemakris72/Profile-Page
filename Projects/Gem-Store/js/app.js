"use strict"


/*var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
  var name="George Makris";
  $scope.name="George Makris";});

myApp.controller("dopeController", function($scope){
  var WTF="Angular is very weird";
  $scope.WTF="Angular is very weird";});

myApp.controller("wackController", function($scope){
  var quote="Say Hello to my little friend!";
  $scope.quote="Say Hello to my little friend!";});

var theApp = angular.module("theApp", []);
theApp.controller("crazyController", function($scope){
  var address="222 West Ontario";
  $scope.address="222 West Ontario";});


angular.module("CombineModule", ["myApp", "theApp"]);*/

var myApp = angular.module("myApp", ['storeProducts', 'avatar', 'ngRoute']);
//myApp.controller("myController", function($scope){
  myApp.controller("myController", ['$scope', '$http', 'AvatarFactory', function($scope, $http, AvatarFactory){
    $http.get('/data/products.json').then(function(results){
      $scope.Gems=results.data;
      console.log($scope.Gems)
      $scope.Avatar=AvatarFactory;

var ref = firebase.database().ref('products/daefdd69a73c64a24d6670f01f243b3b/reviews');

ref.on("value", function(snapshot){
  $scope.info=snapshot.val();
  console.log($scope.info);
}, function(error) {
  console.log("Error:" +error.code);
});
    })
//Firebase Register
    $scope.Register=function(){
      firebase.auth().createUserWithEmailAndPassword($scope.email,$scope.password).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
    $scope.Login=function(){
      firebase.auth().signInWithEmailAndPassword($scope.email,$scope.password).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
    $scope.Logout=function(){
      firebase.auth().signOut();
    }
    $scope.onAuthStateChanged =
      firebase.auth().onAuthStateChanged(function(user){
        if (user){
          $scope.authenticated=true;
        }
        else {
          $scope.authenticated=false;
        }
    }  );

      }







]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.when("/main", {
    templateUrl: "templates/main.html"
      }).when("/page1", {
    templateUrl: "templates/page1.html"
      }).when("/page2", {
    templateUrl: "templates/page2.html",
    controller: function(){
        prompt("what is your name?")
      }
    });
}]);


//  $scope.Gems=gems;
/*myApp.controller("panelController", function($scope){
  var tab=1;
  $scope.tab=tab;
  $scope.selectTab=function(newTab){
  $scope.tab= newTab;
  };
});*/

/*myApp.controller("reviewController",function($scope){
  $scope.newReview={};

  $scope.addReview= function(i){
    if (!i.reviews) {
      i.reviews = []
      i.reviews.push ($scope.newReview)};
      console.log($scope.newReview)
      $scope.newReview={};


    };
})*/
