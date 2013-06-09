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
    link: function(scope, element) {

      var log = $log.log; // quick log function

      // sort obj function from
      var sortObj = function(obj) {
        var key, tempArry = [],
          i, tempObj = {};
        for (key in obj) {
          tempArry.push(key);
        }
        tempArry.sort();
        for (i = 0; i < tempArry.length; i++) {
          tempObj[tempArry[i]] = obj[tempArry[i]];
        }
        return tempObj;
      };

      // Watch since resource is async
      scope.$watch('inputObject', function(inputObject) {
        var key;

        if (inputObject) {
          var obj = angular.fromJson(inputObject),
            valAttr = sortObj(obj.valueAttr),
            boolAttr = obj.booleanAttr;

          // clean up element
          var attributes = element[0].attributes;
          var i = attributes.length;
          while( i-- ){
            element[0].removeAttributeNode(attributes[i]);
          }

          // set field type
          element
            .attr('type', obj.type)
            .attr('name', obj.type + '_id');

          // set valAttr to value
          for (key in valAttr) {
            if (valAttr.hasOwnProperty(key)) {
              if (valAttr[key] && valAttr[key].length > 0
                && $('.' + key + '-checker').prop('checked')) {
                  element.attr(key, valAttr[key]);
              } else {
                element.removeAttr(key);
              }
            }
          }

          // set boolAttr fields to same value
          for (key in boolAttr) {
            if (boolAttr.hasOwnProperty(key)) {
              if (boolAttr[key]) {
                element.attr(key, key);
              } else {
                element.removeAttr(key);
              }
            }
          }

          // wrap radio and checkboxes with labels
          if (!(element.parent().hasClass('label-container')) &&
            (obj.type === 'radio' || obj.type === 'checkbox')) {
            element.wrap('<label class="label-container">');
            element.parent()
              .append('This is a ' + obj.type + '.');
          }

          // passing rendered html to codebox
          scope.bindingHtml = element[0].outerHTML;
          log(scope.bindingHtml);
        }
      });
    }
  };
});