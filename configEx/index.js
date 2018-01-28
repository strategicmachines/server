'use strict';

//////////////////////////////////////////////////////////////////////////
/////////////////        Unit test server configs  //////////////////////
////////////////////////////////////////////////////////////////////////

exports.port = process.env.PORT || 5002
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`
exports.init = function(){return require('./config.json')}