'use strict';

angular.module('formInputHelperApp')
  .directive('toggleInput', function($log) {

  var log = $log.log;

  log('toggle-input ran');



  return {
    restrict: 'A',
    scope: {
      value: '@'
    },
    link: function postLink(scope, element) {

      var inputField = element.next();
      element.bind('change', function() {
        if (element.prop('checked')) {
          inputField.removeAttr('disabled');
          inputField[0].value = scope.value;
        } else {
          inputField.attr('disabled', 'disabled');
          inputField[0].value = '';
        }
      });

    }
  };
});