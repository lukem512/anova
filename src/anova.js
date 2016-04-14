// ANOVA (Analysis of Variance)
// Luke Mitchell, April 2016
// https://github.com/lukem512/anova

var sm = require('statistical-methods');

function mean(samples) {
	var total = 0, count = 0;
	samples.forEach(function(sample) {
		total += sm.sum(sample);
		count += sample.length;
	});
	return total / count;
}

// Compute the Sum of Squares
var SS = module.exports.SS = function(samples) {
	var treatment = 0, residual = 0, fullMean = mean(samples);

	samples.forEach(function(sample) {
		var mu = sm.mean(sample);
		sample.forEach(function(val) {
			residual += (val - mu) * (val - mu);
		});
		treatment += (mu - fullMean) * (mu - fullMean) * sample.length;
	});

	return {
		total: treatment + residual,
		treatment: treatment,
		residual: residual
	};
};

// Compute the Degrees of Freedom
var DF = module.exports.DF = function(samples) {
	var total = 0;
	samples.forEach(function(sample) {
		total += sample.length;
	});

	var treatment = samples.length - 1; // Numerator
	var residual = total - samples.length;

	return {
		total: treatment + residual,
		treatment: treatment,
		residual: residual
	};
};

// Comptute the Mean Square
var MS = module.exports.MS = function(samples, verbose) {
	var ss = SS(samples);
	var df = DF(samples);

	var results = {
		treatment: ss.treatment / df.treatment,
		residual: ss.residual / df.residual
	};

	if (verbose) {
		results.ss = ss;
		results.df = df;
	}

	return results;
};

// Compute the F-test for one way ANOVA
var test = module.exports.test = function(samples) {
	var ms = MS(samples);
	return ms.treatment / ms.residual;
};

// Output the ANOVA table
var table = module.exports.table = function(samples) {
	var ms = MS(samples, true);

	return {
		treatment: {
			SS: ms.ss.treatment,
			DF: ms.df.treatment,
			MS: ms.treatment,
			F:  ms.treatment / ms.residual
		},
		residual: {
			SS: ms.ss.residual,
			DF: ms.df.residual,
			MS: ms.residual
		},
		total: {
			SS: ms.ss.total,
			DF: ms.df.total
		}
	};
};
