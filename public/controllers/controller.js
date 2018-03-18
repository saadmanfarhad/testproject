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
  }

}
