/**
 * Parse all examples and build styleguide.
 *
 * @package diy-core-styles
 * @author Derek Reynolds <drk@diy.org>
 */

/**
 * Dependencies
 */
var autoprefixer = require('autoprefixer'),
    fs           = require('fs'),
    glob         = require('glob'),
    hg           = require('hypergluten');

/**
 * Constants
 */
EXAMPLES_DIR = __dirname + '/examples/*.html';

/**
 * Util
 */
var css      = require('./util/css');
var examples = require('./util/examples')(glob.sync(EXAMPLES_DIR));

// Render table of contents
var toc = examples.map(function (ex) {
    return {
        a: {
            href: ex.href,
            _text: ex.title 
        }
    }
});

// Render all example html
var body = examples.map(function (ex) {
    return {
        div: {
            _html: ex.html,
            'class': ex.class
        }
    }
});

// Build index.html
fs.writeFileSync(
    __dirname + '/public/index.html', 
    hg(fs.readFileSync(__dirname + '/templates/_html.html').toString(), {
        navItem: toc,
        example: body
    }).innerHTML
);

/**
 * Build main.css which includes styleguide specific css.
 *
 * main.less imports index.less and all diy-core-style components.
 */
css(__dirname + '/public/main.less', function (err, css) {
    if (err) return console.error(err);

    fs.writeFileSync(
        __dirname + '/public/main.css', 
        autoprefixer.compile(css)
    );
});
