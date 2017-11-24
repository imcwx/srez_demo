var app = angular.module('app', ['ngRoute']);

const {remote} = require('electron')


app.service('image', function() {
	var imagePath = "";
	this.setImagePath = function(path) {
		imagePath = path;
	};
	this.getImagePath = function() {
		return imagePath;
	};
});


app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: `${__dirname}/components/home/home.html`,
		controller: 'homeCtrl'
	}).when('/edit', {
		templateUrl: `${__dirname}/components/output/output.html`,
		controller: 'outputCtrl'
	}).otherwise({
		template: '404 bro'
	});
});


app.controller('headCtrl', function($scope) {
	var win = remote.getCurrentWindow();

	$scope.close = function(){
		win.close();

	};

	$scope.minimize = function(){
		win.minimize();

	};

	$scope.maximize = function(){
		win.isMaximized() ? win.unmaximize() : win.maximize()


	};

});


app.controller('homeCtrl', function($scope, $location, image) {
	$scope.pickFile = function() {
		var {dialog} = remote;

		dialog.showOpenDialog({
			properties: ['openDirectory']
		}, function(file) {
			console.log(file)
			if (!!file) {
				var path = file[0];
				image.setImagePath(path);
				$location.path('/edit');
				// $scope.apply() ;
			}
		})

	};

	$scope.runPredict = function() {

		// Calls the bat file
		// var wshShell = new ActiveXObject("WScript.Shell");
		// wshShell.Run("DEMO/demo.bat");

		// window.run("DEMO/demo.bat")

		// const { exec } = require('child_process');
		// exec(`${__dirname}/DEMO/demo.bat`, (err, stdout, stderr) => {
		//   if (err) {
		//     console.error(err);
		//     return;
		//   }
		//   console.log(stdout);
		// });

		// console.log($location.path(`${__dirname}`))

		
		const { spawn } = require('child_process');
		const bat = spawn('cmd.exe', ['/c', `${__dirname}/DEMO/demo.bat`]);
		// const bat = spawn('cmd.exe', ['/c', 'DEMO/demo.bat']);
		console.log("hello")

		bat.stdout.on('data', (data) => {
		  console.log(data.toString());
		});

		bat.stderr.on('data', (data) => {
		  console.log(data.toString());
		});

		bat.on('exit', (code) => {
		  console.log(`Child exited with code ${code}`);
		});

		// $scope.imagePath = image.getImagePath();

		
		let newimagepath = predictFiles()

		$scope.imagePath = newimagepath

		// $scope.images = {}


	};




});


function predictFiles() {
	let predictDirectory = `${__dirname}/DEMO/predict/`

	let fs = require('fs');
	const path = require('path');
	let fls = fs.readdirSync(predictDirectory);
	let defaultImageName=null;
	let defaultImageNum=null;
	let newimagepath =[];

	for(var key in fls){
		var val = fls[key]
		var ext = path.extname(val).toLowerCase()
		var fn = path.basename(val)
		newimagepath.push(predictDirectory+fn)
	}
	// console.log(fls)
	console.log(newimagepath)
	return newimagepath

}







app.controller('outputCtrl', function($scope, image) {
	$scope.imagePath = image.getImagePath();



});





// // Filesystem module
// const fs = require('fs');
// // Dialog module
// const {dialog} = require("electron").remote;

// document.getElementById("grid").addEventListener("click", function() {
// 	let content = "Hello"
// 	getImages()
// }, false)



// function getImages() {
// 	let imgtypes =['.bmp',/*'.ico',*/'.gif','.jpg','.jpeg','.png']
// 	let folder = "DEMO/predict/"

// 	console.log('hi')

// 	let fs = require('fs');
// 	let fls = fs.readdirSync(folder)
// 	let defaultImageName=null
// 	let defaultImageNum=null

// 	for(var key in fls){
// 		var val = fls[key]
// 		var ext = path.extname(val).toLowerCase()
// 		var fn = path.basename(val)
// 	}
// 	console.log(fn)

// }







