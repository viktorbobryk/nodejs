var weatherModule = require("./weatherModule");
module.exports = (function() {
	var getPage = function (params) {
		return '<html>' + getPageHead() +
		'<body>' + 
		getPageHeader() + 
		getMain(params) +
		getPageFooter() +
		'</body></html>';
	};
	var getPageHead = function () {
		return '<head>
					<title>Weather</title>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
					<link rel="stylesheet" type="text/css" href="style.css"/>	
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
					<script type="text/javascript" src="main_wether.js"></script>
				</head>'
	};
	var getPageHeader = function () {
		return '<header>sinoptik.rv.ua</header>';
	};
	var getPageFooter = function () {
		return '<footer></footer>';
	};
	var getMain = function (params) {
		return '<main>	
<div class="container center">
		<h1>sinoptik.rv.ua</h1>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 center">
				<h3>general information</h3>
					<div class="lineText">
						<button onclick="stat()">Open</button>
					</div>
					<div id="result"></div>
					<h3>city information</h3>
					<h4>enter name of city</h4>
					<h6>(Rivne, Kyiv, Lviv, London)</h6>
				<input type="text" name="city" id = "city"/>
				<button onclick = "cityStat()">Search</button>
				<div id="cityresult"></div>
			</div>
				<h3>Search maximum value</h3>	
				<select id="selectOption">
					<option value="-">chooth option</option>
					<option value="maxTemp">
						temperature
					</option>
					<option value="maxHym">
						humidity 
					</option>
					<option value="maxWindPow">
						wind power
					</option>
				</select>
				<button onclick="search()">Search</button>
				<div class="foundText">					
					<p id = "maxParameter"></p>					
				</div>
			</div>
		</div>
	</div>		
		</main>';
	};
	
})