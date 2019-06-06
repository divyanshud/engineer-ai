angular.module('engineerAi', [
  'ngResource',
  'ngAnimate',
  'templates', // Angular rails templates module
  'ui.router',
  'ngMaterial',
  'valdr',
  'angular-loading-bar',
  'Devise'
]);


angular.module('engineerAi')
  .controller('RootController', ['$scope','$rootScope','$state',function($scope,$rootScope,$state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error, ipCookie) {
        event.preventDefault();
          if( error.status == 401  ){
            $state.go('container.unauthorized');
          }
      });
  }]);
