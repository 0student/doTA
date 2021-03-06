/* global process */
var ARGV = process.argv;
var DEBUG = +ARGV[2] >= 2;
var FILTER = ARGV[3] && ARGV[3].toLowerCase();
// console.log(ARGV);

var doTA = require('../dist/doTA' + (DEBUG ? '' : '.min'));
var templates = require('../fixtures/custom');
var timer = require('./timer');

timer(1);
for (var k in templates) {
	if (FILTER && k.toLowerCase().indexOf(FILTER) === -1) { continue; }
	var v = templates[k];
	var fn = doTA.compile(v, {debug: 0, encode: 0, event: 1, strip: 1, optimize: 1, watchDiff: 1, diffLevel: 2});
	console.log(k, v, v.length);
	var fnStr = fn.toString();
	console.log(fnStr, fnStr.length, '\n');
}
timer(1, 'compile');