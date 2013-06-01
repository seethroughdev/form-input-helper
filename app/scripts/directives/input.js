'use strict';

angular.module('formInputHelperApp')
  .directive('inputHelper', function($log) {
  return {
    template: '<input>',
    restrict: 'A',
    replace: true,
    scope: {
      input: '@inputType'
    },
    link: function (scope, element, attrs) {

      var log = $log.log; // quick log function

      // Set a watch because the link function is running before $resource
      scope.$watch('input', function(input) {
        if (input) {
          var obj = angular.fromJson(input),
              attr = obj.attr,
              links = obj.links;

          // Add appropriate attributes
          if (attr.autofocus) {element.attr('autofocus', '');}
          if (attr.checked) {element.attr('checked', '');}
          if (attr.maxlength) {element.attr('maxlength', '10');}
          if (attr.list) {element.attr('list', 'list-choices');}
          if (attr.min) {element.attr('min', '2');}
          if (attr.max) {element.attr('max', '10');}
          if (attr.name) {element.attr('name', obj.type + 'Name');}
          if (attr.pattern) {element.attr('pattern', '[a-zA-Z0-9]+');}
          if (attr.placeholder) {element.attr('placeholder', obj.type + 'field');}
          if (attr.size) {element.attr('size', '10');}
          if (attr.step) {element.attr('step', '1');}
          if (attr.value) {element.attr('value', obj.type + 'Value');}
          if (attr.accept) {element.attr('accept', 'image/*');}

        }
      });
    }
  };
});