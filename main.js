const {app,ipcMain}= require('electron')

const path = require('path')
const url = require('url')

const getdata = require('./dataitem')

const mainwindow = require("./mainwindow")



ipcMain.on('urls',(e, datareceive)=>{
 
  getdata(datareceive, (item)=>{
    e.sender.send('datareturn',item)
 
})
  
}
)

app.on('ready', mainwindow.Mainwindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
 
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {

  if (mainwindow === null) {
    mainwindow.Mainwindow()
  }
})


