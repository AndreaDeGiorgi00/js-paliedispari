/* ? Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma
*/
//seleziono il form e il testo in input e il div di uscita
 
const form = document.getElementById("form");
const parola = document.getElementById("parolaInIngresso");
const risposta = document.getElementById("testo");


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

// ! -------------------------------------------

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 
tramiite un form.Generiamo un numero random (sempre da 1 a 5)
per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//creo una funzione per il preventDefoult

//scegliere tra pari o dispari 

let validatore = false;
const scelta = document.getElementById("pariODispari");
const nuero = document.getElementById("number");
const form2 = document.getElementById("secondForm");

form2.addEventListener("submit",function(event)){
    event.preventDefault();
    /*
    while(!validatore){
        if(scelta.value == "pari" || scelta.value == "dispari"){
            validatore = true;
        }else{
            console.log("sbagliato a scegliere")
        }
    
    */
   };
}
