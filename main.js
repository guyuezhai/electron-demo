const electron = require('electron')

const { app, BrowserWindow, globalShortcut} = electron

const Data = require('./app/db/data/charts-data')

const ipcMain = electron.ipcMain

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './app/html/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  globalShortcut.register('CommandOrControl+Q', () => {
    app.quit()
  })

  globalShortcut.register('CommandOrControl+D', () => {
  
    mainWindow.webContents.toggleDevTools()
    
  })
  globalShortcut.register('CommandOrControl+R', () => {
    mainWindow.reload();
  })
  globalShortcut.register('CommandOrControl+F', () => {
    mainWindow.webContents.goForward();
  })
  globalShortcut.register('CommandOrControl+B', () => {
    mainWindow.webContents.goBack();
  })
}

let dataHelp = Data.helpData

ipcMain.on('help-ready-get', (event, args) => {
    
    if(args != 'undefined'){
        dataHelp.legend.backgroundColor = args
    }
    event.returnValue = JSON.stringify(dataHelp);
   
})

let dataProfile = Data.profileDate

ipcMain.on('profile-ready-get', (event, args) => {

    event.returnValue = JSON.stringify(dataProfile);
})

let dataSetting = Data.setData

ipcMain.on('setting-ready-get', (event, args) => {

    event.returnValue = JSON.stringify(dataSetting);
})

//let dataDashboard = Data.generateData()

ipcMain.on('dashboard-ready-get', (event, args) => {

    event.sender.send('dashboard-get', Data.generateData() )
         
})

ipcMain.on('report-ready-get', (event, args) => {
  
    event.sender.send('report-get', JSON.stringify(Data.reportData()) )
            
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})