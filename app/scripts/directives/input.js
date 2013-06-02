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
    link: function(scope, element, attrs) {

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
          if (attr.autofocus) {
            element.attr('autofocus', 'autofocus');
          } else {
            element.removeAttr('autofocus');
          }
          if (attr.checked) {
            element.attr('checked', 'checked');
          } else {
            element.removeAttr('checked');
            element[0].checked = false;
          }
          if (attr.maxlength) {
            element.attr('maxlength', '20');
          } else {
            element.removeAttr('maxlength');
          }
          if (attr.list) {
            element.attr('list', 'list-choices');
          } else {
            element.removeAttr('list');
          }
          if (attr.min) {
            element.attr('min', '2');
          } else {
            element.removeAttr('min');
          }
          if (attr.max) {
            element.attr('max', '20');
          } else {
            element.removeAttr('max');
          }
          if (attr.readonly) {
            element.attr('readonly', 'readonly');
          } else {
            element.removeAttr('readonly');
          }
          if (attr.name) {
            element.attr('name', obj.type + 'Name');
          } else {
            element.removeAttr('name');
          }
          if (attr.pattern) {
            element.attr('pattern', '[a-zA-Z0-9]+');
          } else {
            element.removeAttr('pattern');
          }
          if (attr.placeholder) {
            element.attr('placeholder', obj.type + ' field');
          } else {
            element.removeAttr('placeholder');
          }
          if (attr.size) {
            element.attr('size', '20');
          } else {
            element.removeAttr('size');
          }
          if (attr.step) {
            element.attr('step', '1');
          } else {
            element.removeAttr('step');
          }
          if (attr.value) {
            element.attr('value', element.val() || '');
          }
          if (attr.accept) {
            element.attr('accept', 'image/*');
          }

          if (obj.type === 'reset') {
            element.attr('value', 'Reset Button');
          }

          if (obj.type === 'submit') {
            element.attr('value', 'Submit');
          }

          if ((element.parent().hasClass('label-container') === false) &&
            (obj.type === 'radio' || obj.type === 'checkbox')) {
            element.wrap('<label class="label-container">');
            element.parent()
              .append('This is a ' + obj.type + '.');
          }

          log(element);
          log(element[0].outerHTML);

        }

      });
    }
  };
});