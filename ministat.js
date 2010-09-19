var MiniStat = (function () {    
    var datasets = [];
    return {
        datasets: function () { return datasets.slice() },

        newData: function (data) {
            var sorted = false;
            var hist = {};
            var dataset = {
                sort: function () {
                    data.sort(function (a,b) {return a - b;});
                    sorted = true;
                    return this;
                },
            
                setData: function (inData) {
                    data = inData;
                    this.sort();
                    return this;
                },
        
                getData: function () {
                    return data.slice(); // return a copy!
                },

                median: function (inData) {
                    var myData = inData || data;
                    var split;
                    if (myData.length % 2 === 0) {
                        return (myData[myData.length / 2 - 1] + myData[myData.length / 2]) / 2;
                    } else {
                        return myData[(myData.length - 1)/2];
                    }
                },

                partition: function (pivot, inData) {
                    var low  = [];
                    var high = [];
                    var myData = inData || data;
                    var i = 0;
                    for (i = 0; i < myData.length; i++) {
                        if (myData[i] < pivot) {
                            low.push(myData[i]);
                        }
                        if (myData[i] > pivot) {
                            high.push(myData[i]);
                        }
                    }
                    return { low: low, high: high};
                },

                q1: function () {
                    return this.median(this.partition(this.median()).low);
                },

                q3: function () {
                    return this.median(this.partition(this.median()).high);
                },

                iqr: function () {
                    return this.q3() - this.q1();
                },

                outliers: function () {
                    var min = this.q1() - (1.5 * this.iqr());
                    var max = this.q3() + (1.5 * this.iqr());
                    var ar = [], i = 0;
                    for (i = 0; i < data.length; i++) {
                        if (data[i] < min || data[i] > max) {
                            ar.push(data[i]);
                        }
                    }
                    return ar;
                },
                
                mean: function () {
                    var sum = 0;
                    var i = 0;
                    for (i = 0; i < data.length; i++) {
                        sum = sum + data[i];
                    }
                    return sum / data.length;
                },
                
                // we calculate the histogram en route since it's
                // right there. not sure if this is bad.
                mode: function () {
                    hist = {};
                    var maxFreq = 0;
                    var mode = 0;
                    var i = 0;
                    for (i = 0; i < data.length; i++) {
                        hist[data[i]] = hist[data[i]] || 0;
                        hist[data[i]] = hist[data[i]] + 1;
                        if (hist[data[i]] > maxFreq) {
                            maxFreq = hist[data[i]];
                            mode = data[i];
                        }
                    }
                    return mode;
                },

                variance: function () {
                    var sum = 0, i = 0;
                    var mean = this.mean();
                    for (i = 0; i < data.length; i++) {
                        sum = sum + Math.pow(data[i] - mean, 2);
                    }
                    return sum / data.length;
                },

                stdDev: function () {
                    return Math.sqrt(this.variance());
                },

                geometricMean: function () {
                    var accum = 1, i = 0;
                    for (i = 0; i < data.length; i++) {
                        accum = accum * data[i];
                    }
                    return Math.pow(accum, 1/data.length);
                },

                harmonicMean: function () {
                    var accum = 0, i = 0;
                    for (i = 0; i < data.length[i]; i++) {
                        accum = accum + (1/data[i]);
                    }
                    return data.length / accum;
                }
            };
            datasets.push(dataset);
            return dataset;
        }
    };
})();