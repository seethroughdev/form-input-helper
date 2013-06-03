'use strict';

angular.module('formInputHelperApp')
  .directive('inputHelper', function($log) {
  return {
    template: '<input>',
    restrict: 'A',
    replace: true,
    scope: {
      inputObject: '@',
      bindingHtml: '=bindingHtml'
    },
    link: function(scope, element, attrs) {

      var log = $log.log; // quick log function

      // Watch since resource is async
      scope.$watch('inputObject', function(inputObject) {

        if (inputObject) {
          var obj = angular.fromJson(inputObject),
            valAttr = obj.valueAttr,
            boolAttr = obj.booleanAttr;

          // clean up element
          element.removeAttr('data-input-object');
          element.removeAttr('data-input-helper');
          element.removeAttr('binding-html');

          // set field type
          element.attr('type', obj.type);

          // set valAttr to value
          for (var key in valAttr) {
            if (valAttr.hasOwnProperty(key)) {
              if (valAttr[key]) {
                element.attr(key, valAttr[key]);
              }
            }
          }

          // set boolAttr fields to same value
          for (var key in boolAttr) {
            if (boolAttr.hasOwnProperty(key)) {
              if (boolAttr[key]) {
                element.attr(key, key);
              }
            }
          }

          // wrap radio and checkboxes with labels
          if ((element.parent().hasClass('label-container') === false) &&
            (obj.type === 'radio' || obj.type === 'checkbox')) {
            element.wrap('<label class="label-container">');
            element.parent()
              .append('This is a ' + obj.type + '.');
          }

          // log(element);

          // passing rendered html to codebox
          scope.bindingHtml = element[0].outerHTML;
          log(scope.bindingHtml);
        }
      });
    }
  };
});