/* ? Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma
*/
//seleziono il form e il testo in input e il div di uscita
 
const form = document.getElementById("form");
const parola = document.getElementById("parolaInIngresso");
const risposta = document.getElementById("testo");
risposta.innerHTML = "casa";

//funzione per scrivere una parola al contrario
function reverseWord (word){
    let reversedWord = "";
    
    for (let i = word.length - 1 ; i >= 0 ; i--){
        reversedWord += word[i];
    }
    return reversedWord;
};



form.addEventListener("submit",function(event){
    //annullo il normale funzionamento del form
    event.preventDefault();
    //controllo se sia palindroma
    if(parola.value == reverseWord(parola.value) ){
        risposta.innerHTML = `la parola ${parola.value} è palindraìoma`
    }else{
       risposta.innerHTML = `la parola ${parola.value} non è palindroma`;
    }

});


