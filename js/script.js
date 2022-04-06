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
div.append('Memorizza questi numeri!:' + ' '+ pcArray.join(' - '));

// creo un timer di trenta secondi 
// tramite funzione e prompt faccio inserire i numeri che ricorda l'utente
setTimeout(late30, 10000)

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
    for(let i = 0; i < numeriUtente.length; i++){
        if(pcArray.includes(i+1)){
            console.log("li hai ricordati tutti!");
        }else if(!pcArray.includes(i+1){

        }
    }
}
