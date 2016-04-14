// ANOVA (Analysis of Variance)
// Luke Mitchell, April 2016
// https://github.com/lukem512/anova

// Perform ANOVA and output the table.

var anova = require('../src/anova');

var samples = [[16, 15, 13, 21, 15],
			   [18, 22, 20, 16, 24],
			   [26, 31, 24, 30, 24]];

console.log(anova.table(samples));