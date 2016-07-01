var studentsModule = require('./studentsModule.js');
module.exports = (function () {
	var test1 = function(){
		console.log("test1");
		var expectedValue = 7;
		var realValue = studentsModule.countAvgMarkStudent("Lyuda");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test2 = function(){
		console.log("test2");
		var expectedValue = 0;
		var realValue = studentsModule.countAvgMarkStudent(test11);
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test3 = function(){
		console.log("test3");
		var expectedValue = 2;
		var realValue = studentsModule.countAbsent("Lida");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test4 = function(){
		console.log("test4");
		var expectedValue = 6.2;
		var realValue = studentsModule.countAvgMark("phisics");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test5 = function(){
		console.log("test5");
		var expectedValue = 5;
		var realValue = studentsModule.countCommonAbsents("phisics");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test6 = function(){
		console.log("test6");
		var expectedValue = 0;
		var realValue = studentsModule.countAbsent(testtt);
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test7 = function(){
		console.log("test7");
		var expectedValue = 4.7;
		var realValue = studentsModule.countAvgMarkGroup("A", "css");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test8 = function(){
		console.log("test8");
		var expectedValue = 6.8;
		var realValue = studentsModule.countAvgMarkStudent("Vitya");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test9 = function(){
		console.log("test9");
		var expectedValue = 4;
		var realValue = studentsModule.countAbsent("A", "css");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test7 = function(){
		console.log("test7");
		var expectedValue = 0;
		var realValue = studentsModule.countAbsent("D", "css");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	var test10 = function(){
		console.log("test10");
		var expectedValue = 0;
		var realValue = studentsModule.countAvgMarkGroup("D", "css");
		if (expectedValue === realValue) {
            console.log("[test passed]");
            return true;            
        } else {
            console.log("[test failed]");
            return false;
        }
	}
	
	 return {
      test1: test1,
      test2: test2,
      test3: test3,
      test4: test4,
      test5: test5,
	  test6: test6,
	  test7: test7,
	  test8: test8,
	  test9: test9,
	  test10: test10
    };
}();