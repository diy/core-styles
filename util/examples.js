/**
 * Parse a given list of html files and map to 
 * decorated objects w/ parsed title, href and html for each found
 * example.
 *
 * @package diy-core-styles
 * @author Derek Reynolds <drk@diy.org>
 */

/**
 * Dependencies
 */
var cheerio  = require('cheerio'),
    fs       = require('fs'),
    hg       = require('hypergluten'),
    path     = require('path');

/**
 * Exports
 *
 * @param {array} files - List of file paths to parse
 */
module.exports = function (files) {
    files = files || [];

    return files.map(function (file) {
        var $      = cheerio.load(fs.readFileSync(file)),
            $title = $('.section-heading a');

        return {
            title: $title.text(),
            href: $title.attr('href'),
            'class': 'example ' + path.basename(file, '.html'),
            html: $.html()
        };
    });
};
