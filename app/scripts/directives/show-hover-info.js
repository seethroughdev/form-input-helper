'use strict';

angular.module('formInputHelperApp')
  .directive('showHoverInfo', function () {
    return {
      template: '<label ng-transclude></label>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        element.bind('mouseenter', function() {
        	var klass = element[0].className;
          console.log(klass);
        });
      }
    };
  });
