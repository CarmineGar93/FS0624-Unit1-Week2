/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let spiegazione = document.getElementById("primoPar");
spiegazione.innerText =
  "I data types primitivi di JavaScript che possiamo assegnare ad una variabile sono: ";
let tipo1 =
  "Tipo numero - Questo tipo di dato è numerico e può essere intero o decimale";
let tipo2 =
  "Tipo boolean - Questo tipo di dato è booleano e può assumere solo i valori true o false";
let tipo3 = "Tipo stringa - Questo tipo di dato è una sequenza di caratteri";
let tipo4 =
  "Tipo null - Questo tipo di dato segnala l' assenza intenzionale di un valore";
let tipo5 =
  "Tipo undefined - Questo tipo di dato segnala l'assenza momentanea di un valore";
console.log(
  spiegazione.innerHTML +
    "\n" +
    tipo1 +
    "\n" +
    tipo2 +
    "\n" +
    tipo3 +
    "\n" +
    tipo4 +
    "\n" +
    tipo5
);

//creazione lista nella nostra pagina html
let obj = document.getElementById("test");
let ul = document.createElement("ul");
let tipo = [tipo1, tipo2, tipo3, tipo4, tipo5];
for (let i = 0; i < tipo.length; i++) {
  let li = ul.appendChild(document.createElement("li"));
  li.innerText = tipo[i];
}
obj.appendChild(ul);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "Carmine";
console.log(myName);
document.getElementById("myName").innerHTML = "Il mio nome è " + myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma = 12 + 20;
console.log(somma);
document.getElementById("somma").innerHTML =
  "Il risultato della somma tra 12 e 20 è : " + somma;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);
document.getElementById("varX").innerHTML =
  "Il valore della variabile x è di : " + x;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* myName = 'Gargiulo'; //errore in console dato che ho dichiarato la variabile con const
console.log(myName);*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = x - 4;
console.log(y);
document.getElementById("sottrazione").innerHTML =
  "Il risultato della sottrazione tra x (che contiene il numero " +
  x +
  ") e 4 è : " +
  y;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let verifica =
  name1 !== name2
    ? 'Le due stringhe "' + name1 + '" e "' + name2 + '" sono diverse'
    : "Le due stringhe " + name1 + "e " + name2 + " sono uguali";
console.log(verifica);
document.getElementById("verificaUno").innerHTML = verifica;

let verifica2 =
  name1 === name2.toLowerCase()
    ? 'le due stringhe "' + name1 + '" e "' + name2.toLowerCase() + '" adesso sono uguali'
    : 'le due stringhe "' + name1 + '" e "' + name2.toLowerCase() + '" sono ancora diverse';
console.log("Dopo aver usato la funzione .toLowerCase " + verifica2);
document.getElementById('verificaDue').innerHTML = 'Dopo aver usato la funzione .toLowerCase ' + verifica2;
