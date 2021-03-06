var studentsModule = require('./studentsModule.js');
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
		'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>' + '<link rel="stylesheet" href="http://localhost:3000/style.css"/>' +
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
			console.log(data);
			if (!data.length) {
			return '<div class = "content" id ="result">Enter the name, please</div>';;
			}
			else{
			var result = '<div class = "content" id ="result">'  + data + '</div>';
			return result;
			}
		}
		var getViewData = function (params){
			if(!params){
				return "No params was enter";
			}
			else if(params.student){
				var studres = studentsModule.countAvgMarkStudent(params.student);
				var abs = studentsModule.countAbsent(params.student);
				var res;
				if(studres == null){
					res = "Name of student is not found. Check it and try again";
				}
				else{
				res = params.student + " has average result : " + studres + " and has " + abs +" absents ";
				}
				return res;
			}
			else if(params.csubject){
				var avgMark = studentsModule.countAvgMark(params.csubject);
				var abs = studentsModule.countCommonAbsents(params.csubject);
				var res;
				console.log(typeof(avgMark));
				if(avgMark == "NaN"){
					res = "Name of subject is not found. Check it and try again";
				}
				else{ res = "average mark all students of all groups on the subject " + params.csubject + " are : " + avgMark + " and they have " + abs + " absents " ;
				}
				return res;
			}
			else if(params.group && params.subject){
				var avgMark = studentsModule.countAvgMarkGroup(params.group, params.subject);
				var absent = studentsModule.countAbsentsOfGroup(params.group, params.subject);
				var res;
				if(avgMark == null){
					res = "Name of group or subject is not found. Check it and try again";
				}
				else{ res = "average result group " + params.group + " of subject " + params.subject + " is : " + avgMark + "<br>" + " group has " + absent + " absents " ;
				}
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