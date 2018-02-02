const {BrowserWindow} = require('electron')


exports.win

exports.Mainwindow = () => {

 this.win = new BrowserWindow({
     width: 500, 
     height: 850,
     maxHeight:310,
    maxWidth:650,
    minWidth:350
    })

this.win.webContents.openDevTools()

this.win.loadURL(`file://${__dirname}/renderer/main.html`)

this.win.on('closed', () => {
  this.win = null
})

}