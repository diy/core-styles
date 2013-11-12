var fs   = require('fs'),
    css  = require('./util/css'),
    less = require('./util/less'),
    p    = __dirname + '/index.less';

function _less () {
    return less(p);
}

function _css (callback) {
    css(p, callback);
}

function createReadStream () {
    return fs.createReadStream(p);
}

module.exports = {
    path: p,
    less: _less,
    css: _css,
    createReadableStream: createReadStream
};
