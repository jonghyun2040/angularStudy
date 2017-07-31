'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('todo').controller('TodoCtrl', function($scope, todoStorage){

  $scope.todos = todoStorage.get();

  $scope.remove = function(todo){
    todoStorage.remove(todo);
  };

  $scope.add = function(newTodoTitle) {
    todoStorage.add(newTodoTitle);
    $scope.newTodoTitle = "";
  };

  $scope.update = fucntion() {
    todoStorage.update();
  };

});
