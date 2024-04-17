const campo_texto = document.querySelector("#texto_encriptado");
const campo_mensaje = document.querySelector("#campo_mensaje");
const texto_bajo_imagen = document.querySelector("#texto_bajo_imagen");
const texto_bajo_imagen_dos = document.querySelector("#texto_bajo_imagen_dos");

//encriptar texto metiendo letras en medio etc...
const matriz_code=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

/*Esconder background image al aparecer el texto*/

campo_texto.addEventListener('input', () => {
    if (campo_texto.value.length > 0) {
      campo_mensaje.classList.add('hide-background');
      texto_bajo_imagen.style.display = "none";
      texto_bajo_imagen_dos.style.display = "none";
    } else {
      campo_mensaje.classList.remove('hide-background');
      texto_bajo_imagen.style.display = "block";
      texto_bajo_imagen_dos.style.display = "block";
    }
  });
 
//Ecriptar y desencriptar
function btn_encriptar(){
    const texto = mayusculas(campo_texto.value);
    const textoFinal = encriptar(texto);
    campo_mensaje.value = textoFinal;
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function btn_desencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}
function desencriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;
}
//minusculas y sin acentos
function mayusculas(fraseInicial) {
    fraseInicial = fraseInicial.toLowerCase();
    fraseInicial = fraseInicial.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    return fraseInicial;
}
//boton copiar
function btn_copiar(){
    const texto = campo_mensaje.value;
    if (navigator.clipboard && window.isSecureContext) {
      // Use the clipboard API if it's available and the page is secure
      navigator.clipboard.writeText(texto)

    } else {
      // Fall back to the execCommand method if the clipboard API isn't available
      const textarea = document.createElement('textarea');
      textarea.value = texto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
//usando figma (diseñador web)