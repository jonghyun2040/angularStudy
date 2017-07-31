//Module (controller, directive)
var app = angular.module('todo', []);

// controller
app.controller('TodoCtrl', function($scope) {
  $scope.todos = [{
    title: '요가수련',
    completed: false,
    createdAt: Date.now()
  },
  {
    title: '앵귤러 학습',
    completed: false,
    createdAt: Date.now()
  },
  {
    title: '운동하기',
    completed: true,
    createdAt: Date.now()
  }]
  $scope.remove = function(todo){
    // find todo index in todos
    var idx = $scope.todos.findIndex(function(item) {
      return item.id === todo.id;
    })

    // remove from todos
    if(idx > -1) {
      $scope.todos.splice(idx,1)
    }
  };

  $scope.add = function(newTodoTitle) {
    // create new todo
    var newTodo = {
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now()
    };
    // push in todos array
    $scope.todos.push(newTodo);
    // empty form
    $scope.newTodoTitle = "";
  }
  });

  // directive
  app.directive('todoTitle', function(){
    // directive define
    return {
      templateUrl: 'todoItem.tpl.html'
      template: '<div class="input-group">'
      +'<span class="input-group-addon">'
      +'<input type="checkbox" ng-model="todo.completed">'
      +'</span>'
      +'<input type="text" class="form-control" ng-model="todo.title">'
      +'<span class="input-group-btn">'
      +'<button class="btn btn-danger" type="button ng-click="remove(todo)>삭제</button>'
      +'</span>'
      +'</div>'
      +'<date>{{todo.createdAt | date:'yyyy-MM-dd HH:mm:ss'}}</date>'
    }
  });
