var myApp = angular.module('myApp',[]);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {
  $scope.message = 'Hola!';
  
  $scope.init = function() {
    $http({
        url: ...,
        method: 'GET'
    })
    .then(function(response) {
       // apply response to scope
    })
    
  }
  
}]);