'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function ($scope, inputService, $routeParams) {

    $scope.inputType = $routeParams.inputType;

    inputService.getInputs().then(function(d) {
        $scope.inputs = d.inputTypes;
    });

  });
