'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function($scope, inputService, $routeParams, $log) {

  var log = $log.log;

  $scope.something = function() {
    log('it changed');
  };

  $scope.selectorType = 'input[type="' + inputType + '"]';




});