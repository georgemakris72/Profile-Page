var storeProducts=angular.module("storeProducts",[])


storeProducts.directive("gemPanels", function(){
      return {
           restrict: 'A',
           templateUrl: 'templates/panels.html',
           controller: function($scope){
             var tab=1;
             $scope.tab=tab;
             $scope.selectTab=function(newTab){
             $scope.tab= newTab;
           }
           }
           }
         })


  storeProducts.directive("storeReviews", function(){
    return {
         restrict: 'A',
         templateUrl: 'templates/store-reviews.html',
         controller: function($scope){
            $scope.newReview={};




           $scope.addReview= function(i){
//With this function, we will add a new review to a temp array if a review does not exist

          if (!i.reviews) {
          i.reviews = []
        }
          firebase.database().ref('/products/'+CryptoJS.MD5(i.name)+'/reviews/'
          +CryptoJS.MD5($scope.newReview.author)).set($scope.newReview);



              /*   if (!i.reviews) {
                 i.reviews = []
                 i.reviews.push ($scope.newReview)
               };
                 console.log($scope.newReview)
                 $scope.newReview={};

          }*/
        }
      }
  }})
