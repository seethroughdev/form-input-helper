'use strict';

angular.module('formInputHelperApp')
  .directive('cssTip', function() {
  return {
    templateUrl: 'views/partials/css-tip.html',
    restrict: 'A',
    link: function postLink(scope, element, attrs) {

    }
  };
});