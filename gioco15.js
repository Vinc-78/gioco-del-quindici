//disegno le celle

const table = document.getElementById('table');

const btnStart = document.getElementById('start');
// al click su start vengono generate le celle con generaGriglia e assegnati 
// i valori in modo random
btnStart.addEventListener('click', generaGriglia);

//funzione che seleziona tutte le celle e gli da un EventListener
function selectEvent() {

    let cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {

        cell.addEventListener('click', getNum)

    })

}
// variabili di appoggio ( valore/indice array)
let first = false;
let firstValue;
let firstIndex;

let second = false;
let secondValue;
let secondIndex;

// array di appoggio da manipolare
let justStart = [];

function generaGriglia() {

    table.innerHTML = "";
    let allNume = [];

    while (allNume.length < 15) {

        let singolNum = Math.floor(Math.random() * (15) + 1);

        if (!allNume.includes(singolNum)) {
            allNume.push(singolNum)
        }

    }
    allNume.push("");

    for (let i = 0; i < (allNume.length); i++) {
        //genera le celle e gli assegna un attributo indice = all'indice dell'array
        const cell = `<div class="cell" index="${i}" >${allNume[i]}</div>`
        table.innerHTML += cell;

    }

    justStart = allNume;  // fissa i valori sull'array di appoggio

    selectEvent()
}

function rigenera() {

    table.innerHTML = "";

    for (let i = 0; i < (justStart.length); i++) {

        const cell = `<div class="cell" index="${i}" >${justStart[i]}</div>`
        table.innerHTML += cell;

    }

    selectEvent()

}

function getNum(event) {
    //console.log(event);
    console.log(event.path[0].innerHTML); //leggo nella singola cella il valore contenuto
    console.log(event.path[0].attributes[1].value); //leggo l'indice della casella associata all'aray

    console.log(justStart);
    //se è il primo click assegna i valori a first
    if (first === false) {
        firstValue = event.path[0].innerHTML
        firstIndex = event.path[0].attributes[1].value

        console.log('Primo valore passato: ', firstValue)
        first = true
        second = true;
    //se è il secondo click assegna i valori a second
    } else if (second === true) {

        secondValue = event.path[0].innerHTML
        secondIndex = event.path[0].attributes[1].value

        console.log('Secondo valore passato: ', secondValue)
        
        scambia()
        console.log(first,second)
    } 
}

function scambia(event) {
    // resetta le variabili di controllo
    first=false;
    second=false; 

    console.log('Valori: ' ,firstValue, secondValue)
    console.log('Stato variabili: ' , first, second)

    //solo se il secondo valore è vuoto effettua lo scambio... e non barare :)
    if (secondValue === ""){

        console.log(justStart);

        justStart[firstIndex]=secondValue;
        justStart[secondIndex]=firstValue;

        console.log(justStart);

  
    }
    
    rigenera()

    
}

/*  Da migliorare per la versione 2.0: 

        1) Lo scambio deve avvenire solo per numeri adiacenti
        2) aggiunta di un timer che si blocca quando l'array è ordinato
        3) Valutare il local storage per salvare la partita e continuare in un secondo momento
     */
