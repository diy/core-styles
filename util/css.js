/**
 * Compile less file in to css
 *
 * @package diy-core-styles
 * @author Derek Reynolds <drk@diy.org>
 */

/**
 * Dependencies
 */
var less = require('./less');

/**
 * Exports
 *
 * @param {string} p - Path to target less file
 * @param {function} callback
 */
module.exports = function (p, callback) {
    less(
        p, 
        function (err, tree) {
            if (err) return callback(err);

            callback(null, tree.toCSS({
                sourceMap: true
            }));
        }
    );
};

