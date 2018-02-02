exports.itemstore = JSON.parse(localStorage.getItem('itemstore')) || []

exports.save = () =>{
    localStorage.setItem('itemstore',JSON.stringify(this.itemstore))
}

exports.selectitem = (e) =>{

  $('.read-item').removeClass('is-active')
  $(e.currentTarget).addClass('is-active')
}
exports.item = (item)=>{

    $('#no-items').hide()

    let datas = `<a class="panel-block read-item" data-url="${item.url}" data-title="${item.title}">
                    <figure class="image has-shadow is-64x64 thumb">
                      <img src="${item.screenshot}">
                    </figure>
                    <h2 class="title is-4 column">${item.title}</h2>
                </a>`
    $('#read-list').append(datas)
    
    $('.read-item').off('click','dblclick').on('click',this.selectitem).on('dblclick' , window.openitem)

}

exports.change = (dire) =>{
    let active = $('.read-item.is-active')
    let newitem = (dire === 'down')? active.next('.read-item') : active.prev('.read-item')
 
    if(newitem.length)
  active.removeClass('is-active')
  newitem.addClass('is-active')

}

window.openitem = () =>{
    
    if( !this.itemstore.length) return

    let target = $('.read-item.is-active')
    let index = target.index() -1

    let conturl =  encodeURIComponent(target.data('url'))
    console.log(conturl)

    let readwin = `file://${__dirname}/win2.html?url=${conturl}&index=${index}`

    let loadwin = window.open(readwin, target.data('title'))
}

window.deleteitem = (i = false)=>{
    if(i === false) i= ($('.read-item.is-active').index() - 1)
    console.log(i)
    $('.read-item').eq(i).remove()
    this.itemstore = this.itemstore.filter((item,index)=>{
        return index != i
    })
    this.save()

    if(this.itemstore.length){
       let index1 = (i===0)?0:i - 1
        $('.read-item').eq(index1).addClass('is-active')
    }
    else{
         $('#no-item').show()
    }
}