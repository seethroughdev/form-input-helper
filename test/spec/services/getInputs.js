'use strict';

describe('Service: getInputs', function () {

  // load the service's module
  beforeEach(module('formInputHelperApp'));

  // instantiate service
  var getInputs;
  beforeEach(inject(function (_getInputs_) {
    getInputs = _getInputs_;
  }));

  it('should do something', function () {
    expect(!!getInputs).toBe(true);
  });

});
