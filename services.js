const button01 = document.getElementById('1')
const button02 = document.getElementById('2')
const button03 = document.getElementById('3')

button01.addEventListener("click", () => {
    let valor = 1599.99;
    let quantidade = Number(prompt("Digite a quantidade que você deseja"));
    let resultado = valor * quantidade; 

    if(quantidade == 0) {
        alert("Nenhum produto foi adicionado");
    }else {
        alert(`Quantidade Escolhida: ${quantidade}
    valor unitário do produto: ${valor} 
    Total da Compra: R$ ${resultado}`)
    }
    
})

button02.addEventListener("click", () => {
    let valor = 2499.99;
    let quantidade = Number(prompt("Digite a quantidade que você deseja"));
    let resultado = valor * quantidade; 

    if(quantidade == 0) {
        alert("Nenhum produto foi adicionado");
    }else {
        alert(`Quantiade Escolhida: ${quantidade}
    valor unitário do produto: ${valor} 
    Total da Compra: R$ ${resultado}`)
    }
    
})


button03.addEventListener("click", () => {
    let valor = 1899.99;
    let quantidade = Number(prompt("Digite a quantidade que você deseja"));
    let resultado = valor * quantidade; 

    if(quantidade == 0) {
        alert("Nenhum produto foi adicionado");
    }else {
        alert(`Quantidade Escolhida: ${quantidade}
    valor unitário do produto: ${valor} 
    Total da Compra: R$ ${resultado}`)
    }
    
})





