# ministat.js #

* http://github.com/deanh/ministat.js

## Description ##

This is a simple package that generates simple statistical info on numerical data sets of a single variable. It’s nothing too fancy, but maybe just enough to coat your numbers with a thin layer of science. Or, at least to get you thinking about what it may take to do so.

It's a stright port of my ruby gem by the same name: http://github.com/deanh/MiniStat

## Features / Problems ##

* It’s small and simple
* It’s probably good enough
* I haven’t profiled it against large data sets
* Naive median implementation requires a sort, but it could be done in linear time. Patches welcome.
* Missing tests. Working a unit testing framework that I like.

## Synopsis ##

d = MiniStat.newData([1,2,3,4,5,6,7,7,6,5,4,4]);  // => Object
d.getData();                                      // => [1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7]
d.median();                                       // => 4.5
d.mean();                                         // => 4.5
d.mode();                                         // => 4
d.q1();                                           // => 3.5
d.outliers();                                     // => []
d.stdDev();                                       // => 1.8027756377319946
d.variance();                                     // => 3.25
d.geometricMean();                                // => 4.00310963496394
d.harmonicMean();                                 // => 3.3311302048909455
d.iqr();                                          // => 2.5
d.q3();                                           // => 6

## LICENSE ##

(The MIT License)

Copyright © 2010 Dean Hudson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.