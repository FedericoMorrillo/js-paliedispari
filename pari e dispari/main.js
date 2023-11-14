'use strict'

const input = Number(prompt('inserisci un numero da 1 a 5'));
const input2 = prompt('pari o dispari?').toLowerCase();

function numeroAvversario (min,max){
return Math.floor(Math.random()*max + min);
}

 let avversario = numeroAvversario(1,5) ;
 console.log('il tuo avversario ha scelto: '+ avversario);

const sommaTotale = input + avversario;
console.log(`la somma tra il tuo numero: ${input} e il numero del tuo avversario: ${avversario} è: ${sommaTotale}`);

function pariODispari (boolean){
    if( (sommaTotale % 2 ===0 && input2 ==='pari')|| (sommaTotale % 2 ===1 && input2 === 'dispari')){
        alert('Hai Vinto!');
    }
    else {
           alert('Hai Perso!');
        }
}

pariODispari()