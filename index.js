const {BrowserWindow, app, globalShortcut, Tray} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;


function boot(){
	// Create browser window
	win = new BrowserWindow({
		width	: 800,
		height	: 600,
		frame	: false
	});

	// Load index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Open devtools
	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null
	})

	// globalShortcut.register('CommandOrControl+1', () => {
	// 	win.isMaximized() ? win.unmaximize() : win.maximize()

	// })

	// win2 = new BrowserWindow({
	// 	width	: 400,
	// 	height	: 200,
	// 	frame	: false,
	// 	resizable	: false,
	// 	parent	: win
	// });
	// win2.loadURL('http://example.com');

}

// const resizeimagepath = new Tray('/Users/somebody/images/icon.png')

var fs = require('fs');
// var files = fs.readdirSync('/assets/photos/');

// var resizeimagepath = '/assets/pciture/cat-pet-animal-domestic-104827.jpeg';
var predictimagepath = '/assets/pciture/cat-pet-animal-domestic-104827.jpeg';


// var x = document.getElementById("resizeimagepath");
// var x = document.createElement("IMG");


fs.readdir('/DEMO/predict', function(err, files) {
    files
		.filter(function(file) { return file.substr(-4) === '.png'; })
		.forEach(inspectfile(file) )
//          .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { inspectFile(contents); }); });
});


function inspectFile(contents) {
    files
		.filter(function(file) {return file.substr(-13) === 'predicted.png'})
		.forEach(function(file) {resizeimagepath.push(file)} )
	console.log(files)
} 





// function inspectFile(contents) {
//     if (contents.indexOf('data-template="home"') != -1) {
//         // do something
//     }
// } 
 






// Run create Window function
app.on('ready', boot)

