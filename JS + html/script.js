const inputEl = document.getElementById('input')
const btnEl = document.querySelector('.todo-list_btn')
const fieldEl = document.querySelector('.todo-list_field')

function onBtnClick() {
    if (inputEl.value.length){
        const divEl = document.createElement('div')
        divEl.classList.add('todo-list_item')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
    
        const text = document.createElement('p')
        text.classList.add('todo-list_item-text')
        text.innerText = inputEl.value

        const img = document.createElement('img')
        img.src = 'trash.svg'

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        fieldEl.appendChild(divEl)
        inputEl.value = ''
    }
}

btnEl.addEventListener('click', onBtnClick)
    console.log('Clicked!');

//btnEl.addEventListener('click', () => {
//    console.log('Clicked!');
//})
