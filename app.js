// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert ("Error, por favor ingrese un nombre");
    } else {
        listaDeAmigos.push(amigo);
        document.querySelector('#amigo').value = '';
        actualizarListaEnPantalla();
    }
}

function actualizarListaEnPantalla() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length ; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
        console.log(listaDeAmigos[i]);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length != 0){
        let indiceAleatorio = Math.floor(Math.random()* listaDeAmigos.length );
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = listaDeAmigos [indiceAleatorio];
        console.log(listaDeAmigos);
        console.log(indiceAleatorio);
        return;

    }
}


