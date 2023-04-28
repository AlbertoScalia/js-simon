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

}

// Creo la funzione per far sparire la lista dopo 30 sec

function hideNumbers() {
    listaNumeri.innerHTML = " ";
}

setTimeout(hideNumbers, 30000);

// Creo la funzione per apparire il prompt appena scompare la lista

// Creo le variabili per la funzione
let numeriUtente;
let numeriCorretti;
let numeriErrati;

function askNumbers() {
    numeriUtente = [];
    numeriCorretti = [];
    numeriErrati = [];

    // Creo un ciclo while per avviare il prompt
    while (numeriUtente.length < 5) {
        let valoreScelto = parseInt(prompt("Inserisci un numero"));
        if (!numeriUtente.includes(valoreScelto)) {
            numeriUtente.push(valoreScelto);
        } else {
            valoreScelto = parseInt(prompt("Inserisci un numero diverso!"))
        }
    }

    // Creo un ciclo for con le condizioni 
    for (let n = 0; n < numeriUtente.length; n++) {
        if (numeriRandom.includes(numeriUtente[n])) {
            numeriCorretti.push(numeriUtente[n])
        } else {
            numeriErrati.push(numeriUtente[n])
        }
    }

    // Inserimento stringhe nel DOM
    document.getElementById("answer").innerHTML =
        `
        <p>Hai indovinato ${numeriCorretti.length} numeri</p> 
        <p>Numeri individuati: ${numeriCorretti.join(" ")}</p>
        <p>Numeri non individuati: ${numeriErrati.join(" ")}</p>
    `
}

setTimeout(askNumbers, 31000);

//Creo l'addEventListener del click
play.addEventListener(`click`, function () {
    clickPlay()
})
