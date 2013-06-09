'use strict';

describe('Service: resetInputs', function () {

  // load the service's module
  beforeEach(module('formInputHelperApp'));

  // instantiate service
  var resetInputs;
  beforeEach(inject(function (_resetInputs_) {
    resetInputs = _resetInputs_;
  }));

  it('should do something', function () {
    expect(!!resetInputs).toBe(true);
  });

});
