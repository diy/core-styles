/**
 * Wrapper for less parser aware of diy-core-styles environment.
 *
 * @package diy-core-styles
 * @author Derek Reynolds <drk@diy.org>
 */

/**
 * Dependencies
 */
var fs   = require('fs'),
    less = require('less');

/**
 * Exports
 *
 * @param {string} p - Path to target less file
 * @param {function} callback
 */
module.exports = function (p, callback) {
    var parser = new(less.Parser)({
        paths: __dirname + '/../'
    });

    parser.parse(
        fs.readFileSync(p).toString(), 
        function (err, tree) {
            if (err) return callback(err);

            callback(null, tree);
        }
    );
};
