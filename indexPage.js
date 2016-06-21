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
		getForm() +		
		'</main>';
	};
	var getForm = function () {		
	return '<form method="POST">' + 
			'<div id="allgroup">' +
				'<h3>Common statistic</h3>' +
				'<h4>enter name of subject</h4>' +
				'<input type="text" name="csubject" id = "csubject"/>' +
				'<button onserverclick = "search()">Check</button>' +
			'</div>' +

			'<div>' +
				'<h3>Statistic of group</h3>' +
				'<h4>enter name of group and subject</h4>' +
				'<input type="text" name="group" id = "group"/>' +
				'<input type="text" name="subject" id = "subject"/>' +
				'<button onserverclick = "search()">Check</button>' +
			'</div>' +
			
			'<div>' +
				'<h3>Statistic of student</h3>' +
				'<h4>enter name of student</h4>' +
				'<input type="text" name="student" id = "student"/>' +
				'<button onserverclick = "search()">Check</button>' +
			'</div>' +
			'<div class = "content" id ="result"></div>' +
		
		'</form>';
		
	
	};
	
		function search(){
	console.log('hello');
	var studentName = $("#student").val();
	var groupName = $("#group").val();
	var csubject = $("#csubject").val();
	var subject = $("#subject").val();
	var res = [];
	var absent = [];
	if(studentName){
		res = moduleStat.countAvgMarkStudent(studentName);
		absent = moduleStat.countAbsent(studentName);
		$("#result").html('average result ' + studentName + ' is : ' + res + '<br>' + studentName + ' has ' + absent + " absents ");	
	}
	if(groupName){
		res = moduleStat.countAvgMarkGroup(groupName, subject);
		absent = moduleStat.countAbsentsOfGroup(groupName, subject);
		$("#result").html('average result group ' + groupName + ' of subject ' + subject + ' is : ' + res + '<br>' + ' group has ' + absent + " absents " );
	}
	if(csubject){
		res = moduleStat.countAvgMark(csubject);
		absent = moduleStat.countCommonAbsents(csubject);
		$("#result").html('average result all groups of subject ' + csubject + ' is : ' + res + '<br>'  + ' all groups have ' + absent + " absents ");
	}
	}
	
	return {
	getPage: getPage
	};
})();