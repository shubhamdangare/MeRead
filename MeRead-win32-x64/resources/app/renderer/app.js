const {ipcRenderer} = require('electron')

const items = require("./item.js")
const menu = require('./menu.js')


$('.open-add-modal').click(() =>{
    $('#add-modal').addClass('is-active')
}
)

$('.close-add-modal').click(() =>{
    $('#add-modal').removeClass('is-active')
}
)

$(document).keydown((e)=>{
    switch (e.key){
    case 'ArrowUp':
    items.change('up')
     break;
     case 'ArrowDown':
     items.change('down')
     break;
}
})




$('#add-modal').click(()=>{
    let inpuetvalue = $('#item-input').val()
    if(inpuetvalue){

        ipcRenderer.send('urls',inpuetvalue)


        $('.close-add-model').addClass('is-disabled') 
        $('#item-input').prop('disabled',true)
        $('#add-button').addClass('is-loading')
    }
})

ipcRenderer.on('datareturn',(e,datarec) => {
    console.log(datarec)
    items.itemstore.push(datarec)
    items.save()
    items.item(datarec)
    
    $('#item-input').prop('disabled',false).val('')
    $('.close-add-model').removeClass('is-disabled')
    $('#add-model').removeClass('is-active')
    $('#add-button').removeClass('is-loading')

    if(items.itemstore.length  == 1)
        $('.read-item:first()').addClass('is-active')


})

$('#item-input').keyup((e) =>{
    if(e.key === 'Enter') $('#add-button').click()
})

if(items.itemstore.length){
    items.itemstore.forEach(items.item)
    $('.read-item:first()').addClass('is-active')
}

$('#search').keyup((e) =>{

    let search = $(e.currentTarget).val()
    $('.read-item').each((item,element) => {
        $(element).text().toLowerCase().includes(search) ? $(element).show() : $(element).hide() 
         
    })
})