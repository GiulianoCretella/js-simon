// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo funzione per numeri random
// creo un Array
// creo un ciclo while 
// inserisco al suo interno 5 numeri random controllando che non ci siano ripetizioni
// creo un timer di trenta secondi 
// tramite funzione e prompt faccio inserire i numeri che ricorda l'utente


// creo funzione per numeri random
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
// creo un Array
// creo un ciclo while
// inserisco al suo interno 5 numeri random controllando che non ci siano ripetizioni
pcArray=[];
for( let i = 1; pcArray.length < 5;i++){
    let pcNumber = getRandomInt(1, 50)
    if(!pcArray.includes(pcNumber)){
        pcArray.push(pcNumber)
    }
}
 console.log(pcArray);

let div = document.getElementById('app');
let numeriPc = document.createElement('div');
numeriPc.append('Memorizza questi numeri:' + ' '+ pcArray.join(' - '));
div.append(numeriPc);
setTimeout(d_none, 29990);
function d_none(){
    numeriPc.style.display = "none";
}

// creo un timer di trenta secondi 
// tramite funzione e prompt faccio inserire i numeri che ricorda l'utente
setTimeout(late30, 30001);

function late30(){
    numeriUtente=[];
    for( let i = 1; numeriUtente.length < 5 ;i++){
        let numeriInseriti = parseInt(prompt('Inserici i numeri uno per volta!'));
        numeriUtente.push(numeriInseriti);
    }
    console.log(numeriUtente);
    confrontoNumeri(numeriUtente,pcArray)
    return numeriUtente   
}
// ottenuti i 5 numeri li confronto con quelli dell'array
//  stampo i numeri che trovo uguali

function confrontoNumeri(numeriUtente, pcArray){
    let message = []
    let yoursNumberRow = document.createElement('div');
    yoursNumberRow.setAttribute('class', 'my-row');
    for(let i = 0; i < numeriUtente.length; i++){
        if(pcArray.includes(numeriUtente[i])){
           message.push(numeriUtente[i]);
        }
    }
    console.log(message)
    numeriPc.style.display="block";
    yoursNumberRow.append('I numeri che hai ricordato:'+' '+ message.join(' - '));
    console.log(yoursNumberRow);
    div.append(yoursNumberRow);
}
