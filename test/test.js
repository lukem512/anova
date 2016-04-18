// ANOVA (Analysis of Variance)
// Luke Mitchell, April 2016
// https://github.com/lukem512/anova

var anova = require('../src/anova');

var tests = [
	{
		name: 'Simple ANOVA test #1',
		expected: 0.8571,
		rejected: false,
		samples: [
			[3,3,5,1],
			[1,2,3]
		]
	},

	{
		name: 'Simple ANOVA test #2',
		expected: 50,
		rejected: false,
		samples: [
			[1,2,3,4,5],
			[6,7,8,9,10],
			[11,12,13,14,15]
		]
	},

	{
		name: 'Simple ANOVA test #3',
		expected: 8.2540,
		rejected: false,
		samples: [
		    [13, 2, 53, 213, 12],
		    [123, 554, 646, 455, 543],
		    [12, 13, 312, 223, 111],
		    [53, 34, 54, 334, 4]
    	]
	},

	// http://www.cimt.plymouth.ac.uk/projects/mepres/alevel/fstats_ch7.pdf
	{
		name: 'Simple ANOVA test #4',
		expected: 15.5,
		rejected: false,
		samples: [
		    [16, 15, 13, 21, 15],
		    [18, 22, 20, 16, 24],
		    [26, 31, 24, 30, 24]
    	]
	},
];

var returnCode = 0;

tests.forEach(function(t) {
	try {
		var u = anova.test(t.samples);
		if (!t.expected) throw Error('Unexpected results');
		if (Math.abs(u - t.expected) > 0.0001) throw Error('Returned results did not match expected results (' + u + ')');
	} catch (err) {
		if (!t.rejected) {
			console.error(t.name, err);
			returnCode = 1;
		}
	}
});

process.exit(returnCode);
