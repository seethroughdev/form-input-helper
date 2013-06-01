'use strict';

describe('Directive: datalist', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<datalist></datalist>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the datalist directive');
  }));
});
