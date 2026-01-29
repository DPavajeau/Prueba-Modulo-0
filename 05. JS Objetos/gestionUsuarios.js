// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js");

var asistente = {
  verPerfiles: function (opcion) {
    if (opcion === "todo") return perfiles;
    if (opcion === "nombre")
      return perfiles.map(function (perfil) {
        return perfil.usuario;
      });
    if (opcion === "nivel")
      return perfiles.map((perfil) => perfil.nivel_de_autorizacion);
    if (opcion === "codigo") return perfiles.map((perfil) => perfil[opcion]);
    if (opcion === "antiguedad")
      return perfiles.map((perfil) => perfil[opcion]);
  },

  verPerfilesPorAntiguedad: function () {
    var usuariosOrdenados = [];

    for (var i = 0; i < perfiles.length; i++) {
      usuariosOrdenados.push(perfiles[i]);
    }

    usuariosOrdenados.sort(
      (objeto1, objeto2) => objeto2.antiguedad - objeto1.antiguedad
    );

    return usuariosOrdenados;
  },

  verAdministradores: function () {
    return perfiles.filter(
      (perfil) => perfil.nivel_de_autorizacion === "admin"
    );
  },

  modificarAcceso: function (usuario, codigo) {
    var userFound = perfiles.find(function (perfil) {
      if (perfil.usuario === usuario) return true;
    });

    if (!userFound) return "usuario no encontrado";

    if (codigo.length !== 4 || isNaN(codigo))
      return "codigo de acceso invalido, debe contener solo 4 numeros";

    userFound.codigo = codigo;
    return "codigo de acceso modificado";
  },
};

// <----- NO TOCAR ------->
module.exports = {
  asistente,
};
