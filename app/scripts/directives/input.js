'use strict';

angular.module('formInputHelperApp')
  .directive('inputHelper', function($log) {
  return {
    template: '<input>',
    restrict: 'A',
    replace: true,
    scope: {
      inputObject: '@'
    },
    link: function (scope, element, attrs) {

      var log = $log.log; // quick log function

      // Watch since resource is async
      scope.$watch('inputObject', function(inputObject) {

        if (inputObject) {
          var obj = angular.fromJson(inputObject),
              attr = obj.attr;

          // clean up element
          element.removeAttr('data-input-object');
          element.removeAttr('data-input-helper');

          // set field type
          element.attr('type', obj.type);

          // Add appropriate attributes
          if (attr.autofocus) {element.attr('autofocus', 'autofocus');}
          if (attr.checked) {element.attr('checked', '');}
          if (attr.maxlength) {element.attr('maxlength', '20');}
          if (attr.list) {element.attr('list', 'list-choices');}
          if (attr.min) {element.attr('min', '2');}
          if (attr.max) {element.attr('max', '20');}
          if (attr.name) {element.attr('name', obj.type + 'Name');}
          if (attr.pattern) {element.attr('pattern', '');}
          if (attr.placeholder) {element.attr('placeholder', obj.type + ' field');}
          if (attr.size) {element.attr('size', '20');}
          if (attr.step) {element.attr('step', '1');}
          if (attr.value) {element.attr('value', '');}
          if (attr.accept) {element.attr('accept', 'image/*');}

          if (obj.type === 'reset') {
            element.attr('value', 'Reset Button');
          }

          if (obj.type === 'submit') {
            element.attr('value', 'Submit');
          }

          if (obj.type === 'radio' || obj.type === 'checkbox') {
            element.wrap('<label>');
            element.parent()
              .append('This is a ' + obj.type + '.');
          }

          log(element[0].outerHTML);

        }

      });
    }
  };
});