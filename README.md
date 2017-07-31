# ANOVA

[![Build Status](https://travis-ci.org/lukem512/anova.svg?branch=master)](https://travis-ci.org/lukem512/anova) ![Build Status](https://david-dm.org/lukem512/anova.svg) [![npm](https://img.shields.io/npm/l/anova.svg)](https://www.npmjs.com/package/anova) [![npm](https://img.shields.io/npm/v/anova.svg)](https://www.npmjs.com/package/anova) [![npm](https://img.shields.io/npm/dm/anova.svg)](https://www.npmjs.com/package/anova)

An NPM module providing the *Analysis of Variance* (ANOVA) parametric statistical test. When performing ANOVA, individual observations (values) are grouped into treatments (samples, arrays of values). The analysis is performed on an array of treatments and results in an F-value. Additional values, such as the Sum of Squares, can be computed using the functions described below.

To use it, simply [install via NPM](https://www.npmjs.com/package/anova/tutorial) and include it in your project file.

```js
var anova = require('anova');
```

To compute the F-test of an array of samples use the `test` function:

```js
var samples = [[3,3,5,1], [1,2,3]];
console.log(anova.test(samples)); // 0.8571428571428572
```

To compute the Sum of Squares use the `SS` function:

```js
var ss = anova.SS(samples);
console.log('The between treatments SS is:', ss.treatments);
console.log('The error or residual SS is:', ss.residual);
console.log('The total SS is:', ss.total);
```

To compute the Degrees of Freedom use the `DF` function:

```js
var df = anova.DF(samples);
console.log('The between treatments DF is:', df.treatments);
console.log('The error or residual DF is:', df.residual);
console.log('The total DF is:', df.total);
```

To compute the Mean Squared use the `MS` function:

```js
var ms = anova.MS(samples);
console.log('The between treatments MS is:', ms.treatments);
console.log('The error or residual MS is:', ms.residual);
```

### Related Modules

- [brown-forsythe-test](https://github.com/lukem512/brown-forsythe-test)
- [levene-test](https://github.com/lukem512/levene-test)
- [mann-whitney-utest](https://github.com/lukem512/mann-whitney-utest)
- [statistical-methods](https://github.com/lukem512/statistical-methods)

### License

MIT © Luke Mitchell
