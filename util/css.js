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
 * Compile a less tree in to autoprefixed css w/ sourcemaps.
 *
 * @param {object} tree - Tree object from parsed .less file.
 *
 * @return {string} Compiled css
 */
function toCSS (tree) {
    return tree.toCSS({
        sourceMap: true
    })
}

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

            callback(null, toCSS(tree));
        }
    );
};

