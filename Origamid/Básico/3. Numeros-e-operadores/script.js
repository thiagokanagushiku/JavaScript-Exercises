//possui precisão até 15 digitos.

//2000
var ano = 2e3

//0.002
var decimal = 2e-3

//expoente (16)
var expoente = 4 ** 2

//restante (4)
var restante = 14 % 5

//Not a number (Não é um número)
var testeNan = 'Comprei 10' / 10 

//verficador de Nan (true or false)
var num = 'vinte' * 10
console.log(isNaN(num))

// Operadores binários. (precisa de dois números.)
// primeiro ocorre a divisão e multiplicação. Depois a adição e subtração. (35)
var total = 10 + 5 * 2 / 2 + 20
console.log(total)

//Operadores aritméticos unários. (incremento) x = x + 1
var incremento = 1
console.log(incremento++) //Soma depois.

var incremento2 = 1
console.log(++incremento2) //Soma antes.

// x = x - 1
var decremento = 1
console.log(decremento--) //Subtração depois.

var decremento2 = 1
console.log(--decremento2) //Subtração antes.

//Nan
var nan = '3s'
var non = 3
var conta = nan / non


//Soma (número) 
var num = +'200'
var ero = +'50'
var soma = num + ero //250


//Incremento
var valor = '5';
console.log(++valor)

//transformar em número
var peso = +'80' / 2;
console.log(`${peso} Kg`)