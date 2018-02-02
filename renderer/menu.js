
const {remote, shell} = require('electron')


const template = [
  {
    label: 'Items',
    submenu: [
      {
        label: 'Add New',
        accelerator: 'CmdOrCtrl+O',
        click () { $('.open-add-modal').click() }
      },
      {
        label: 'Read Item',
        accelerator: 'CmdOrCtrl+Enter',
        click () { window.openitem() }
      },
      {
        label: 'Delete Item',
        accelerator: 'CmdOrCtrl+Backspace',
        click () { window.deleteitem() }
      },
      
      {
        type: 'separator'
      },
      
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'pasteandmatchstyle'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    role: 'window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
 
]




const menu = remote.Menu.buildFromTemplate(template)
remote.Menu.setApplicationMenu(menu)
