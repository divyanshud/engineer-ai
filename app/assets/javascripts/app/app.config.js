angular.module('engineerAi').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  var containerState = {
    name: 'container',
    abstract: true,
    controller: 'HomeCtrl as HomeCtrlVM',
    templateUrl: 'app/common/views/home.html'
  }

  var containerPublicState = {
    name: 'container.public',
    abstract: true,
    template: '<ui-view />',
  }

  var containerPublicHomeState = {
    name: 'login',
    url: '/login',
    controller: 'LoginCtrl as LoginVM',
    templateUrl: 'app/common/views/login.html',
    onEnter: ['Auth','$state','$rootScope', function(Auth, $state,$rootScope){
         Auth.currentUser().then(function(){
           if($rootScope.user.role == 'Admin'){
             $state.go('container.user.secret-code');
           }else{
             $state.go('container.user.dashboard');
           }
         })
       }]
  }
  var containerPublicRegistrationState = {
    name: 'signup',
    url: '/signup',
    controller: 'RegistrationCtrl as RegistrationVM',
    templateUrl: 'app/common/views/registration.html'
  }

  var containerUserState = {
    name: 'container.user',
    abstract: true,
    template: '<ui-view />',
  }

  var containerUnauthorizedState = {
    name: 'container.unauthorized',
    url: '/unauthorized',
    templateUrl: 'app/common/views/unauthorized.html'
  }

  $stateProvider.state(containerState);
  $stateProvider.state(containerPublicState);
  $stateProvider.state(containerPublicHomeState);
  $stateProvider.state(containerPublicRegistrationState);
  $stateProvider.state(containerUserState);
  $stateProvider.state(containerUnauthorizedState);



}]);
