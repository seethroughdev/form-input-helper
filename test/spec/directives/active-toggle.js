'use strict';

describe('Directive: activeToggle', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<active-toggle></active-toggle>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the activeToggle directive');
  }));
});
