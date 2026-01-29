function checkLongitud(longitud) {
  if (longitud.length === 0) return "debe ingresar la longitud";
  if (typeof longitud !== "string") return "la longitud recibida no es valida";
  if (longitud < 3) return "la longitud debe ser mayor o igual a 3";
  if (longitud > 10) return "la longitud debe ser menor o igual a 10";
  else return longitud;
}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas) {
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!@#$%^&*()+=-?></:;_";

  var letrasMayusculas = letras.toUpperCase();

  var caracteresDisponibles = letras;

  if (incluirEspeciales) caracteresDisponibles += especiales;

  if (incluirNumeros) caracteresDisponibles += numeros;

  if (incluirMayusculas) caracteresDisponibles += letrasMayusculas;

  var contrasena = "";

  for (var i = 0; i < longitud; i++) {
    var caracter = caracteresDisponibles.charAt(
      Math.floor(Math.random() * caracteresDisponibles.length)
    );
    contrasena = contrasena + caracter;
  }

  return "contrasena generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
