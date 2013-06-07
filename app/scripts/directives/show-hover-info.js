'use strict';

angular.module('formInputHelperApp')
  .directive('showHoverInfo', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      element.bind('mouseenter', function() {
        var klass = element[0].className;
        console.log(klass);
      });
    }
  };
});