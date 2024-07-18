//*****************************función mensaje alertatexto***************************************************/  
function mensajeAlerta(){
    var textoIngresado = document.getElementById('texto').value; // Obtener valor ingresado por el usuario
    var restriccionCaracteres =/^[a-z\s]+$/u;
    if(textoIngresado.trim() === '') {
    alert("Por favor ingrese un texto para encriptar");
    }
    else if (restriccionCaracteres.test(textoIngresado)) {
        encriptartexto();
        mostrarTextoEncriptado();
        limpiarTexto();
    } else {
        limpiarTexto();
        alert("Por favor no incluya letras mayúsculas, acentos, ni caracteres especiales");
        }

}

document.getElementById('btnEncriptar').addEventListener('click', mensajeAlerta);

//*****************************función encriptar texto***************************************************/
function encriptartexto(){
    let textoIngresado = document.getElementById('texto').value;
    let textoLista = textoIngresado.split('');
    let textoEncriptado = "";
    for (let i = 0; i < textoLista.length; i++) {
        switch(textoLista[i]){
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoLista[i];
        }
    }
    return textoEncriptado;

}

//*****************************función mostrar texto encriptado***************************************************/
function mostrarTextoEncriptado() {
    var infoNoEncontrada = document.getElementById('idInfoNoEncontrada');
    var botonCopiar = document.getElementById('btnCopiar');
    let textoEncriptado = encriptartexto();
    let elementoHtml = document.getElementById('idTextoEncriptado'); 
    elementoHtml.innerHTML = textoEncriptado;
    infoNoEncontrada.style.display = 'none'; // Ocultar la información de datos no encontrados la imagen y los dos textos 
    botonCopiar.style.display = 'block'; // Mostrar el boton de copiar
    elementoHtml.style.display = 'block'; // Mostrar el texto
}

//*****************************función copiar texto***************************************************/   
function copiarTexto() {
    const btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.addEventListener('click', () => {
        const elementoHtml = document.getElementById('idTextoEncriptado').innerText;
        navigator.clipboard.writeText(elementoHtml)
            .then(() => {
                /*console.log('Texto copiado');*/
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    });
    
}

//*****************************función pegar texto***************************************************/  
function pegarTexto() {
    const textoPegado = document.getElementById('texto');
    textoPegado.addEventListener('paste', (event) => {
        navigator.clipboard.readText()
            .then(text => {
                textoPegado.value = text;
            })
            .catch(err => {
                console.error('Error al leer el texto del portapapeles: ', err);
            });
    });
}

// Inicializar eventos
copiarTexto();
pegarTexto();

//*****************************función limpiar texto***************************************************/  
function limpiarTexto(){
    document.querySelector('#texto').value = '';
}


//*******************************Funcion de desencriptar+++++++++++++++++++++++++++++++++++++++++++++++ */
function desencriptar(){
    //const btnDesencriptar = document.getElementById('btnDesEncriptar');
    let textoEncriptado = document.getElementById('texto').value;
    
        if(textoEncriptado.trim() === '') {
            alert("Por favor ingrese un texto para desencriptar");
    }
    else if (textoEncriptado.includes('enter') || textoEncriptado.includes('imes') || textoEncriptado.includes('ai') || textoEncriptado.includes('ober') || textoEncriptado.includes('ufat')) {
        const textoDesencriptado = textoEncriptado
            .replace(/enter/g, 'e')  // Reemplaza 'enter' con 'e'
            .replace(/imes/g, 'i')   // Reemplaza 'imes' con 'i'
            .replace(/ai/g, 'a')     // Reemplaza 'ai' con 'a'
            .replace(/ober/g, 'o')   // Reemplaza 'ober' con 'o'
            .replace(/ufat/g, 'u');  // Reemplaza 'ufat' con 'u'
            /*console.log(`el texto encriptado es: ${textoDesencriptado}`)*/
            document.getElementById('idTextoEncriptado').innerText = textoDesencriptado;
            mostrarTextoDesencriptado();
    }

        else {
            document.getElementById('idTextoEncriptado').innerText = textoEncriptado;
            /*console.log(`El texto no ha sido encriptado ${textoEncriptado}`);*/
            alert('El texto ingresado no ha sido encriptado inicialmente');
        }
        
}
document.getElementById('btnDesEncriptar').addEventListener('click', desencriptar);



//*******************************Funcion mostrar texto desencriptado+++++++++++++++++++++++++++++++++++++++++++++++ */
function mostrarTextoDesencriptado() {
    var infoNoEncontrada = document.getElementById('idInfoNoEncontrada');
    var botonCopiar = document.getElementById('btnCopiar');
    let elementoHtml=document.getElementById('idTextoEncriptado')
    let textoDesencriptado = document.getElementById('idTextoEncriptado').value; 
    infoNoEncontrada.style.display = 'none'; // Ocultar la información de datos no encontrados la imagen y los dos textos 
    botonCopiar.style.display = 'block'; // Mostrar el boton de copiar
    elementoHtml.style.display = 'block'; // Mostrar el texto
    limpiarTexto(); //limpiar texto
}

