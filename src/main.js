'use strict';

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let windows = [];

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  showWindows();

  electron.screen.on('display-added', function () {
    dismissWindows();
    showWindows();
  });

  electron.screen.on('display-removed', function () {
    dismissWindows();
    showWindows();
  });
});

function showWindows() {
  electron.screen.getAllDisplays().forEach(display => {
    windows.push(showWindow(display));
  });
}

function dismissWindows() {
  if (!windows || windows.length < 1) {
    return;
  }

  windows.forEach(window => {
    if (!window) {
      return;
    }

    window.close();
  });

  windows = [];
}

function showWindow(display) {
  let size = display.size;
  let window = new BrowserWindow({
    x: display.bounds.x,
    y: display.bounds.y,
    width: size.width,
    height: size.height,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true
  });

  window.loadURL('file://' + __dirname + '/index.html');
  window.setIgnoreMouseEvents(true);

  window.on('closed', function () {
    window = null;
  });

  return window;
}
