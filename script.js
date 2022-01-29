let num = window.document.querySelector('input#txtNum')
let list = window.document.querySelector('select#inserir')
let resul = window.document.querySelector('div#res')
let vetor = []
let backColor = document.querySelector('body#cor')

let adicionar = () =>{

    if(num.value.length == 0)
    {
        resul.innerHTML = 'Primeiramente insira um número'
    }
    else if(num.value <= 0 || num.value > 100 ){
        resul.innerHTML = ''
        window.alert('Não foi possível inserir o numero TENTE NOVAMENTE')
    }
    else{
        //Inseridno dentro do Select
        let numCoreto = Number(num.value)
        let posicao = vetor.indexOf(numCoreto)
        vetor.push(numCoreto)
        resul.innerHTML = ''

        if(posicao == -1){
            let opc = window.document.createElement('option')
            opc.text = `Valor ${numCoreto} Inserido`
            list.appendChild(opc)         
        }
        else{
            window.alert(`Não é possível inserir o Número ${numCoreto} TENTE OUTRO`)
            vetor.pop()
        }
    }
}

//Somar os dados dentro do vetor para poder gerar a function gerarDados
//Tem qu ser dessa forma para que funcione
function somaVetor(vetor){
    let resul = 0
        for(let i in vetor){ // usa o in para percorer dentro do (vetor) sem precisar fazer o for completo
            resul += vetor[i]
        }
    resul = Number(resul)
    return resul
} 

let gerarDados = () =>{
    //Verificar se o vetor esta vazio para não gerar os dados
    if(vetor == 0)
        window.alert('Primeiro insira alguns dados')
    else{
        let contaMedia = (somaVetor(vetor)/vetor.length).toFixed(1) // usa o toFixed para pegar apenas uma casa antes da virgula
        let mediaGerada = `A média dos dados inseridos é: ${contaMedia}`

        let contaTamanho = `Foram inseridos o total de: ${vetor.length}` 

        let maiorNumero = `O maior número inserio é: ${Math.max(...vetor)} ` //... /ou/ spread Usado para espalhar dentro de um 
                                                                             //array ai usamos o Math.max para poder retornar o mairo valor dentro do vetor

        let menorNumero = `O menor número inserido é: ${Math.min(...vetor)}` // o mesmo do de cima, mas aqui retorna o menor

        let TotalDadosDoVetor = ` O valor de todos dados somados é de: ${somaVetor(vetor)}`

        resul.innerHTML =  `${mediaGerada} <div>` // usa o += para poder adicionar todos os itens
        resul.innerHTML += `${contaTamanho} <div>`         // coloca <div> para poder dividir o código
        resul.innerHTML += `${maiorNumero} <div>`           // mas pode usar outras tags 
        resul.innerHTML += `${menorNumero} <div>`
        resul.innerHTML += `${TotalDadosDoVetor} <div>`
        resul.style.color = 'white'
        resul.style.backgroundImage = 'linear-gradient(120deg,#000080,#00BD45)'
        resul.style.textAlign = 'Center'
        resul.style.borderRadius = '20px'             
    }
}


