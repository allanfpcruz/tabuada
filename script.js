// declaracão de const
const tabuadaContainer = document.querySelector('#tabuada-container')
const inputNumber = document.querySelector('#input-num')
const search = document.querySelector('#search')
const resContent = document.querySelector('#result')
const reset = document.querySelector('#reset')

//funções
function tabuada() {
    for(let i = 1; i <= 10; i++) {
        const tabuadaList = document.createElement('ul')
        tabuadaList.classList.add('tabuada-list')
        tabuadaContainer.appendChild(tabuadaList)
        const tabuadaHeader = document.createElement('li')
        tabuadaHeader.setAttribute('class', 'tabuada-header')
        tabuadaList.appendChild(tabuadaHeader)
        tabuadaHeader.innerHTML = `Tabuada do ${i}`
        for (let c = 1; c <= 10; c++) {
            const tabuadaItem = document.createElement('li')
            tabuadaItem.setAttribute('class', 'tabuada-item')
            tabuadaList.appendChild(tabuadaItem)
            tabuadaItem.innerHTML = `${i} x ${c} = ${i * c}`
        }
    }
}

function gerarTabuada() {
    reset.classList.remove('none')
    const tabuadaContent = document.createElement('ul')
    tabuadaContent.classList.add('tabuada-list')
    tabuadaContent.classList.add('generated-tabuada')
    resContent.appendChild(tabuadaContent)
    const tabuadaTitle = document.createElement('li')
    tabuadaTitle.setAttribute('class', 'tabuada-header')
    tabuadaTitle.innerHTML = `tabuada do ${inputNumber.value}`
    tabuadaContent.appendChild(tabuadaTitle)
    for(let i = 1; i <= 10; i++) {
        const tabuadaItem = document.createElement('li')
        tabuadaItem.setAttribute('class', 'tabuada-item')
        tabuadaContent.appendChild(tabuadaItem)
        tabuadaItem.innerHTML = `${inputNumber.value} x ${i} = ${inputNumber.value * i}`
    }
}

function limparTabuada() {
    inputNumber.value = ""
    reset.classList.add('none')
    const generatedTabuada = document.querySelectorAll('.generated-tabuada')
    generatedTabuada.forEach(tabuada => {
        tabuada.classList.add('none')
    });
}

//eventos
document.addEventListener('onload', tabuada())

search.addEventListener('click', (e) => {
    gerarTabuada()
})

reset.addEventListener('click', (e) => {
    limparTabuada()
})