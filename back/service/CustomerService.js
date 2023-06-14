'use strict';


/**
 * Create customer
 * This can only be done by the logged in customer.
 *
 * body Customer Created customer object (optional)
 * returns Customer
 **/
exports.createCustomer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "Tony",
  "address" : [ {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  }, {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  } ],
  "id" : 100000,
  "birthDate" : "2019-07-16T22:00:00Z",
  "lastname" : "fehguy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create customer
 * This can only be done by the logged in customer.
 *
 * body Customer Created customer object (optional)
 * returns Customer
 **/
exports.createCustomer = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "Tony",
  "address" : [ {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  }, {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  } ],
  "id" : 100000,
  "birthDate" : "2019-07-16T22:00:00Z",
  "lastname" : "fehguy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete customer
 * This can only be done by the logged in customer.
 *
 * firstname String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteCustomer = function(firstname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get customer by customer name
 *
 * firstname String The name that needs to be fetched. Use customer1 for testing. 
 * returns Customer
 **/
exports.getCustomerByName = function(firstname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstname" : "Tony",
  "address" : [ {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  }, {
    "zip" : "94301",
    "city" : "Palo Alto",
    "street" : "437 Lytton"
  } ],
  "id" : 100000,
  "birthDate" : "2019-07-16T22:00:00Z",
  "lastname" : "fehguy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update customer
 * This can only be done by the logged in customer.
 *
 * body Customer Update an existent customer in the store (optional)
 * firstname String name that need to be deleted
 * no response value expected for this operation
 **/
exports.updateCustomer = function(body,firstname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update customer
 * This can only be done by the logged in customer.
 *
 * body Customer Update an existent customer in the store (optional)
 * firstname String name that need to be deleted
 * no response value expected for this operation
 **/
exports.updateCustomer = function(body,firstname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

