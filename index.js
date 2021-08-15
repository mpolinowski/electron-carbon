const { app, BrowserWindow } = require('electron');

function createWindows() {
  let welcomeWindow =  new BrowserWindow();
  welcomeWindow.loadURL('http://localhost:9000/');
}

app.on('ready', createWindows);