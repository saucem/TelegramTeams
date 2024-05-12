// Seleccionar el formulario por su ID
const formRegistro = document.querySelector("#Registro");

// Función para limpiar las validaciones anteriores
const clearValidations = () => {
    // Seleccionar todos los campos de entrada y elementos de error
    const inputs = document.querySelectorAll("input");
    const errorElements = document.querySelectorAll(".error");

    // Iterar sobre los campos de entrada y elementos de error y limpiarlos
    inputs.forEach(input => {
        input.classList.remove('error');
        // Verificar si el elemento hermano siguiente existe antes de acceder a su propiedad textContent
        // No todos los inputs tienen a continuacion un div class error.
        const nextSibling = input.nextElementSibling;
        if (nextSibling !== null) {
            nextSibling.textContent = '';
        }
    });

    errorElements.forEach(errorElement => {
        errorElement.textContent = '';
    });
    
}
// Función para validar el formulario
const validarFormulario = (event) => {
    // Prevenir el comportamiento predeterminado de envío del formulario
    event.preventDefault();
    // Limpiar las validaciones anteriores
    clearValidations();

    // Obtener referencias a los campos del formulario
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");

    let validation = true;
    // Validar el campo firstname
    if(!nombre.value.trim()){
        nombre.classList.add('error')
        document.querySelector("#error-nombre").textContent='Debe completar el campo Nombre';
        validation=false;
    }
    // Validar el campo lastname
    if(!apellido.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-apellido").textContent='Debe completar el campo Apellido';
        apellido.classList.add('error')
        validation=false;
    }
    // Validar el campo email
    if(!email.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-email").textContent='Debe completar el campo Email';
        email.classList.add('error')
        validation=false;
    }
    // Validar el campo password
    if(!pass.value.trim()){
        // alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        document.querySelector("#error-pass").textContent='Debe completar el campo contraseña';
        pass.classList.add('error')
        validation=false;
    }else if(pass.value.length < 6 || pass.value.length > 12){
        document.querySelector("#error-pass").textContent ='La contraseña debe contener entre 6 y 12 caracteres';
        pass.classList.add('error')
        validation=false;
    }

    // Si no hay errores de validación, enviar el formulario
    if(validation){
        document.write("Registro exitoso")
        formRegistro.submit()
    } else {document.write("Error de registro")}

}


formRegistro.addEventListener('submit',validarFormulario);