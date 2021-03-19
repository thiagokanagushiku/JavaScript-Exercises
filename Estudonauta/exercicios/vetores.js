let numeros = [0, 9, 6, 7, 3]

/*
//percurso para exibição de vetor
for(let pos = 0;pos < numeros.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}
*/


numeros.sort()
for(let pos in numeros) {
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
}


/*
let pos = numeros.indexOf(6)
if (pos == -1){
    console.log(`Valor não encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
*/