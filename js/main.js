
// ng-app="tableApp" ng-controller="tableCtrl"
// ng-repeat x in names
var app = angular.module('tableApp', []);
app.controller('tableCtrl', function($scope, $http) {
  var list = $http.get("list.json").then(function (response) { //json source file
    $scope.names = response.data.records;

    $scope.propertyName = 'Name';
    $scope.reverse = false;
    $scope.list = list;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
  });
});

// var app = angular.module('tableApp', []);
// app.controller('tableCtrl', function($scope, $http) {
//   $http.get("list.json").then(function (response) { //json source file
//     $scope.names = response.data.records;
//
//     $scope.sortBy = function(propertyName) {
//       $scope.propertyName = 'Name';
//       $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
//       $scope.propertyName = propertyName;
//     };
//   });
// });
