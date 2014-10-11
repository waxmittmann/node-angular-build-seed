var app = angular.module('TemplateApp', []);

app.controller('SimpleController', [
  '$scope', function($scope) {
    $scope.title = "Hello Angular";
    $scope.name = "Max";
    $scope.sayHello = function() {
      $scope.greeting = "Hello " + $scope.name;
    }
  }
]);
