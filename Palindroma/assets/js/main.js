/*
1- Chiedere all’utente di inserire una parola 
2- Creare una funzione per capire se la parola inserita è palindroma
*/

//Funzione
function ifPalindroma(word) {
    const size = word.length;
    let wordArray = [size];
    let wordReverseArray = [size];
    let palindrom = true

    for (let i = 0; i < size; i++) {
        wordArray = word.charAt(i);
        wordReverseArray = word.charAt((size - 1) - i);
    }

    for (let i = 0; i < size; i++) {
        if (wordArray[i] != wordReverseArray[i] ) {
            palindrom = false;
        }
    }
    
    return palindrom;
}

//Chiedo all'utente di inserire una parola
const wordUser = prompt('Digita una parola');

//Controllo se la parola è palindroma
const result = ifPalindroma(wordUser);

if (result) {
    alert('La parola è palindroma');
}else {
    alert('La parola non è palindroma');
}