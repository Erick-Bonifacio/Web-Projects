const inicio = document.querySelector("#input-inicio")
const fim = document.querySelector("#input-fim")
const adivinha = document.querySelector("#input-adivinha")
const btnPensar = document.querySelector("#pensar")
const btnAdivinhar = document.querySelector("#adivinhar")
const mensagem = document.querySelector("#mensagem")
let aleatorio = null

btnPensar.addEventListener('click', () => {

    //pegar os numeros
    valorInicio  = inicio.value;
    valorFim = fim.value;
    //verificar se não sao nulos e se valorFim > valorInicio
    if(valorInicio === '0' || valorFim === '0' || valorInicio === '' || valorFim === '' ){
        alert("Preencha corretamente os campos");
        return
    }
    if(Number(valorFim) < Number(valorInicio)){
        alert("Fim não pode ser maior que início");
        return
    }

    //gerar aleatorio
    aleatorio = Math.floor(Math.random() * valorFim + valorInicio);
    console.log(aleatorio)
    
    const p = document.querySelector("#adivinhacao");
    p.innerText = `Estou pensando em um número entre ${valorInicio} e  ${valorFim}. Tente adivinhar!`;
   
});

btnAdivinhar.addEventListener('click', () => {

    valueAdivinha = adivinha.value;

    if(valueAdivinha === null ){
        alert("Insira um número válido!");
        return
    }

    valueAdivinha = Number(adivinha.value);

    if(aleatorio === null){
        mensagem.innerText = "Calma Jovem! Lembrou de clicar em 'Pensar'?";
    }

    if(valueAdivinha > aleatorio){
        mensagem.innerText = "Você pensou MAIOR!"
    }
    if(valueAdivinha < aleatorio){
        mensagem.innerText = "Você Pensou MENOR!"
    }
    if(valueAdivinha === aleatorio){
        mensagem.innerText = "Você Acertouu!"
        aleatorio = null;
        valueAdivinha = null;
    }
    console.log(aleatorio)
});