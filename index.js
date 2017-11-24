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


function getImages() {
	let imgtypes =['.bmp',/*'.ico',*/'.gif','.jpg','.jpeg','.png']
	let folder = "DEMO/predict/"

	console.log('hi')

	let fs = require('fs');
	let fls = fs.readdirSync(folder)
	let defaultImageName=null
	let defaultImageNum=null

	for(var key in fls){
		var val = fls[key]
		var ext = path.extname(val).toLowerCase()
		var fn = path.basename(val)
	}
	console.log(fn)

}




// Run create Window function
app.on('ready', boot)

