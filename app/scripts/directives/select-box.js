'use strict';

angular.module('formInputHelperApp').directive('selectBox', function() {

  return {
    template: '<select></select>',
    replace: true,
    restrict: 'A',
    link: function postLink(scope, element) {
      if (scope.input.type !== 'date') {
        return;
      } else {
        var formats = scope.input.formats;
        for (var i = 0; i < formats.length; i++) {
          var option = formats[i];
          var string = '<option value="' + option + '">' + option + '</option>';
          element.append(string);
        }
      }
    }
  };
});