'use strict';

describe('Directive: selectBox', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<select-box></select-box>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the selectBox directive');
  }));
});
