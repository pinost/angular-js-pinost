angular.module('resource', ['ngResource'])
  .factory('Users', function ($resource) {
    var Users = $resource('https://api.mongolab.com/api/1/databases/angulardb/collections/users/:id', {
      apiKey:'CGZXjEE8xwU-JwaIjJU5rkcbKsjQKi33',
      id:'@_id.$oid'
    });

    Users.prototype.getFullName = function() {
      return this.firstName + ' ' + this.lastName;
    };

    return Users;
  })
  .controller('ResourceCtrl', function ($scope, Users) {

    $scope.users = Users.query({}, function(users){
      console.log($scope.users.length);
    });

    $scope.remove = function (user, index) {
      Users['delete']({}, user);
      //user.$delete();
      $scope.users.splice(index, 1);
    };

    $scope.add = function () {
      var user = new Users({
        name:'Superhero'
      });
      user.$save();
    };

    $scope.add = function () {
      var user = {
        name:'Superhero'
      };
      Users.save(user);
    };

  });
