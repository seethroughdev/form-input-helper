'use strict';

describe('Directive: cssTip', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<css-tip></css-tip>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the cssTip directive');
  }));
});
