angular.module('engineerAi').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.secret-code', {
              url: '/secret-code',
              controller: "SecretCodeCtrl as SecretCodeVM",
              templateUrl: 'app/secret-code/views/secret-code.html',
              resolve: {
                secretCodes: ['SecretCodeService', function(SecretCodeService) {
                  return SecretCodeService.query({}).$promise;
                }]
              }
          })
}]);
