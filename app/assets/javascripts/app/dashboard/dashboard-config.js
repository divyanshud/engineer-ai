angular.module('engineerAi').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.dashboard', {
              url: '/dashboard',
              controller: "DashboardCtrl as DashboardVM",
              templateUrl: 'app/dashboard/views/dashboard.html'
              /*resolve: {
                tasks: ['TodoService', function(TodoService) {
                  return TodoService.dashboard({type: 'developer'}).$promise;
                }],
                developers: ['TodoService', function(TodoService) {
                  return TodoService.developers().$promise;
                }],
                projects: ['ProjectService', function(ProjectService) {
                  return ProjectService.query({}).$promise;
                }]
              }*/
          })
}]);
