function contar() {

    //Pegando os elementos
    let inicio = document.querySelector('#txtinicio')
    let fim = document.querySelector('#txtfim')
    let passo = document.querySelector('#txtpasso')
    let res = document.querySelector('#res')

    //Verificador de dados
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'

        //Convertendo em número
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
        }
            
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}