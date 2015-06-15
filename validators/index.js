// dependencies ------------------------------------------------------

var async  = require('async');
var utils  = require('../utils');

var TSV    = require('./tsv');
var JSON   = require('./json');
var BIDS   = require('./bids');

// public api --------------------------------------------------------

var validate = {
	BIDS: BIDS,
	BIDSPath: BIDSPath,
	JSON: JSON,
	TSV: TSV
};

// implementations ---------------------------------------------------


function BIDSPath (path, callback) {
    utils.readDir(path, function (files) {
        BIDS(files, function (errors) {
            callback(errors);
        });
    });
}



// exports -----------------------------------------------------------

module.exports = validate;