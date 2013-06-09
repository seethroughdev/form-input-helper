'use strict';

angular.module('formInputHelperApp')
  .directive('activeToggle', function() {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs) {
      element.bind('click', function() {
        element
          .addClass('active');
        element
          .parent()
          .siblings()
          .children()
          .removeClass('active');
      });
    }
  };
});