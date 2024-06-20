// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 1----------------------');
function giveMeRandom(n) {
    if (!Number.isInteger(n)) {
        console.log('Il parametro inserito non è un numero intero');
        return;
    }
    let array = [];
    for (let i = 0; i < n; i++) {
        let value = Math.floor(Math.random() * 20);
        array.push(value);
    }
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                let a = Math.floor(Math.random() * 20);
                array[i] = a;
                i = 0;
                j = 0;

            }
        }

    }
    return array;
}



function checkArray (array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log('Il valore ' + array[i] + ' all\' indice ' + i + ' è maggiore o uguale a 5');
            somma += array[i];
        } else {
            console.log('Il valore ' + array[i] + ' all\' indice ' + i + ' è minore di 5'); 
        }
    }
    console.log('La somma totale dei numeri maggiori di 5 è di: ' + somma);    
}

checkArray(giveMeRandom(8));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 2----------------------');
const eCommerce = [
    {
        name: 'PC',
        id: 0,
        price: 900,
        qty: 10,
    },
    {
        name: 'Telefono',
        id: 1,
        price: 600,
        qty: 10,
    },
    {
        name: 'Mouse',
        id: 2,
        price: 25,
        qty: 40,
    },
    {
        name: 'Tastiera',
        id: 3,
        price: 20,
        qty: 30,
    },
    {
        name: 'Monitor',
        id: 4,
        price: 150,
        qty: 15,
    },
]

function shoppingCartTotal(array) {
    let carrello = 0;
    for (let i = 0; i < array.length; i++) {
        carrello += (array[i].price * array[i].qty);
    }
    console.log('Il carrello totale è: ' + carrello + ' Euro');
}

shoppingCartTotal(eCommerce);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 3----------------------');
const newObj = {
    name: 'Tappetino',
    id: 5,
    price: 10,
    qty: 35,
}

function addToShoppingCart(array, obj) {
    array.push(obj);
    console.log('Adesso il tuo carrello ha ' + array.length + ' elementi');
}

addToShoppingCart(eCommerce, newObj);


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 4----------------------');
function maxShoppingCart (array){
    let maxShop = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].price > maxShop.price) {
            maxShop = array[i];
        }    
    }
    console.log('L\' elemento più costoso del tuo carrello è il seguente: ' + maxShop.name + ' al costo di ' + maxShop.price + ' Euro');    
}

maxShoppingCart(eCommerce);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 5----------------------');
function latestShoppingCart (array) {
    let latestShop = array.pop();
    console.log(latestShop);

}

latestShoppingCart(eCommerce);
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 6----------------------');
function loopUntil (n) {
    let counter = 0;
    let random;
    while (counter < 3) {
        random = Math.floor(Math.random() * 10);
        if (random > n){
            console.log('Numero ' + random);
            counter ++
        } else {
            console.log('Numero ' + random);
        }
    }
}

loopUntil(4);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
