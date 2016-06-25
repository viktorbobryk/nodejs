var studentsModule = require('./studentsModule.js');
//var search = require('./search.js');
module.exports = (function() {
	var getPage = function (params) {
	return '<html lang="en">' + getPageHead() +
	'<body>' + 
	getPageHeader() + 
	getMain(params) +
	getPageFooter() +
	'</body></html>';
	};
	
	var getPageHead = function () {
		return '<head>' +
		'<title>Statistic</title>' +
		'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>' +
		'<style>' +
			'input{' +
				'width:90%;' +
				'margin-left:5%;' +
				'margin-bottom:5px;' +
			'}' +
			'div{' +
				'border:1px solid black;' +
				'height:200px;' +
				'width:32%;' +
				'margin:5px;' +
				'float:left;' +
			'}' +
			'h3{' +
				'text-align:center;' +
			'}' +
			'h4{' +
				'text-align:center;' +
			'}' +
			'button{' +
				'width:90%;' +
				'margin-left:5%;' +
			'}' +
			'.content{' +
				'width:98%;' +
				'height:30%;' +
			'}' +
			'</style>' +
		'</head>';
	};
	
	var getPageHeader = function () {
		return '<header></header>';
	};
	
	var getPageFooter = function () {
		return '<footer></footer>';
	};
	
	var getMain = function (params) {
		return '<main>' +
		getForm() +	getResult(params) +	
		'</main>';
	};
	var getForm = function () {
	
	return '<form method="POST">' + 
			'<div id="allgroup">' +
				'<h3>Common statistic</h3>' +
				'<h4>enter name of subject</h4>' +
				'<input type="text" name="csubject" id = "csubject"/>' +
				'<button>Check</button>' +
			'</div>' +

			'<div>' +
				'<h3>Statistic of group</h3>' +
				'<h4>enter name of group and subject</h4>' +
				'<input type="text" name="group" id = "group"/>' +
				'<input type="text" name="subject" id = "subject"/>' +
				'<button>Check</button>' +
			'</div>' +
			
			'<div>' +
				'<h3>Statistic of student</h3>' +
				'<h4>enter name of student</h4>' +
				'<input type="text" name="student" id = "student"/>' +
				'<button>Check</button>' +
			'</div>' +
		'</form>';
		};
		var getResult = function(params){
			var data = getViewData(params);
			var result = '<div class = "content" id ="result">'  + data + '</div>';
			return result;
		}
		var getViewData = function (params){
			console.log(params);
			if(!params){
				return "No params was enter";
			}
			if(params.student){
				var studres = studentsModule.countAvgMarkStudent(params.student);
				var abs = studentsModule.countAbsent(params.student);
				var res = params.student + " has average result : " + studres + " and has " + abs +" absents ";
				return res;
			}
			else if(params.csubject){
				var avgMark = studentsModule.countAvgMark(params.csubject);
				var abs = studentsModule.countCommonAbsents(params.csubject);
				var res = "average mark all students of all groups on the subject " + params.csubject + " are : " + avgMark.toFixed(2) + " and they have " + abs + " absents " ;
				return res;
			}
			else if(params.group && params.subject){
				var avgMark = studentsModule.countAvgMarkGroup(params.group, params.subject);
				var absent = studentsModule.countAbsentsOfGroup(params.group, params.subject);
				var res = "average result group " + params.group + " of subject " + params.subject + " is : " + avgMark + "<br>" + " group has " + absent + " absents " ;
				return res;
			}
			else{
				return [];
			}
		}
			
	return {
	getPage: getPage
	};
})();