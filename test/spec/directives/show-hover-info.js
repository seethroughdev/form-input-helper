'use strict';

describe('Directive: showHoverInfo', function () {
  beforeEach(module('formInputHelperApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<show-hover-info></show-hover-info>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the showHoverInfo directive');
  }));
});
