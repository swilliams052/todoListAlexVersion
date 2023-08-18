const body = document.querySelector('body')
const hardCodeLi = document.querySelectorAll('#li-hardCode')

const addEventListener = () => {
    const completeList = document.getElementById('complete-list')

    for(let i = 0; i < hardCodeLi.length; i++) {
        hardCodeLi[i].addEventListener('click', () => {
            hardCodeLi[i].style.textDecoration = 'line-through'
            completeList.appendChild(hardCodeLi[i])
        })
    }
}
addEventListener()

const textBarFunc = () => {
    const textBar = document.createElement('input')

    textBar.setAttribute('id', 'inputField')
    textBar.placeholder = 'Add item to list'
    body.appendChild(textBar)
}
textBarFunc()


const createButton = () => {
    const btn = document.createElement('button')

    btn.setAttribute('id', 'btn')
    btn.innerText = 'Add to list'
    body.appendChild(btn)
    btn.addEventListener('click', () => {
        const input = document.querySelector('input')
        const li = document.createElement('li')


        li.innerText = input.value
        li.addEventListener('click', () => {
            const completeList = document.getElementById('complete-list')
            li.style.textDecoration = 'line-through'
            completeList.appendChild(li)
        })
        ul.appendChild(li)
    })
}
createButton()

const ul = document.querySelector('ul')
ul.setAttribute('id', 'incomplete-list')





