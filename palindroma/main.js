const input = prompt('inserisci una parola').toLocaleLowerCase();

const lunghezza=input.length;

function palindroma(str){
    for(let contatore1=0 , contatore2=lunghezza-1; contatore1 <= contatore2; contatore1++ , contatore2--){ 
       console.log(`questo è il contatore 1: ${contatore1}`);
       console.log(`questo è il contatore 2: ${contatore2}`);
       console.log(input.charAt(contatore1));
       console.log(input.charAt(contatore2));
          
        if(input.charAt(contatore1) !== input.charAt(contatore2)){
            console.log('false')
            alert('non è Palindromo');
            return 'non è palindromo';
        }
       }
         console.log('true')
            alert('è Palindromo');
            return 'è Palindromo';
 }

 palindroma(input)