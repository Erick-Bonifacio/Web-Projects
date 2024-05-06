const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const refresh = document.querySelector("#refresh");
const p = document.querySelector("p");

let formattedTime = '';
let cont = 0;
let intervalId;

const func = (contador) => {       
    contador++;
    let segundos = (contador % 60);
    let minutes = Math.floor((contador / 60) % 60);
    let hours = Math.floor(contador / 3600); 

    formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    p.innerText = formattedTime;

    return contador;
}

start.addEventListener("click", () => {
    p.style.color = 'green';  
    intervalId = setInterval(() => {
        cont = func(cont);
    }, 1000);
});

pause.addEventListener('click', (e) => {
    if (e.target.innerText == "Pause") {
        clearInterval(intervalId); // Para de atualizar o p
        e.target.innerText = "Continue";
        p.style.color = 'red';
    } else {
        intervalId = setInterval(() => { 
            cont = func(cont);
        }, 1000);
        e.target.innerText = "Pause";
    }
});

refresh.addEventListener('click',() => {
    clearInterval(intervalId);
    cont = 0
    p.innerText = "00:00:00";
    p.style.color = 'gray';

})