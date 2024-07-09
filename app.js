
//*****************************función mensaje alertatexto***************************************************/  
    function mensajeAlerta(){
        var textoIngresado=document.getElementById('texto').value; //Obtener valor ingresado por el usuario
        var restriccionCaracteres=/^(?!\s*$)[a-z0-9ñ\s]+$/;
        if (restriccionCaracteres.test(textoIngresado)) {
            encriptartexto();
            mostrarTextoEncriptado();

        }else{
            limpiarTexto();
            alert("El texto no es correcto")
        }

    }

document.getElementById('btnEncriptar').addEventListener('click', mensajeAlerta);

//*****************************función encriptar texto***************************************************/
    function encriptartexto(){
        let textoIngresado= document.getElementById('texto').value;
        let textoLista= textoIngresado.split('');
        let textoEncriptado="";
        for(i=0; i<textoLista.length; i++){
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

    //let textoEncriptado=encriptartexto(textoOriginal);

//*****************************función mostrar texto encriptado***************************************************/

    function mostrarTextoEncriptado() {
        var textoEncriptado=document.getElementById('textoEncriptado');
        var inforNoEncontrada=document.getElementById('infoNoEncontrada');
        var botonCopiar = document.getElementById('btnCopiar');
        var btnEncriptar= document.getElementById('btnEncriptar');
        inforNoEncontrada.style.display = 'none'; // Ocultar la información de datos no encontrados la imagen y los dos textos 
        botonCopiar.style.display = 'block'; // Mostrar el boton de copiar
        AsignarTextoElemento('textoEncriptado', encriptartexto()); //asignar texto encriptado a parrafo del html
        //console.log(document.getElementById('textoEncriptado')).value;
        textoEncriptado.style.display = 'block'; // Mostrar el texto
        //limpiarTexto();
    }

   
//*****************************función asignar texto***************************************************/
    function AsignarTextoElemento(elemento, texto){
        let elementoHtml= document.getElementById(elemento);
        elementoHtml.innerHTML= texto;
    return;
    }

 //*****************************función copiar texto***************************************************/   

    function copiarTexto() {
        const btnCopiar = document.getElementById('btnCopiar');
        btnCopiar.addEventListener('click', () => {
           // const copiartexto=encriptartexto();
           const copiartexto=document.getElementById('textoEncriptado').value;
           //console.log(document.getElementById('textoEncriptado').value);
            // Copiar texto al portapapeles
            navigator.clipboard.writeText(copiartexto)
                .then(() => {
                   // console.log(`${copiartexto}`) no va hacer nada en este punto
                
                })
                .catch(err => {
                    console.error('Error al copiar el texto: ', err);
                });
        });
        
    }

    //*****************************función pegar texto***************************************************/  
    
    function pegarTexto() {
        const textoPegado = document.getElementById('texto');
        textoPegado.addEventListener('contextmenu', (event) => {
            
    
            // Pegar el texto del portapapeles en el input
            navigator.clipboard.readText()
                .then(text => {
                    textoPegado.value = text;
                })
                .catch(err => {
                    console.error('Error al leer el texto del portapapeles: ', err);
                });
        });
    }
    
    copiarTexto();
    pegarTexto();


    //*****************************función limpiar texto***************************************************/  

    function limpiarTexto(){
        document.querySelector('#texto').value='';
    }

        
