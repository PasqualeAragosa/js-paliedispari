/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

//Funzione 1: Generiamo un numero random per il pc da 1 a 5
function getRandomNum() {
    return (Math.floor(Math.random() * 5) + 1);
}

//Funzione 2: Sommiamo il numero_user e il numero_pc e stabiliamo se è pari o dispari
function pariDispari(userN, pcN) {
    const sum = userN + pcN;
    if (sum % 2 == 0) {
        return 'pari';
    }else {
        return 'dispari';
    }
}

//Variabili
let userChoise;
let userNum;

//User sceglie "pari" o "dispari" e un numero da 1 a 5
userChoise = prompt('Digita pari o dispari');
console.log('Scelta pari o dispari user: ', userChoise);

do {
    userNum = Number(prompt('Digita un numero da 1 a 5'));
} while(userNum > 5 || userNum < 1);
console.log('Scelta numero user: ', userNum);

//Dichiariamo chi ha vinto
const pcNum = getRandomNum();
const result = pariDispari(userNum, pcNum);
console.log('Numero pc: ', pcNum);
console.log('Risultato somma: ', result);

if (result === userChoise) {
    alert('Hai vinto');
} else {
    alert('Hai perso!');
}

