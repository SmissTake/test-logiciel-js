'use strict';

var utils = require('../utils/writer.js');
var Customer = require('../service/CustomerService');

module.exports.createCustomer = function createCustomer (req, res, next, body) {
  Customer.createCustomer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCustomer = function createCustomer (req, res, next, body) {
  Customer.createCustomer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomer = function deleteCustomer (req, res, next, firstname) {
  Customer.deleteCustomer(firstname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomerByName = function getCustomerByName (req, res, next, firstname) {
  Customer.getCustomerByName(firstname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomer = function updateCustomer (req, res, next, body, firstname) {
  Customer.updateCustomer(body, firstname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomer = function updateCustomer (req, res, next, body, firstname) {
  Customer.updateCustomer(body, firstname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
