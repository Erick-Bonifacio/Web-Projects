const nome = document.querySelector("#nome");
const qtd = document.querySelector("#qtd");
const btn = document.querySelector("#button");
const ul = document.querySelector("#ul")

btn.addEventListener('click', () => {

    //pegar valores
    let nomeProduto = nome.value;
    let quant = qtd.value;

    if(nomeProduto === ""){
        alert("O NOME DO PRODUTO NAO PODE SER VAZIO, MEU BACANA!");
        return
    }
    //criar um li e botao
    const li = document.createElement("li");
    const newButton = document.createElement("button");
    li.innerText = `${nomeProduto} Quantidade: ${quant}`;
    newButton.innerText = "X";
    newButton.id = "new-button";
    li.appendChild(newButton);

    //colocar no DOM 
    ul.appendChild(li)

    //evento no button
    newButton.addEventListener('click', () => {
        ul.removeChild(li);
    });

} )
