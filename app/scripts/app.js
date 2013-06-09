'use strict';

angular.module('formInputHelperApp', ['ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inputs/:inputType', {
        templateUrl: 'views/layout.html',
        controller: 'InputsCtrl'
      })
      .otherwise({
        redirectTo: '/inputs/text'
      });
  });
