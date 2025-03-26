//PRIMER CODIGO

let usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

function nombreUsuario({ nombre, apellido }) {
  const nombrCompleto = `Me llamo ${nombre} ${apellido}`;

  return nombrCompleto;
}

console.log(nombreUsuario(usuario));
