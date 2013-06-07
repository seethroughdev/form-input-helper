'use strict';

angular.module('formInputHelperApp')
  .directive('datalist', function () {
    return {
      templateUrl: 'views/partials/datalist.html',
      restrict: 'A',
      replace: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
