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
      .when('/inputs/:inputType', {
        templateUrl: 'views/input-detail.html',
        controller: 'InputDetailCtrl'
      })
      .otherwise({
        redirectTo: '/inputs'
      });
  });
