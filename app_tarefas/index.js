const inputElement = document.querySelector('input')
const buttonelement = document.querySelector('form button')
const ulElement = document.querySelector('ul')

buttonelement.onclick = ev => {
    ev.preventDefault();

    if(inputElement.value) {
        const textElemnt = document.createElement('span')
        textElemnt.innerHTML = inputElement.value

        const liElement = document.createElement('li')
        const btnElement = document.createElement('button')

        btnElement.innerHTML = 'Remover'

        liElement.appendChild(textElemnt)
        liElement.appendChild(btnElement)

        btnElement.onclick = () => {
            ulElement.removeChild(liElement)
        }

        ulElement.appendChild(liElement)
        inputElement.value = ""
        
    }
   
}