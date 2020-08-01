let img1 = document.getElementById("circulo1")
let img2 = document.getElementById("circulo2")
let painel = document.getElementById("painel")

//Transição de troca de banner

function trocaImg1() {
    painel.src = "img/painel_vsp.png"
    img1.src = "img/circuloLaran.png"
    img2.src = "img/circuloBranco.png"
}

function trocaImg2() {
    painel.src = "img/painel2_vsp.png"
    img1.src = "img/circuloBranco.png"
    img2.src = "img/circuloLaran.png"
}
