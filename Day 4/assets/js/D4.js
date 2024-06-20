/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 1----------------------')
function area(l1, l2) {
    let area = l1 * l2;
    console.log('Dati i valori della base ' + l1 + ' e dell\'altezza ' + l2 + ', l\'area del rettangolo è: ' + area)
}

area(3, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 2----------------------')
function crazySum (num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
       console.log('Uno o entrambi i parametri inseriti non sono numeri interi');
    } else {
        let somma;
        if (num1 !== num2) {
        somma = num1 + num2;
        console.log('La somma tra ' + num1 + ' e ' + num2 + ' è uguale a: ' + somma);
        } else {
            somma = num1 * 6;
            console.log('Dato che hai inserito due numeri uguali (' + num1 + '), la loro somma viene moltiplicata per tre ed il risultato è: ' + somma);
        }
    }
}

crazySum(3, 6.5);
crazySum(3, 6);
crazySum(5, 5);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 3----------------------')
function crazyDiff (num1) {
    let numCost = 19;
    let differenza;
    if (num1 <= numCost) {
        differenza = Math.abs(num1 - numCost);
        console.log('Il valore assoluto della differenza tra ' + num1 + ' e ' + numCost + ' è uguale a: ' + differenza);
    } else {
        differenza = (Math.abs(num1 - numCost)) * 3;
        console.log('Dato che hai inserito un numero (' + num1 + ') maggiore di 19, la loro differenza viene moltiplicata per tre ed il risultato è: ' + differenza);
    }
}

crazyDiff(9);
crazyDiff(24);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 4----------------------')
function boundary (n) {
    let controllo;
    if (!Number.isInteger(n)) {
        console.log('Il parametro inserito non è un numero intero');
        return;
    } else if ((n > 20 && n <= 100) || n === 400) {
      controllo = true;
    } else {
        controllo = false;
    }
    console.log('Dato il parametro ' + n + ' il risultato della comparazione è: ' + controllo)
}

boundary(400);
boundary(101);



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 5----------------------')
function epify (stringa) {
    if (typeof(stringa) !== 'string') {
        console.log('Il parametro inserito non è una stringa');
        return;
    } else if (stringa.indexOf('Epicode') === 0){
        console.log(stringa);
    } else {
        stringa = 'Epicode ' + stringa;
        console.log(stringa)
    }
}

epify('Epicode è forte');
epify('è forte');
epify(true);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 6----------------------')

function check3and7 (num1) {
    if (num1 <= 0) {
        console.log('Il parametro inserito è minore o uguale a zero');
        return;
    } else if (num1 % 3 === 0 && num1 % 7 === 0) {
        console.log('Il numero ' + num1 + ' è divisibile sia per 3 che per 7');
    } else if (num1 % 3 === 0) {
        console.log('Il numero ' + num1 + ' è divisibile per 3');
    } else if (num1 % 7 === 0) {
        console.log('Il numero ' + num1 + ' è divisibile per 7');
    } else {
        console.log('Il numero ' + num1 + ' non è divisibile nè per 7 nè per 3');
    }
}

check3and7(-4);
check3and7(49);
check3and7(36);
check3and7(21);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 7----------------------')
function reverseString (stringa) {
    if (typeof (stringa) !== 'string') {
        console.log('Il parametro inserito non è una stringa');
        return;
    } else {
        let i = 2;
        let newStringa = stringa.slice(-1);
        while (i <= stringa.length) {
            newStringa += stringa.slice((-i), (-(i-1)));
            i++;
        }
        console.log(newStringa);
    }

}

reverseString('Questa è una prova');
reverseString('Porco zio');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 8----------------------')
function upperFirst (stringa) {
    if (typeof (stringa) !== 'string') {
        console.log('Il parametro inserito non è una stringa');
        return;
    } else {
        let newArray = stringa.split("");
        let push = newArray[0].toUpperCase();
        let stringaF = push;
        for (let i = 1; i < newArray.length; i++) {
            if (newArray[i] === ' ') {
                push = newArray[i] + newArray[(i+1)].toUpperCase();
                stringaF += push;
                i++;
            } else {
                push = newArray[i];
                stringaF += push;
            }
        }
        console.log(stringaF);
    }
}

upperFirst('questa è una prova');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 9----------------------')
function cutString (stringa){
    let a = stringa.length;
    let newString = stringa.slice(1, (a-1));
    console.log(newString);
}

cutString('Questa è una prova davvero');


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('-------------------ESERCIZIO 10----------------------')
function giveMeRandom (n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random()* 11);
    }
    console.log(array);
}

giveMeRandom(8);