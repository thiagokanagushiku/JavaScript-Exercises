//Bolean (true or false)
var possuiGraduacao = false
var possuiDoutorado = true

//Condicionais If e Else
if (possuiGraduacao) {                      //Parâmetro a ser verificado.
    console.log(`Possui graduação`)         //Caso seja verdadeiro.
} else {
    console.log(`Não possui graduação`)     //Caso seja falso.
}

//Dois parâmetros
if (possuiDoutorado) {                                               //Parâmetro a ser verificado.
    console.log('Possui graduação e doutorado')                      //Caso seja verdadeiro.
} else if (possuiGraduacao) {                     //Caso o primeiro parâmetro seja falso. Segundo parâmetro.
    console.log('Possui graduação, mas não possui doutorado') //Caso o segundo parâmetro seja verdadeiro.
} else{
    console.log('Apenas ensino médio'); //Caso o segundo parâmetro seja falso.
}

/*
Parâmetros falsos 
if(false)
if(0) ou if(-0)
if(NaN)
if(Null)
if(undefined)
if('') ou if("") ou if(``)
*/

var nome = 'João'

if(nome) {
    console.log(nome) //Caso seja verdadeiro.
} else {
    console.log('Nome não definido') //Caso seja falso.
}

/*
Truthy
if(true)
if(1)
if('  ')
if('João')
if(-5)
if({}) objeto
*/

/*
! inverte uma operação booleana. !true é igual a false. 
if(!true) //false
if(!1) //false
if(!'') //true
if(!undefined) - true
if(!!' ') - true //verifica o valor original.
if(!!'') - false //verifica o valor original.
*/

/*
Operadores de comparação
10 > 5 //true
5 > 10 //false
20 < 10 //false
10 <= 10 //true
10 >= 11 //false 

10 != '10' //é diferente? false
10 !== '10' //não é identico? true
*/

/*
Operadores lógicos &&  (E) Retorna o último true.
true && true //true
true && false //false
false && true //false
'Gato' && 'Cão' //'Cão'  Retorna o valor do último true.
(5 - 5) && (5 + 5) //0   Retorna o primeiro false.
'Gato' && false //false  Retorna o primeiro false.
(5 >= 5) && (3 < 6) //true 
*/

/*
Operadores lógicos ||  (OU) Retorna o primeiro true. 
true || true //true
true || false //true
false || true //true
'Gato'||'Cão' //'Gato'
(5 - 5) || (5 + 5) // 10
'Gato' || false //Gato
(5 >= 5) || (3 < 6) //true
*/

/*
O switch serve para verificar casos. 
*/

/*
var corFavorita = 'roxo';

switch(corFavorita) {                      //parâmetro
    case 'Vermelho':
        console.log('Bom gosto!');
        break                              //Quebra caso seja verdadeiro. 
    case 'Azul':
        console.log('Muito bom gosto!')
    default:                               //Caso nenhuma opção seja verdadeira. (Padrão) 
        console.log('Não foi dessa vez!')
}
*/

/*
Verificador de idade 
var minhaIdade = 24;
var outraIdade = 32;

if (minhaIdade > outraIdade) {
  console.log('Sou mais velho!');
} else if (minhaIdade === outraIdade) {
  console.log('É a mesma idade');
} else {
  console.log('Sou mais novo!');
}
*/
/* Verificar se é true or false 
var nome = 'Thiago';
var idade = 24;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);
*/

/* 
Comparar número de habitantes

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('O Brasil tem mais habitantes!');
} else {
  console.log('A china tem mais habitantes!');
}
*/