const button = document.getElementById('convert-button')
const selectTo = document.getElementById('select-currency') 
const selectFrom = document.querySelector('main label select') 

const imagens = document.querySelectorAll('#moeda-img')
const nomesMoedas = document.querySelectorAll('.moeda')

const Dolar = 5.2
const Euro = 6

const conversor = () => {
    const inputValor = document.getElementById('ValueReal').value
    const valorRealExibicao = document.getElementById('ValorReal')
    const valorDestinoExibicao = document.getElementById('ValorDolar')

    const de = selectFrom.value
    const para = selectTo.value

    let valorEmReais = inputValor
    if (de === "dolar") valorEmReais = inputValor * Dolar
    if (de === "euro") valorEmReais = inputValor * Euro

    let resultado = valorEmReais
    if (para === "dolar") resultado = valorEmReais / Dolar
    if (para === "euro") resultado = valorEmReais / Euro

    valorRealExibicao.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: de === 'Real' ? 'BRL' : (de === 'euro' ? 'EUR' : 'USD')
    }).format(inputValor)

    valorDestinoExibicao.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: para === 'Real' ? 'BRL' : (para === 'euro' ? 'EUR' : 'USD')
    }).format(resultado)
}

const atualizarInterface = () => {
    const configs = {
        Real: { nome: "Real Brasileiro", img: "imgs/Gemini_Generated_Image_6nmbgl6nmbgl6nmb (1).png" },
        dolar: { nome: "Dólar Americano", img: "imgs/Gemini_Generated_Image_7p8xz7p8xz7p8xz7-Photoroom.png" },
        euro: { nome: "Euro", img: "imgs/Gemini_Generated_Image_15gff515gff515gf-Photoroom.png" }
    }

    nomesMoedas[0].innerHTML = configs[selectFrom.value].nome
    imagens[0].src = configs[selectFrom.value].img

    nomesMoedas[1].innerHTML = configs[selectTo.value].nome
    imagens[1].src = configs[selectTo.value].img

    conversor()
}

button.addEventListener('click', conversor)
selectFrom.addEventListener('change', atualizarInterface)
selectTo.addEventListener('change', atualizarInterface)













// const button = document.getElementById('convert-button')
// const select = document.getElementById('select-currency')

// const Dolar = 5.2
// const Euro = 6

// const conversor = () => {
//     const ValueReal = document.getElementById('ValueReal').value
//     const Valor_Real = document.getElementById('ValorReal')
//     const Valor_Dolar = document.getElementById('ValorDolar')

//     // Formata o valor digitado em Real
//     Valor_Real.innerHTML = new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     }).format(ValueReal)







//     if (select.value === "dolar") {
//         const Result = ValueReal / Dolar
//         Valor_Dolar.innerHTML = new Intl.NumberFormat('en-US', {
//             style: 'currency', currency: 'USD'
//         }).format(Result)
//     }

//     if (select.value === "euro") {
//         const Result = ValueReal / Euro
//         Valor_Dolar.innerHTML = new Intl.NumberFormat('de-DE', {
//             style: 'currency', currency: 'EUR'
//         }).format(Result)
//     }
// }

// const SelectCoin = () => {
//     const NameCoin = document.getElementById('moeda-nome')
//     const ImgCoin = document.getElementById('moeda-img')

//     // Aqui usamos o select.value que está no seu HTML (dolar ou euro)
//     if (select.value === "euro") {
//         NameCoin.innerHTML = "Euro"
//          ImgCoin.src = "imgs/Gemini_Generated_Image_15gff515gff515gf-Photoroom.png" 
//     } 
    
//     if (select.value === "dolar") {
//         NameCoin.innerHTML = "Dólar Americano"
//         ImgCoin.src = "imgs/Gemini_Generated_Image_7p8xz7p8xz7p8xz7-Photoroom.png" 
//     }

//     // Chama o conversor para atualizar os números assim que mudar a moeda
//     conversor() 
// }

// button.addEventListener('click', conversor);
// select.addEventListener('change', SelectCoin);