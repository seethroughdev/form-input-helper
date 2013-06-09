'use strict';

angular.module('formInputHelperApp')
  .directive('toggleInput', function() {

  return {
    restrict: 'A',
    scope: {
      value: '@',
      key: '@'
    },
    link: function postLink(scope, element) {
      var inputField = element.prev();

      element.addClass(scope.key + '-checker');



      element.bind('change', function() {
        if (element.prop('checked')) {
          element.attr('checked', 'checked');
          inputField
            .val(scope.value)
            .removeAttr('disabled');
        } else {
          inputField
            // .val('')
            .attr('disabled', 'disabled');
          element.removeAttr('checked');
        }
      });

    }
  };
});