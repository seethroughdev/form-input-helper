'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function($scope, inputService, $routeParams, $log) {

  var log = $log.log;

  $scope.something = function() {
    log('it changed');
  };

  // set default slide to description
  $scope.slide = 'desc';


});
