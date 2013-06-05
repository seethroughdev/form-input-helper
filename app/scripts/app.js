'use strict';

angular.module('formInputHelperApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inputs', {
        templateUrl: 'views/inputs.html',
        controller: 'InputsCtrl'
      })
      .when('/inputs/:inputType', {
        templateUrl: 'views/input-detail.html',
        controller: 'InputDetailCtrl'
      })
      .otherwise({
        redirectTo: '/inputs/text'
      });
  });
