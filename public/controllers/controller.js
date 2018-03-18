function AppCtrl($scope, $http){
  console.log("Hello world from controller.");

  var refresh = function(){
    $http.get('/read').success(function(res){
      console.log('I got the data I requested');
      $scope.contactList = res;
      $scope.contact = "";
    });
  }

  refresh();

  $scope.addContact = function(){
    //console.log($scope.contact);
    $http.post('/create', $scope.contact).success(function(res){
      console.log(res);
      refresh();
    });
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/delete/' + id).success(function(res){
      refresh();
    });
  };

<<<<<<< HEAD
=======
  $scope.edit = function(id){
    console.log(id);
    $http.get('/read/'+id).success(function(res){
      $scope.contact = res;
    })
  };

  $scope.update = function(){
    console.log($scope.contact._id);
    $http.put('/update/'+ $scope.contact._id, $scope.contact).success(function(res){
      refresh();
    })
  };

  $scope.deselect = function(){
    $scope.contact = "";
  }
>>>>>>> 481fd286f1e23d24db909c1f57bf6573c63409a7
}
