'use strict';

angular.module('formInputHelperApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inputs', {
        templateUrl: 'views/inputs.html',
        controller: 'InputsCtrl'
      })
      .otherwise({
        redirectTo: '/inputs'
      });
  });
