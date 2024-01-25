let numeroSecreto = generaNumeroSecreto();
let intentos = 1;


console.log(numeroSecreto)


function asignarTextoElemento(elemento, texto) {
    let ElementoHtml = document.querySelector(elemento);
    ElementoHtml.innerHTML = texto;
    return;
}

function verificarElIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del uno al 10');

function reiniciarJuego(){
    limpiarCaja

}

function generaNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}