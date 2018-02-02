

const {BrowserWindow} = require('electron')

let basewindow

module.exports = (url, callback) => {

  basewindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    show: false,
    webPreferences: {
      offscreen: true
    }
  })

  
  basewindow.loadURL(url)

  basewindow.webContents.on('did-finish-load', () => {


    basewindow.webContents.capturePage((image) => {

      let screenshot = image.toDataURL()

   
      let title = basewindow.getTitle()

     
      callback({ title, screenshot, url })

 
      basewindow.close()
      basewindow = null
    })
  })
}
