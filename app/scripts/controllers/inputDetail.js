'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function ($scope, inputService, $routeParams) {
    $scope.inputType = $routeParams.inputType;
  });
