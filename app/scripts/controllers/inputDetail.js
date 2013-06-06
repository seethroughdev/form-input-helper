'use strict';

angular.module('formInputHelperApp')
  .controller('InputDetailCtrl', function($scope, inputService, $routeParams, $log, $location) {

  var log = $log.log;

  var inputType = $scope.inputType = $routeParams.inputType;

  inputService.getInputs().then(function(d) {
    var inputsList = d.inputTypes;
    // iterate through input types based on $routeParam
    var findInput = function(val, offset) {
      if (!offset || !angular.isNumber(offset)) {
        offset = 0;
      }
      for (var i = inputsList.length - 1; i >= 0; i--) {
        if (inputsList[i].type === val) {
          return inputsList[i+offset];
        }
      }
    };

    var buildTypeUrl = function(inputType) {
      return '/#/inputs/' + inputType;
    };

    // assign $scope.input
    var input = $scope.input = findInput(inputType);

    // navigation links
    var prevInputType = $scope.prevInputType = findInput(inputType, -1);
    var nextInputType = $scope.nextInputType = findInput(inputType, 1);
    $scope.prevInputTypeLink = buildTypeUrl(prevInputType.type);
    $scope.nextInputTypeLink = buildTypeUrl(nextInputType.type);


    $scope.selectorType = 'input[type="' + inputType + '"]';

    $scope.slide = 'desc';


    return;
  });

  // // getting variable out of $scope for faster loop
  // var inputsList = $scope.inputs;
  // var inputType = $scope.inputType;


});