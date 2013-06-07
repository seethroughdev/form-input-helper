'use strict';

angular.module('formInputHelperApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inputs/:inputType', {
        templateUrl: 'views/layout.html',
        controller: 'InputDetailCtrl'
      })
      .otherwise({
        redirectTo: '/inputs/text'
      });
  });
