(function() {
  'use strict';
  angular.module('engineerAi').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','$sce', '$state','$rootScope', 'Auth'];

  function LoginCtrl($scope, $sce, $state, $rootScope, Auth) {
    var LoginVM = this;
    LoginVM.login = login;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}


    function login(){
      Auth.login(LoginVM.user, config).then(function(user){
        $rootScope.user = user
        if($rootScope.user.role == 'Admin'){
          $state.go('container.user.secret-code');
        }else{
          $state.go('container.user.dashboard');
        }
      }, function(response){
        alert(response.data.error)
      });
    }

 }
})();
