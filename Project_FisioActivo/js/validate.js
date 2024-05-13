function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var fono = document.getElementById('fono').value;
    var contrasena = document.getElementById('contrasena').value;

    // Validar nombre
    if (nombre.trim() == '') {
        alert('Por favor ingrese su nombre.');
        return false;
    }

    // Validar apellido
    if (apellido.trim() == '') {
        alert('Por favor ingrese su apellido.');
        return false;
    }

    // Validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingrese un email válido. Debe contener el siguiente formato: email@email.email');
        return false;
    }

    // Validar dirección
    if (direccion.trim() == '') {
        alert('Por favor ingrese su dirección.');
        return false;
    }

    // Validar número de teléfono
    var telefonoRegex = /^(?:\+?56)?(?:\s*\(0\))?\s*(?:9[\s*-]*)?(\d[\s*-]*){8}$/;
    if (!telefonoRegex.test(fono)) {
        alert('Por favor ingrese un número de teléfono válido.');
        return false;
    }

    // Validar contraseña
    if (contrasena.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    return true; // Si todos los campos pasan la validación, retornar true
}

// SCRIPT JSON



// VALIDACIONES DE LOGIN

function validarLogin() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var fono = document.getElementById('fono').value;
    var contrasena = document.getElementById('contrasena').value;

    // Validar nombre
    if (nombre.trim() == '') {
        alert('Por favor ingrese su nombre.');
        return false;
    }

    // Validar email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingrese un email válido.');
        return false;
    }

    // Validar número de teléfono
    var telefonoRegex = /^(?:\+?56)?(?:\s*\(0\))?\s*(?:9[\s*-]*)?(\d[\s*-]*){8}$/;
    if (!telefonoRegex.test(fono)) {
        alert('Por favor ingrese un número de teléfono válido.');
        return false;
    }

    // Validar contraseña
    if (contrasena.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    return true; // Si todos los campos pasan la validación, retornar true
}


// OTRO FORMATO POTENCIALMENTE MEJOR

//function validarLogin(){
//    var emailInput = document.getElementById('email');
//    var emailError = document.getElementById('email-error');
//   var passwordInput = document.getElementById('password');
//    var passwordError = document.getElementById('password-error');
//
    // Validar el campo de correo electrónico
//    if (!emailInput.checkValidity()) {
//        emailError.textContent = 'Por favor ingrese un correo electrónico válido.';
//        emailError.style.display = 'block'; // Mostrar el mensaje de error
//    } else {
//        emailError.textContent = ''; // Limpiar el mensaje de error si es válido
//    }

    // Validar el campo de contraseña
//    if (passwordInput.value.length < 8) {
//        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
//        passwordError.style.display = 'block'; // Mostrar el mensaje de error
//    } else {
//        passwordError.textContent = ''; // Limpiar el mensaje de error si es válido
//    }
//}
