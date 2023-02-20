function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let textoCifrado = texto
                            .replace(/e/gi,"enter")
                            .replace(/i/gi,"imes")
                            .replace(/a/gi,"ai")
                            .replace(/o/gi,"ober")
                            .replace(/u/gi,"ufat");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./img/encriptado1.png";
    } else {
        imagen.src = "./img/encriptado.jfif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./img/desencriptado.jfif";
    } else {
        imagen.src = "./img/encriptado.jfif";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}