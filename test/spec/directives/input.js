'use strict';

describe('Directive: input', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<input></input>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the input directive');
  }));
});
