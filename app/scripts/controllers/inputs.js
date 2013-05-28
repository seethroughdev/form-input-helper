'use strict';

angular.module('formInputHelperApp')
  .controller('InputsCtrl', function ($scope, inputService) {
    inputService.getInputs().then(function(d) {
        $scope.inputs = d.inputTypes;
    });
  });
