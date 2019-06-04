angular.module('engineerAi').factory('SecretCodeService', ['$resource', function($resource) {

  var SecretCodeService = $resource('secret_codes/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  },
  {
    update: {
      method: 'put'
    },
    generate: {
      method: 'post',
      isArray: true,
      url: '/bulk-generate'
    }
  });
  return SecretCodeService;
}]);
