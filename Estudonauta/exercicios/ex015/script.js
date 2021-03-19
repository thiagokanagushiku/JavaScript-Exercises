function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var p1 = document.getElementsByTagName('p')[0]
    var dia = new Date()
    var hora = dia.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha-pequeno.png'
        document.body.style.background = '#e6d6ae'
    } else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde-pequeno.png'
        document.body.style.background = '#f05b03'
    } else {
        img.src = 'img/noite-pequeno.png'
        document.body.style.background = '#343d44'
        p1.style.color = 'white'
    }
} 