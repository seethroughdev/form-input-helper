'use strict';

angular.module('formInputHelperApp')
  .directive('toggleInput', function() {

  return {
    restrict: 'A',
    scope: {
      value: '@'
    },
    link: function postLink(scope, element) {
      var inputField = element.prev();

      element.bind('change', function() {
        if (element.prop('checked')) {
          inputField
            .val(scope.value)
            .removeAttr('disabled');
        } else {
          inputField
            // .val('')
            .attr('disabled', 'disabled');
        }
      });

    }
  };
});