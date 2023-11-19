// declaracão de const
const tabuadaContainer = document.querySelector('#tabuada-container')
const inputNumber = document.querySelector('#input-num')
const search = document.querySelector('#search')
const resContent = document.querySelector('#result')

//funções
function tabuada() {
    for(let i = 1; i <= 10; i++) {
        const tabuadaHeader = document.createElement('li')
        tabuadaHeader.setAttribute('class', 'tabuada-header')
        tabuadaHeader.classList.add('tabuada-list')
        tabuadaContainer.appendChild(tabuadaHeader)
        tabuadaHeader.innerHTML = `Tabuada do ${i}`
        const tabuadaList = document.createElement('ul')
        tabuadaHeader.appendChild(tabuadaList)
        for (let c = 1; c <= 10; c++) {
            const tabuadaItem = document.createElement('li')
            tabuadaItem.setAttribute('class', 'tabuada-item')
            tabuadaList.appendChild(tabuadaItem)
            tabuadaItem.innerHTML = `${i} x ${c} = ${i * c}`
        }
    }
}

function gerarTabuada() {
    const tabuadaTitle = document.createElement('ul')
    tabuadaTitle.setAttribute('class', 'tabuada-header')
    tabuadaTitle.classList.add('tabuada-list')
    resContent.appendChild(tabuadaTitle)
    tabuadaTitle.innerHTML = `tabuada do ${inputNumber.value}`
    for(let i = 1; i <= 10; i++) {
        const tabuadaItem = document.createElement('li')
        tabuadaItem.setAttribute('class', 'tabuada-item')
        tabuadaTitle.appendChild(tabuadaItem)
        tabuadaItem.innerHTML = `${inputNumber.value} x ${i} = ${inputNumber.value * i}`
    }
}

//eventos
document.addEventListener('onload', tabuada())

search.addEventListener('click', (e) => {
    e.preventDefault()
    gerarTabuada()
})