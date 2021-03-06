/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

function register(module) {
  module.service('brPasswordService', factory);
}

/* @ngInject */
function factory($http) {
  var service = {};

  service.login = function(authData) {
    // POST identity for verification and to establish session
    // TODO: make URL configurable
    return Promise.resolve($http.post('/authn/password/login', authData))
      .then(function(response) {
        return response.data;
      });
  };

  service.resetPassword = function(options) {
    // TODO: make URL configurable
    return Promise.resolve($http.post('/authn/password/reset', options))
      .then(function(response) {
        return response.data;
      });
  };

  service.sendPasscode = function(options) {
    // TODO: make URL configurable
    return Promise.resolve($http.post('/authn/password/passcode', options));
  };

  return service;
}

return register;

});
