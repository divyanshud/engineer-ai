(function() {
  'use strict';
  angular.module('engineerAi').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope','$sce', '$state','Auth','$rootScope'];

  function HomeCtrl($scope, $sce, $state, Auth, $rootScope) {
    var HomeCtrlVM = this;
    HomeCtrlVM.goTo = goTo;
    HomeCtrlVM.logout = logout;
    HomeCtrlVM.menuItem = []

    if(!Auth.isAuthenticated()){
      $state.go("login",{});
    }


    function logout(){
      var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
        Auth.logout(config).then(function(oldUser) {
          $state.go("login",{});
        }, function(error) {
            console.log("unable to logout");
        });

    }

    function setMenuList() {
        console.log($rootScope.user)
        switch($rootScope.user.role) {
          case 'Admin':
              HomeCtrlVM.menuItem = adminMenuList;
              break;
          case 'Customer':
              HomeCtrlVM.menuItem = customerMenuList;
              break;;
          default: HomeCtrlVM.menuItem = [];
              break;
        };

      }


    var adminMenuList = [
      {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}},
      {name:"Secret Codes", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.secret-code', args: {}}}
    ];


     var customerMenuList = [
       {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}}
     ];

     Auth.currentUser().then(function (user){
       $rootScope.user = user
     });

     setMenuList();

    function goTo(state) {
      return $state.go(state.name,state.args);
    }

    $scope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      alert("You have been logged out.")
      $rootScope.user = undefined
    });
 }
})();
