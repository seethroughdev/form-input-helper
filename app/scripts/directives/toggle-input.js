'use strict';

angular.module('formInputHelperApp')
  .directive('toggleInput', function($rootScope) {

  return {
    restrict: 'A',
    scope: {
      value: '@',
      key: '@'
    },
    link: function postLink(scope, element) {

      // get input field behind checkbox
      var inputField = element.prev();

      element.addClass(scope.key + '-checker');

      // bind behavior of checkbox to input fields
      element.bind('change', function() {
        if (element.prop('checked')) {
          element.attr('checked', 'checked');
          inputField
            .removeAttr('disabled')
            .focus()
            .val(scope.value);

          // testing with broadcast to fire that $watch event -al
          $rootScope.$broadcast('cattt', [1,2,3]);

        } else {
          element.removeAttr('checked');
          inputField
            // .val('')
            .attr('disabled', 'disabled');
        }
      });

      // This forces data onLoad, but not on changeInput()
      // if (element.hasClass('placeholder-checker')) {
      //   element.attr('checked', 'checked');
      //   inputField
      //       .removeAttr('disabled')
      //       .focus()
      //       .val(scope.value);
      // };

    }
  };
});