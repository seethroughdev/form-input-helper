'use strict';

angular.module('formInputHelperApp')
  .factory('resetInputs', function () {

    var reset = {
      resetInputs: function() {
        var inputs = $('input', '#display-form').not('[type="submit"]');
        inputs.each(function() {
          $(this).val('');
        });
      }
    };

    // Public API here
    return reset;
  });
