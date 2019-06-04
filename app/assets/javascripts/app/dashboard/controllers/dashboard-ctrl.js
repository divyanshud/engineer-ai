(function() {
  'use strict';
  angular.module('engineerAi').controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = ['$scope', '$stateParams', '$state','$rootScope'];

  function DashboardCtrl($scope, $stateParams, $state,$rootScope) {
    var DashboardVM = this;

    DashboardVM.dashboardType = [{name:"Developer",value:"developer"},{name:"Project",value:"project"}];
    DashboardVM.selectedType = "developer";
    DashboardVM.userName = $rootScope.user.name;
    DashboardVM.role = $rootScope.user.role;

    /*function switchDashboard(){
      TodoService.dashboard({
        type: DashboardVM.selectedType
      }).$promise.then(function(value) {
        DashboardVM.records = value;
        console.log(DashboardVM.headers);
      //  DashboardVM.headers = (DashboardVM.selectedType == "developer")? developers : projects;

      }, function(response) {
          console.log(response);
      });

    }*/


  };
})();
