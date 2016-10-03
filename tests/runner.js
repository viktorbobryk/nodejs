var _ = require('lodash');
var studentsTests = require('./studentsModule.js');

_.each(studentsTests, function (test) {
    test();    
});