'use strict';

describe('Directive: toggleInput', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<toggle-input></toggle-input>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the toggleInput directive');
  }));
});
