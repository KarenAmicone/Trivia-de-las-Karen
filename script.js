//Esconde esconde pagina 1 y muestra la 2

function myFunction() {
document.getElementById("pagina1").style.display="none"
document.getElementById("pagina2").style.display="block"


//Toma el valor del id name y lo imprime de vuelta en el id bienvenida 
  
let name = document.getElementById("name").value;
document.getElementById("bienvenida").innerHTML = "Bienvenida, " + name;
  
}
  
//Esconde la pagina 2 y muestra la primera pregunta de la trivia #1
  
function functionA() {
document.getElementById("pagina2").style.display="none";
document.getElementById("preguntas1").style.display="block";
  }
  
//Cálculo de puntaje//
let pts_total= 0;
function Q1(){
  if(document.getElementById("fA").checked) {
    pts_total = pts_total + 1;
}
  
document.getElementById("preguntas1").style.display="none"
document.getElementById("preguntas2").style.display="block"
}
  
function Q2() {
if(document.getElementById("sB").checked) {
    pts_total = pts_total + 1;
}
  document.getElementById("preguntas2").style.display="none"
document.getElementById("preguntas3").style.display="block"
}
  
function Q3() {
  if(document.getElementById("tA").checked) {
        pts_total = pts_total + 1;
}
  

// Muestra página de respuestas//
  document.getElementById("preguntas3").style.display="none"
document.getElementById("finalvj").style.display="block"
document.getElementById("resultado1").innerHTML = "¡Tu puntaje fue " + pts_total + " puntos!";

  }
  
function functionB() {
  
document.getElementById("finalvj").style.display="none"
document.getElementById("pagina2").style.display="none"
document.getElementById("comics1").style.display="block"
  
  }
  
  //Establece el total inicial como 0 y tras cada respuesta agrega 1 si es correcta. Se usa style.display para esconder la pregunta previa y mostrar la siguiente
  
  let ptsTotal= 0;
  
  function QC1(){
  
    if(document.getElementById("pC").checked) {
  
    ptsTotal = ptsTotal + 1;}
  
document.getElementById("comics1").style.display="none"
document.getElementById("comics2").style.display="block"
  
  }
  
function QC2() {
  
           if(document.getElementById("sCC").checked) {
  
    ptsTotal = ptsTotal + 1;}
  
   
  
    document.getElementById("comics2").style.display="none"
  
    document.getElementById("comics3").style.display="block"
  
  }
  
  function QC3() {
  
    
  
  if(document.getElementById("tBB").checked) {
  
    ptsTotal = ptsTotal + 1;}
  
   
  
    //Esconde la ultima pregunta y muestra la ultima pagina donde se da el resultado total de puntaje
  
    
  
    document.getElementById("comics3").style.display="none"
  
    document.getElementById("finalcomic").style.display="block"
    
  document.getElementById("resultadocomic").innerHTML = "¡Tu puntaje fue " + ptsTotal + " puntos!";
}  

function functionC() {
  
document.getElementById("finalcomic").style.display="none"
document.getElementById("pagina2").style.display="none"
document.getElementById("harry1").style.display="block"
  
  }
  
//Harry Potter
    let pHTotal= 0;
  
  function Qh1(){
  
    if(document.getElementById("H2").checked) {
  
    pHTotal = pHTotal + 1;}
  
document.getElementById("harry1").style.display="none"
document.getElementById("harry2").style.display="block"
  
  }
  
function Qh2() {
  
           if(document.getElementById("hA").checked) {
  
    pHTotal = pHTotal + 1;}
  
   
  
    document.getElementById("harry2").style.display="none"
  
    document.getElementById("harry3").style.display="block"
  
  }
  
  function Qh3() {  
  
  if(document.getElementById("hPC").checked) {
  pHTotal = pHTotal + 1;} 
  
    //Esconde la ultima pregunta y muestra la ultima pagina donde se da el resultado total de puntaje
  
    document.getElementById("harry3").style.display="none"
  
    document.getElementById("finalHarry").style.display="block"
    
  document.getElementById("resultadoHarry").innerHTML = "¡Tu puntaje fue " + pHTotal + " puntos!";
  }  
  
   //Muestra la lista de preguntas y respuestas. Marca si la persona selecciono la correcta o no
  
    
  

  
    
  
  
//jugar de nuevo o volver a pantalla ppal//
location.reload();
