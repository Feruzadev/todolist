const elInput = document.querySelector('#input')
const elBtn = document.querySelector('#btn')
const list = document.querySelector('.list')

elBtn.addEventListener('click',function () {
    // console.log('elInput.value') //olma
    if(elInput.value){
        const li = document.createElement('li')
        const span = document.createElement('span')
        const btn = document.createElement('button')

        span.textContent = elInput.value
        btn.textContent = "X"
        li.append(span,btn)
        list.append(li)
        elInput.value = ""
        elInput.focus()

        //remove

        btn.addEventListener('click',function (){
            li.remove()
        })
    }else {
        alert('False')
    }
})