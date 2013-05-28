'use strict';

angular.module('formInputHelperApp')
  .factory('getInputs', function ($http) {

    var url = '/inputs.json';

    var inputsService = {
      getInputs: function() {
        $http.get(url);
      }
    };

    // Public API here
    return inputsService;
  });
