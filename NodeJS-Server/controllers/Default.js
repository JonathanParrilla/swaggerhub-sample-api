'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.usersUserIdGET = function usersUserIdGET (req, res, next) {
  Default.usersUserIdGET(req.swagger.params, res, next);
};
