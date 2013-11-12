/**
 * @node isn't quite ready yet... recess isn't 100% ready for linting
 */
var fs   = require('fs'),
    temp = require('temp'),
    test = require('recess-tap'),

    ds   = require('../../index.js');

temp.track();

temp.mkdir('diy-core-styles-test', function (err, dirPath) {
    ds.css(function (err, css) {
        fs.writeFileSync(dirPath + '/index.css', css);
        
        test(dirPath + '/index.css');
    });
});
