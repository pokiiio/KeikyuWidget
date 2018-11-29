'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  var size = electron.screen.getPrimaryDisplay().size;

  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.setIgnoreMouseEvents(true);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});