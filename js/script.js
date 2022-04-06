// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo funzione per numeri random
// creo un Array
// creo un ciclo while 
// inserisco al suo interno 5 numeri random controllando che non ci siano ripetizioni
// creo un timer di trenta secondi 
// tramite funzione e prompt faccio inserire i numeri che ricorda l'utente
// ottenuti i 5 numeri li confronto con quelli dell'array
//  stampo i numeri che trovo uguali

// creo funzione per numeri random
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}
// creo un Array
// creo un ciclo while
// inserisco al suo interno 5 numeri random controllando che non ci siano ripetizioni
numberArray=[];
for( let i = 1; numberArray.length < 5;i++){
    let pcNumber = getRandomInt(1, 50)
    if(!numberArray.includes(pcNumber)){
        numberArray.push(pcNumber)
    }
}
 console.log(numberArray);

let div = document.getElementById('app');
div.append('Memorizza questi numeri!:' + ' '+ numberArray.join(' - '));

// creo un timer di trenta secondi 
// tramite funzione e prompt faccio inserire i numeri che ricorda l'utente

numeriUtente=[];
setTimeout(numeriMemorizzati, 3000);
function numeriMemorizzati(){
    numeriUser = prompt('ricordi i numeri?');
    numeriUtente.push(numeriUser)
    return numeriUtente
}
console.log(numeriUtente)