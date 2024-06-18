/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10
let y = 18
if (x > y) {
  console.log('Il numero ' + x + ' è maggiore del numero ' + y);
} else if (x < y) {
  console.log('Il numero ' + y + ' è maggiore del numero ' + x);      
} else {
  console.log('Il numero ' + x + ' e il numero ' + y + ' sono uguali');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 13;
if (num1 !== 5) {
  console.log('not equal');
} else {
  console.log('equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let resto = num1 % 5;
if (resto === 0) {
  console.log('Il numero ' + num1 + ' è divisibile per 5');
} else {
  console.log('Il numero ' + num1 + ' non è divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let somma1 = x + y;
let sottrazione1 = Math.abs(x - y);
if (x === 8 || y === 8 || somma1 === 8 || sottrazione1 === 8) {
  console.log('Uno dei due numeri ' + x + ' e ' + y + ' è uguale ad 8 oppure la loro somma/sottrazione è uguale a 8');
} else {
  console.log('I numeri ' + x + ' e ' + y + ' non sono uguali ad 8 e la loro somma/sottrazione non è uguale a 8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let carrello = 60;
let spedizione = 10;
if (carrello > 50) {
  console.log('Congratulazioni hai diritto alla spezione gratuita. Totale da addebitare = ' + carrello + ' Euro');
} else {
  let carrelloTot = carrello + spedizione;  
  console.log('Al costo del carrello di Euro ' + carrello + ' dobbiamo aggiungere il costo della spedizione di 10 Euro. Totale da addebitare = ' + carrelloTot + ' Euro');
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let carrello2 = 60;
let blackF = 0.8;
carrello2 *= blackF;
if (carrello2 > 50) {
  console.log('Congratulazioni hai diritto alla spezione gratuita. Totale da addebitare = ' + carrello2 + ' Euro');
} else {
  let carrelloTot2 = carrello2 + spedizione;
  console.log('Al costo del carrello di Euro ' + carrello2 + ' dobbiamo aggiungere il costo della spedizione di 10 Euro. Totale da addebitare = ' + carrelloTot2 + ' Euro');
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 23;
let b = 29;
let c = 29;
if (a === b && a === c) {
  console.log('I tre numeri sono uguali!')
} else if (a === b && b > c) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + a + ' - ' + b + ' - ' + c);
} else if (a === b && c > b) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + c + ' - ' + a + ' - ' + b);
} else if (a === c && c > b) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + a + ' - ' + c + ' - ' + b);
} else if (a === c && b > c){
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + b + ' - ' + a + ' - ' + c);
} else if (b === c && c > a) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + b + ' - ' + c + ' - ' + a);
} else if (b === c && a > c){
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + a + ' - ' + b + ' - ' + c);
} else if (a > b && a > c && b > c) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + a + ' - ' + b + ' - ' + c);
} else if (a > b && a > c && c > b) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + a + ' - ' + c + ' - ' + b);
} else if (b > a && b > c && a > c) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + b + ' - ' + a + ' - ' + c);
} else if (b > a && b > c && c > a) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + b + ' - ' + c + ' - ' + a);
} else if (c > a && c > b && a > b) {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + c + ' - ' + a + ' - ' + b);
} else {
  console.log('L\' ordine descrescente dei numeri è il seguente: ' + c + ' - ' + b + ' - ' + a);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let val1 = 'Ciao';
let typeval = typeof( val1 );
if (typeval === 'number') {
  console.log('Il valore fornito è un numero')
} else {
  console.log('Il valore fornito non è un numero ma è ' + typeval);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let d = 13;
let resto2 = d % 2;
if (resto2 === 0) {
  console.log('Il numero è pari');
} else {
  console.log('Il numero è dispari');
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10 e maggiore o uguale a 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
console.log('La proprietà aggiunta è : ' + me.city);
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const primiNum = [];
for (let i = 1; i <= 10; i++) {
  primiNum.push(i);
}
console.log(primiNum);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
primiNum.pop();
primiNum.push(100);
console.log(primiNum);