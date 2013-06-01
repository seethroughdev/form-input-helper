'use strict';

angular.module('formInputHelperApp')
  .directive('inputHelper', function($log) {
  return {
    template: '<input>',
    restrict: 'A',
    replace: true,
    scope: {
      input: '@inputObject'
    },
    link: function (scope, element, attrs) {

      var log = $log.log; // quick log function

      // Set a watch because the link function is running before $resource
      scope.$watch('input', function(input) {

        var addAttr = function(key, value) {
          element.attr(key, value);
        };

        if (input) {
          var obj = angular.fromJson(input),
              attr = obj.attr,
              links = obj.links;

          // clean up element
          element.removeAttr('data-input-object');
          element.removeAttr('data-input-helper');

          // set field type
          element.attr('type', obj.type);

          // Add appropriate attributes
          if (attr.autofocus) {addAttr('autofocus', 'autofocus');}
          if (attr.checked) {addAttr('checked', '');}
          if (attr.maxlength) {addAttr('maxlength', '20');}
          if (attr.list) {addAttr('list', 'list-choices');}
          if (attr.min) {addAttr('min', '2');}
          if (attr.max) {addAttr('max', '20');}
          if (attr.name) {addAttr('name', obj.type + 'Name');}
          if (attr.pattern) {addAttr('pattern', '[a-zA-Z0-9]+');}
          if (attr.placeholder) {addAttr('placeholder', obj.type + ' field');}
          if (attr.size) {addAttr('size', '20');}
          if (attr.step) {addAttr('step', '1');}
          if (attr.value) {addAttr('value', '');}
          if (attr.accept) {addAttr('accept', 'image/*');}

          if (obj.type === 'reset') {
            addAttr('value', 'Reset Button')
          }

          if (obj.type === 'submit') {
            addAttr('value', 'Submit')
          }

          log(element[0].outerHTML);
        }

      });
    }
  };
});