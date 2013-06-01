'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function($scope, inputService, $routeParams) {

  $scope.inputType = $routeParams.inputType;

  inputService.getInputs().then(function(d) {
    var inputsList = d.inputTypes;
    // iterate through input types based on $routeParam
    var findInput = function(val) {
      for (var i = inputsList.length - 1; i >= 0; i--) {
        if (inputsList[i].type === val) {
          return inputsList[i];
        }
      }
    };
    // assign $scope.input
    $scope.input = findInput($scope.inputType);
    return;
  });

  // // getting variable out of $scope for faster loop
  // var inputsList = $scope.inputs;
  // var inputType = $scope.inputType;


});