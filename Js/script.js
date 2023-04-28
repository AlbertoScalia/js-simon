// Creo la funzione per i numeri random
function randomNumberGenerator(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Creo le variabili
let play = document.getElementById("play");
let listaNumeri = document.getElementById("lista_numeri");
let numeriRandom;

// Funzione che mi genera l'array
function clickPlay() {
    numeriRandom = [];
    //Nel ciclo while inserisco cinque numeri dal generatore randomico
    while (numeriRandom.length < 5) {
        let num = randomNumberGenerator(100, 1);
        if (!numeriRandom.includes(num)) {
            numeriRandom.push(num)
        }
    }

    //Porto i cinque numeri all'interno del DOM
    let indice = 0
    let intervallo = setTimeout(function () {
        if (indice < numeriRandom.length) {
            listaNumeri.innerHTML =
                `
                <h3 class="numeriRandom">${numeriRandom}</h3>
            `
        } else {
            listaNumeri.innerHTML = ` `
        }
        indice++
    }, 1000)

    console.log(numeriRandom)
}

// Creo la funzione per far sparire la lista dopo 30 sec

function hideNumbers() {
    listaNumeri.innerHTML = " ";
}

setTimeout(hideNumbers, 30000);