'use strict';

describe('Controller: InputDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('formInputHelperApp'));

  var InputDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputDetailCtrl = $controller('InputDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
