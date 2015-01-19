angular.module('cors', [])

  .controller('CORSCtrl', function ($scope, $http) {

    $scope.deleteUser = function () {

      var userId = 'user';

      $http['delete']('https://api.mongolab.com/api/1/databases/angulardb/collections/users/' + userId,
        {
          params:{
            apiKey:'CGZXjEE8xwU-JwaIjJU5rkcbKsjQKi33'
          }
        }
      );
    };
  });