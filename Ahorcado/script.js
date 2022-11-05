var abecedario = "abcdefghijklmnñopqrstuvwxyz";
var Profesiones = [
  "FOTOGRAFO",
  "PROFESOR",
  "ADMINISTRADOR",
  "VENDEDOR",
  "TELEOPERADOR",
  "ESTILISTA",
];
var Deportes = ["BEISBOL", "FUTBOL", "BALONCESTO", "RUGBY"];
var Animales = [
  "LEON",
  "NUTRIA",
  "CASTOR",
  "CONEJO",
  "PERRO",
  "VACA",
  "CABALLO",
];
var Categorias = ["Profesiones", "Deportes", "Animales"];
var RandomNum = Math.floor(Math.random() * Categorias.length);
var ArrayAbecedario = abecedario.split("");
var LetraClickeada = 1;
let Errores = [];
var letraMostrar = [];

function ImprimirAbecedario() {
  for (i = 0; i <= ArrayAbecedario.length - 1; i++) {
    $("#Abecedario").append(
      '<div class="row letras" id="letra_' +
        ArrayAbecedario[i] +
        '" onclick="MostrarLetra(' +
        [i] +
        ')"><div class="col-12">' +
        ArrayAbecedario[i] +
        "</div></div>"
    );
  }
}
function ImprimirAbecedario2() {
  for (i = 0; i <= ArrayAbecedario.length - 1; i++) {
    document.getElementById("Abecedario").innerHTML +=
      '<div class="row letras" id="letra_' +
      ArrayAbecedario[i] +
      '" onclick="MostrarLetra(' +
      [i] +
      ')"><div class="col-12">' +
      ArrayAbecedario[i] +
      "</div></div>";
  }
}

window.onload = ImprimirAbecedario2();

function SeleccionarCategoria() {
  RandomNum = Math.floor(Math.random() * Categorias.length);
  let DocCategoria = document.getElementById("Categoria");
  DocCategoria.innerHTML =
    "<h3>Categoria</h3><p id=" +
    Categorias[RandomNum] +
    ">" +
    Categorias[RandomNum] +
    "</p>";
}
window.onload = SeleccionarCategoria();
function SeleccionarPalabra() {
  let arrayMostrar = [];
  if (RandomNum == 0) {
    arrayMostrar = Profesiones;
  } else if (RandomNum == 1) {
    arrayMostrar = Deportes;
  } else {
    arrayMostrar = Animales;
  }
  SeleccionarLetra(arrayMostrar);
}
function SeleccionarLetra(array) {
    let Palabras = document.getElementById("PalabrasInput");
  let RandomNum = Math.floor(Math.random() * array.length);
  letraMostrar = array[RandomNum].split("");
  Palabras.innerHTML = ""
  for (i = 0; i <= letraMostrar.length - 1; i++) {
  /*   $("#PalabrasInput").append(
      '<input class="inputLetra"type="text" id="pos_' +
        i +
        '"value="' +
        letraMostrar[i] +
        '" disabled readonly>'
        "<input class='inputLetra' type='text' id='pos_"+i+"value='"+letraMostrar[i]+"' disabled readonly"
    ); */
    Palabras.innerHTML += "<input class='inputLetra' type='text' id='pos_"+i+"'value='"+letraMostrar[i]+"' disabled readonly>"
  }
  array.splice(RandomNum, 1)
  console.log(array)
}

window.onload = SeleccionarPalabra();

function MostrarLetra(arg) {
  LetraClickeada = ArrayAbecedario[arg];
  let DocPalabra = document.getElementsByClassName("inputLetra");
  for (i = 0; i <= DocPalabra.length - 1; i++) {
    let LetrasPalabra = document.getElementsByClassName("inputLetra")[i].value;
    if (LetrasPalabra == LetraClickeada.toUpperCase()) {
      DocPalabra[i].classList.add("mostrarLetra");
    } else {
    }
  }
  MostrarAvisoWin();
  MostrarAvisoFail();
  DeterminarCorrecto();
}
var puntuacion = 0;
function MostrarAvisoWin() {
  let ArrayWin = [];
  let DocPalabra = document.getElementsByClassName("inputLetra");
  for (i = 0; i <= DocPalabra.length - 1; i++) {
    if (DocPalabra[i].classList.contains("mostrarLetra")) {
      ArrayWin.push("true");
    } else {
    }
  }
  if (ArrayWin.length == DocPalabra.length) {
    puntuacion++
    contarPuntuacion()
    $("#ModalWin").modal("show");
  }
}
function DeterminarCorrecto() {
  let EsCorrecto = undefined;
  let DocPalabra = document.getElementsByClassName("inputLetra");
  for (i = 0; i <= DocPalabra.length - 1; i++) {
    let LetrasPalabra = document.getElementsByClassName("inputLetra")[i].value;
    if (LetrasPalabra == LetraClickeada.toUpperCase()) {
      EsCorrecto = true;
      break;
    } else {
      EsCorrecto = false;
    }
  }
  return EsCorrecto;
}

function MostrarAvisoFail() {
  let EsCorrecto = DeterminarCorrecto();
  let vidas = document.getElementsByClassName("vidas");
  if (!EsCorrecto) {
    Errores.push("false");
    for (i = 0; i <= vidas.length - 1; i++) {
      if (i == vidas.length - 1) {
        vidas[i].setAttribute("src", "tumba.png");
        vidas[i].classList.remove("vidas");
      }
    }
  }
  if (Errores.length == 10) {
    contarPuntuacion()
    $("#ModalFail").modal("show");
  }
}
var contador =5;
function mostrarPistas() {
  letraMostrar = letraMostrar.join("");
  let docPista = document.getElementById('pista')
  switch (letraMostrar) {
    case "FOTOGRAFO":
      docPista.innerHTML = " <p>Persona cuya ocupación es tomar fo...</p> "  
      break;
    case "PROFESOR":
        docPista.innerHTML = " <p>Se encarga de transmitir conocimiento</p> "  
      break;
    case "ADMINISTRADOR":
        docPista.innerHTML = " <p>Toda empresa necesita uno</p> "  
      break;
    case "VENDEDOR":
        docPista.innerHTML = " <p>Le das tu dinero</p> "  
      break;
    case "TELEOPERADOR":
        docPista.innerHTML = " <p>Resuelve tus solicitudes, pero no lo sueles ver</p> "  
      break;
    case "ESTILISTA":
        docPista.innerHTML = " <p>Te vuelve menos feo</p>"  
      break;
    case "LEON":
        docPista.innerHTML = " <p>Gato grande</p>"
      break;
    case "NUTRIA":
        docPista.innerHTML = " <p>El mamífero con el pelaje mas grueso del mundo</p>"
      break;
    case "CASTOR":
        docPista.innerHTML = " <p>El mejor constructor</p>"
      break;
    case "CONEJO":
        docPista.innerHTML = " <p> ¿Qué hay de nuevo, viejo?</p>"
      break;
    case "PERRO":
        docPista.innerHTML = " <p>Enemigo de los michis</p>"
      break;
    case "VACA":
        docPista.innerHTML = " <p> mmmhhhhhu!!</p>"
      break;
    case "CABALLO":
        docPista.innerHTML = "<p>uno, dos y al lado</p>"
      break;
    case "BEISBOL":
        docPista.innerHTML = "<p>Ted Williams</p>"
      break;
    case "FUTBOL":
        docPista.innerHTML = "<p>Siempre gana Brasil</p>"
      break;
    case "BALONCESTO":
        docPista.innerHTML = "<p>+190 de estatura</p>"
      break;
    case "RUGBY":
        docPista.innerHTML = "<p>Deporte de contacto con balón</p>"
      break;
  }
  contador = contador-1;
  contPista.removeEventListener('click',mostrarPistas)
  console.log(contador)
}
var contPista = document.getElementById("contenedorPista")
function ejecutarPista(){
  if(contador !== 0){
    contPista.addEventListener('click', mostrarPistas)
  }

}
ejecutarPista()
function pistaPredeterminada(){
  let docPista = document.getElementById('pista')
  docPista.innerHTML = "<h3>PISTAS</h3><h4> Tienes:"+contador+"</h4>";
}
function siguientePalabra(){
    btnSiguiente = document.getElementById('modalWinSiguiente')

    btnSiguiente.addEventListener('click',SeleccionarCategoria)
    btnSiguiente.addEventListener('click',SeleccionarPalabra)
    btnSiguiente.addEventListener('click',pistaPredeterminada)
    btnSiguiente.addEventListener('click',ejecutarPista)

}
siguientePalabra()
function contarPuntuacion(){
  let contpunt = document.getElementById("contModalSiguiente")
  let contpuntFin = document.getElementById("contModalFinalizado")
  contpunt.innerHTML = "<h3>Puntuación:"+puntuacion+"</h3> <h3>Pistas restantes:"+contador+"</h3>"
  contpuntFin.innerHTML = "<h3>Puntuación:"+puntuacion+"<div><img src='tumba.png' alt=''></div></h3>"
}



VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
});
