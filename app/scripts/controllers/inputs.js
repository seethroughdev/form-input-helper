'use strict';

angular.module('formInputHelperApp')
  .controller('InputsCtrl', function($scope, inputService, $routeParams, $log, $location, $route, resetInputs) {


  // quick function for logging
  // var log = $log.log;

  // setting switch to test routehack
  var routeHack = false;

  // get inputType from URL
  var inputType = $scope.inputType = $routeParams.inputType;

  var init = function() {
    resetInputs.resetInputs();
    setActiveLink(inputType);
  };

  // yes, dom manipulation in controllers is bad!  Need to move...
  var setActiveLink = function(type) {
    var inputTypeLink = '.' + type + '-link';
    $('.type-link a').removeClass('is-active');
    $(inputTypeLink).find('a').addClass('is-active');
  };

  // get data
  inputService.getInputs().then(function(d) {
    var inputsList = $scope.inputsList = d.inputTypes;

    // iterate through input types based on $routeParam
    var findInput = function(val, offset) {
      if (!offset || !angular.isNumber(offset)) {
        offset = 0;
      }
      for (var i = inputsList.length - 1; i >= 0; i--) {
        if (inputsList[i].type === val) {
          return inputsList[i + offset];
        }
      }
    };

    // assign $scope.input
    $scope.input = findInput(inputType);

    $scope.changeInput = function(inputType, offset) {
      // hack to prevent reload of page when changing $location.path()
      // http://stackoverflow.com/questions/12422611/angularjs-paging-with-location-path-but-no-ngview-reload

      if (routeHack) {
        var lastRoute = $route.current;
        $scope.$on('$locationChangeSuccess', function() {
          $route.current = lastRoute;
        });
      }


      inputType = inputType || $routeParams.inputType;
      $scope.input = findInput(inputType, offset);
      $location.path('/inputs/' + inputType);

      // setting prev/next buttons
      $scope.prevInputType = findInput(inputType, -1);
      $scope.nextInputType = findInput(inputType, 1);

      setActiveLink(inputType);
      resetInputs.resetInputs();
    };

    // create navigation links
    $scope.prevInputType = findInput($routeParams.inputType, -1);
    $scope.nextInputType = findInput($routeParams.inputType, 1);

    return;
  });

  init();

});