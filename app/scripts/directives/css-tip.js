'use strict';

angular.module('formInputHelperApp')
  .directive('cssTip', function() {
  return {
    templateUrl: 'views/partials/css-tip.html',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {

    }
  };
});