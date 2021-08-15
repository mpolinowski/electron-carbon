"use strict";

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

function createWindows() {
  var welcomeWindow = new BrowserWindow();
  welcomeWindow.loadURL('http://localhost:9000/');
}

app.on('ready', createWindows);