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
        risposta.innerHTML = `la parola ${parola.value} è palindroma`;
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




const scelta = document.getElementById("pariODispari");
const numero = document.getElementById("number");
const secondForm = document.getElementById("secondForm");
const vincitore = document.getElementById("testo2")
secondForm.addEventListener("submit",function(event){
    event.preventDefault();
    if(scelta.value == "pari" || scelta.value == "dispari"){
        if(numero.value <= 5 && numero.value >= 1){
            const computer = randomNumber();
            console.log(computer)
            const a = parseInt(numero.value) + computer;
            console.log(a);
            const somma = pari(a);
            if(somma == scelta.value){
                vincitore.innerHTML = `il computer ha fatto :${computer}. Quindi hai vinto`  ;
            }else{
                vincitore.innerHTML = `il computer ha fatto : ${computer}. Quindi hai perso`  ; ;
            }
            
        }else{
            vincitore.innerHTML = "devi selezionare un numero da 1 a 5"
        }

    }else{
        vincitore.innerHTML = `devi selezionare o 'pari' o 'dispari`;
    };
    
});

//funzione per avere un numero random da 1 a 5

function randomNumber (){
    let num = Math.floor(Math.random()*5 +1);
    return num;
}

//funzione per capire se un numero è pari

function pari(x){
    if (x%2 == 0){
        return "pari";
    }else{
        return "dispari";
    }
}



