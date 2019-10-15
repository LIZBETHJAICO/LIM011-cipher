
//Llamar todo lo que quiero dle formulario
let btncifrar = document.getElementById("cifrado");
let btndescifrar = document.getElementById("descifrado");
let  ndesplazamiento = document.getElementById("num");
let  nombresector = document.getElementById("nombresector");
let  ipordenador = document.getElementById("ipordenador");
let contraseña=document.getElementById("contraseña");
let btniniciar =document.getElementById('hello');
let barradecode=document.getElementById('barradecode');
let barraencode=document.getElementById('barraencode');
let btndescifrado = document.getElementById("btndescifrado");
let  desplazar = document.getElementById("desplazar");
let  pcifrada = document.getElementById("Pcifrada");
let  btnlimpiar = document.getElementById("limpiar");

// crear eventos 

btncifrar.addEventListener('click', cifrado);
function cifrado() {
  let nombresectorcifrar = nombresector.value;
  let ipordenadorcifrar = ipordenador.value;
  let contraseñacifrar=contraseña.value;
  let datos = (nombresectorcifrar +"\n"+ipordenadorcifrar+ "\n"+ contraseñacifrar);
  let num = parseInt(ndesplazamiento.value);
  let  datoscifrados = window.cipher.encode(num, datos);
 document.getElementById('datoscifrados').innerHTML = datoscifrados;

}

btndescifrar.addEventListener('click', descifrado);
function descifrado() {
  let nombresectorcifrar = nombresector.value;
  let ipordenadorcifrar = ipordenador.value;
  let contraseñacifrar=contraseña.value;
  let datos = (nombresectorcifrar + "\n" + ipordenadorcifrar + " \n"+ contraseñacifrar);
  let num = parseInt(ndesplazamiento.value);
  
  let  datoscifrados = window.cipher.decode(num, datos);
  document.getElementById('datoscifrados').innerHTML = datoscifrados;
}
btndescifrado.addEventListener('click', descifrador);
function descifrador() {
  let datos2 = pcifrada.value;
  
  let num2 = parseInt(desplazar.value);
  
  let  datoscifrados = window.cipher.decode(num2, datos2);
  document.getElementById('Pdescifrada').innerHTML = datoscifrados;
}


btniniciar.addEventListener('click',iniciar);
function iniciar(){
  document.getElementById('welcome').classList.add('ocultar');
  document.getElementById('barras').classList.remove('ocultar');
  document.getElementById('toshow').classList.remove('ocultar');
}
barradecode.addEventListener('click',decode);
function decode(){
  document.getElementById('welcome').classList.add('ocultar');
  document.getElementById('barras').classList.remove('ocultar');
  document.getElementById('toshow').classList.remove('ocultar');
  document.getElementById('coder').classList.remove('ocultar');
  document.getElementById('coder1').classList.add('ocultar');
}


barraencode.addEventListener('click',encode);
function encode(){
  document.getElementById('coder').classList.add('ocultar');
  document.getElementById('coder1').classList.remove('ocultar');
  
}

btnlimpiar.addEventListener('click',limpiar);
function limpiar(){
nombresector.value="";
ipordenador.value="";
contraseña.value="";
ndesplazamiento.value="";
 
}