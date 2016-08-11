'use strict';
var _ = require("ramda");

module.exports = function (data, caseSensitive) {
	var dataCopy = caseSensitive ? data : data.toLowerCase();

	var reduceWords = _.reduce(function (obj, curr) {
		if (curr.length > 0) {
			obj[curr] = obj[curr] + 1 || 1;
		}
		return obj;
	}, {});

	var words = reduceWords(dataCopy.split(/[.,() !?/\t\r-]+/g));

	var totalWords = Object.keys(words).map(x => words[x])
										.reduce((total, curr) => {
											total += curr;
											return total;
										}, 0);

	var totalUniqueWords = Object.keys(words).length;

	return {
		words: words,
		stats: {
			totalWords: totalWords,
			totalUniqueWords: totalUniqueWords
		}
	};
};
