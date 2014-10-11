var app = angular.module('TemplateApp', []);

app.controller('SimpleController', [
  '$scope', function($scope) {
    $scope.title = "Hello Angular";
  }
]);
