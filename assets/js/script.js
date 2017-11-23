var app = angular.module('app', ['ngRoute']);

const {remote} = require('electron')

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

app.controller('homeCtrl', function($scope, $location) {
	$scope.pickFile = function() {
		var {dialog} = remote;

		dialog.showOpenDialog({
			properties: ['openDirectory'],
			filters: [{
				name: 'Images',
				extensions: ['jpg', 'jpeg']
			}]
		}, function(file) {
			if (!!file) {
				var path = file[0];
				$location.path('/edit');
			}
		})

	};


});


app.controller('outputCtrl', function($scope) {

});

