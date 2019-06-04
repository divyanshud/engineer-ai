(function() {
  'use strict';
  angular.module('engineerAi').controller('SecretCodeCtrl', SecretCodeCtrl);
  SecretCodeCtrl.$inject = ['$scope', '$stateParams', '$state','secretCodes','SecretCodeService','$mdToast'];

  function SecretCodeCtrl($scope, $stateParams, $state,secretCodes,SecretCodeService,$mdToast) {
    var SecretCodeVM = this;
    SecretCodeVM.generate = generate;
    SecretCodeVM.records = secretCodes;
    SecretCodeVM.options= [{value:'1'},{value:'10'},{value:'20'},{value:'50'}]
    SecretCodeVM.selectedSecretCodeCount = 10;
    SecretCodeVM.errors = [];

    function generate(){
      SecretCodeService.generate({
        count: SecretCodeVM.selectedSecretCodeCount
      }).$promise.then(function(secretCodes) {
        SecretCodeVM.records = secretCodes;
        $mdToast.show({
              template: '<md-toast class="md-toast"> Secret Code(s) generated</md-toast>',
              hideDelay: 3000,
              position: 'bottom left'
          });
      }, function(badResponse) {
        console.log(badResponse);
        SecretCodeVM.errors = badResponse.data.errors;
        $mdToast.show({
              template: '<md-toast class="md-toast ' + 'error' +'">' + SecretCodeVM.errors.join(', ') + '</md-toast>',
              hideDelay: 3000,
              position: 'bottom left'
          });
      });

    }


  };
})();
