'use strict';

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");

const pista = document.querySelector(".js-pista");

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

const numberAleat = getRandomNumber(100);
console.log (numberAleat);

const numberSeleccion = (ev) => {
    ev.preventDefault()
    const numbers = input.value;
    
    if (numberAleat >100){
        pista.innerHTML = "Demasiado alto";
        }
        else if (numberAleat <100){
            pista.innerHTML = "Demasiado bajo";
        }
        else if (numberAleat === numberAleat){
            pista.innerHTML = "Has ganado campeona!";
        }
       

    }


button.addEventListener("click", numberSeleccion);
