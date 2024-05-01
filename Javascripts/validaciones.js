// Validaciones Registro de Usuario

let formulario = document.forms["formulario-registro"];
console.log(formulario);
const datos = {
  nombre: formulario.nombreUsuario,
  apellido: formulario.apellidoUsuario,
  fecha: formulario.fechaUsuario,
  correo: formulario.emailUsuario,
  password: formulario.passwordUsuario,
  passwordConfirmation: formulario.passwordConfirmation,
};

let correoValido = /^[a-zA-Z\.-_\d]+@[a-zA-Z]+\.(com|edu)+\.?(co|net)?$/;

let validarNombre = () => {
  let spanNombre = document.getElementById("nombreInvalido");
  let nombre = datos.nombre.value.trim(); // Eliminar espacios en blanco al principio y al final

  // Expresión regular para validar el nombre
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,}( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/;

  if (!regex.test(nombre)) {
    // Verificar si el nombre cumple con la expresión regular
    spanNombre.classList.add("span");
    spanNombre.classList.add("distancia");
    spanNombre.innerHTML = "Nombres Inválidos (Ej: Nicolás Mauricio)";
    datos.nombre.classList.add("invalido");
    datos.nombre.classList.remove("cajita");
    return false;
  } else if (nombre.length !== datos.nombre.value.length) {
    // Verificar si hay espacios al final después de ingresar el nombre correctamente
    spanNombre.classList.add("span");
    spanNombre.classList.add("distancia");
    spanNombre.innerHTML = "No debe haber espacios después del nombre";
    datos.nombre.classList.add("invalido");
    datos.nombre.classList.remove("cajita");
    return false;
  } else {
    spanNombre.innerHTML = "";
    spanNombre.classList.remove("span");
    spanNombre.classList.remove("distancia");
    datos.nombre.classList.remove("invalido");
    datos.nombre.classList.add("cajita");
    return true;
  }
};
let validarApellido = () => {
  let spanApellido = document.getElementById("apellidoInvalido");
  let apellido = datos.apellido.value.trim(); // Eliminar espacios en blanco al principio y al final

  // Expresión regular para validar el apelluido
  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,}( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)$/;

  if (!regex.test(apellido)) {
    // Verificar si el apellido cumple con la expresión regular
    spanApellido.classList.add("span");
    spanApellido.classList.add("distancia");
    spanApellido.innerHTML = "Apellidos Inválidos (Ej: Casas Barrera)";
    datos.apellido.classList.add("invalido");
    datos.apellido.classList.remove("cajita");
    return false;
  } else if (apellido.length !== datos.apellido.value.length) {
    // Verificar si hay espacios al final después de ingresar el apellido correctamente
    spanApellido.classList.add("span");
    spanApellido.classList.add("distancia");
    spanApellido.innerHTML = "No debe haber espacios después del apellido";
    datos.apellido.classList.add("invalido");
    datos.apellido.classList.remove("cajita");
    return false;
  } else {
    spanApellido.innerHTML = "";
    spanApellido.classList.remove("span");
    spanApellido.classList.remove("distancia");
    datos.apellido.classList.remove("invalido");
    datos.apellido.classList.add("cajita");
    return true;
  }
};

let validarFechaNacimiento = () => {
  let spanFecha = document.getElementById("fechaInvalida");
  let fechaInput = datos.fecha.value;

  // Convertir la fecha de entrada en un objeto Date
  let fechaNacimiento = new Date(fechaInput);
  let hoy = new Date();

  // Verificar si la fecha es válida y el usuario tiene al menos 18 años
  if (
    isNaN(fechaNacimiento.getTime()) ||
    fechaNacimiento.getFullYear() > hoy.getFullYear() - 18
  ) {
    spanFecha.classList.add("span");
    spanFecha.classList.add("distancia");
    spanFecha.innerHTML = "Debes tener al menos 18 años para registrarte.";
    datos.fecha.classList.add("invalido");
    datos.fecha.classList.remove("cajita");
    return false;
  } else {
    spanFecha.innerHTML = "";
    spanFecha.classList.remove("span");
    spanFecha.classList.remove("distancia");
    datos.fecha.classList.remove("invalido");
    datos.fecha.classList.add("cajita");
    return true;
  }
};

let validarCorreo = () => {
  let spanCorreo = document.getElementById("correoInvalido");
  if (!datos.correo.value.match(correoValido)) {
    spanCorreo.classList.add("span");
    spanCorreo.classList.add("distancia");
    spanCorreo.innerHTML = "Correo Inválido";
    datos.correo.classList.add("invalido");
    datos.correo.classList.remove("cajita");
    return false;
  } else {
    spanCorreo.innerHTML = "";
    spanCorreo.classList.remove("span");
    spanCorreo.classList.remove("distancia");
    datos.correo.classList.remove("invalido");
    datos.correo.classList.add("cajita");
    return true;
  }
};
let validarCampoContraseña = () => {
  if (!(datos.password.value.length < 8)) {
    datos.password.classList.remove("invalido");
    datos.password.classList.add("cajita");
    return true;
  } else {
    let spanContraseña = document.getElementById("contraseñasInvalidas");
    spanContraseña.classList.add("span");
    spanContraseña.classList.add("distancia");
    datos.password.classList.add("invalido");
    datos.password.classList.remove("cajita");
    spanContraseña.innerHTML = "Contraseña Inválida (Minimo 8 carácteres)";
    return false;
  }
};

let validarContraseñas = () => {
  let spanContraseña = document.getElementById("contraseñasInvalidas");
  if (!(datos.password.value == datos.passwordConfirmation.value)) {
    spanContraseña.classList.add("my-0.5");
    spanContraseña.innerHTML = "Las Contraseñas No Coinciden";
    datos.password.classList.add("invalido");
    datos.password.classList.remove("cajita");
    datos.passwordConfirmation.classList.add("invalido");
    datos.passwordConfirmation.classList.remove("cajita");
    return false;
  } else {
    spanContraseña.innerHTML = "";
    spanContraseña.classList.remove("my-0.5");
    datos.password.classList.remove("invalido");
    datos.passwordConfirmation.classList.remove("invalido");
    datos.password.classList.add("cajita");
    datos.passwordConfirmation.classList.add("cajita");
    return true;
  }
};

formulario.addEventListener("submit", (event) => {
  if (
    !(
      validarNombre() &&
      validarApellido() &&
      validarFechaNacimiento() &&
      validarCorreo() &&
      validarContraseñas() &&
      validarCampoContraseña()
    )
  ) {
    event.preventDefault(); // Evitar el envío del formulario si hay errores
  }
});
