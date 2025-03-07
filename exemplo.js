function testeTexto() {
   document.getElementById("titulo").innerHTML += " O Melhor Frango do Brasil"
}

function testecolor() {
   const titulo = document.getElementById("titulo")

    titulo.style.color = "red"
    titulo.style.fontSize = "100px"
}

function reset() {
   document.getElementById("titulo").innerHTML = "O Melhor Frango do Brasil"
}

function testinput() {
    document.getElementById("parana").value = "tarde"
}

function limpaInput() {
    if (confirm("Tem certeza?")) {
        document.getElementById('exampleFormControlInput1').value = ""
        document.getElementById('exampleFormControlInput2').value = ""
        document.getElementById('exampleFormControlInput3').value = ""
        document.getElementById('exampleFormControlTextarea1').value = ""
        document.getElementById('inputPassword6').value = ""
        document.getElementById('inputPassword7').value = ""
    }
}

function colorirLabel1() {
    const texto1 = document.getElementById('texto1')
    texto1.style.color = "red"
}

function colorirLabel2() {
    const texto2 = document.getElementById('texto2')
    texto2.style.color = "red"
}

function colorirLabel3() {
    const texto3 = document.getElementById('texto3')
    texto3.style.color = "red"
}

function colorirLabel4() {
    const texto_area = document.getElementById('texto_area')
    texto_area.style.color = "red"
}

function colorirLabel5() {
    const senha = document.getElementById('senha')
    senha.style.color = "red"
}

function colorirLabel6() {
   const comfirmar_senha = document.getElementById('comfirmar_senha')
    comfirmar_senha.style.color = "red"
}

function populartexto1() {
   document.getElementById("exampleFormControlInput1").value = "Email"
}

function populartexto2() {
    document.getElementById("exampleFormControlInput2").value = "Nome"
}

function populartexto3() {
    document.getElementById("exampleFormControlInput3").value = "Sobrenome"
}

function populartexto4() {
    document.getElementById("exampleFormControlTextarea1").value = "Descrição"
}

function populartexto5() {
    document.getElementById("inputPassword6").value = "Senha"
}

function populartexto6() {
    document.getElementById("inputPassword7").value = "Comfirmar Senha"
}

