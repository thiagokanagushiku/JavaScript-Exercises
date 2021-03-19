function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/homem-criança.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/mulher-criança.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '10px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}