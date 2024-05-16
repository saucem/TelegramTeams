//Recupera el formulario de contacto
const contactForm = document.getElementById("contact-form");

const validate = (event) => {
  // Previene el comportamiento predeterminado de envío del formulario
  event.preventDefault();
  // Inicializa la variable que va a servir de índice para recorrer los elementos del form
  var i;
  // Recorre la lista de elementos del form buscando los de clase "required" que se encuentren vacíos
  const checkEmpty = () => {
    for (i = 0; i < contactForm.length; i++) {
      var currentInput = contactForm.elements[i];
      if (currentInput.classList.contains("required") && currentInput.value === "") {
        // Agrega la clase "has-error"para marcar el input y darle estilos de alerta
        currentInput.classList.add("has-error");
        // Utiliza el "placeholder" para dar una pista del error
        currentInput.setAttribute("placeholder", "Debe completar éste campo");
        // Le pasa el foco al elemento con error y sale del bucle
        currentInput.focus();
        break;
      }
    }
  }

  // Recorre la lista de elementos del form buscando entradas que no coincidan con el formato "type" del input
  const checkData = () => {
    for (i = 0; i < contactForm.length; i++){
      var currentInput= contactForm.elements[i];
      if (currentInput.getAttribute("type") === "tel" && currentInput.value.search(/[a-z]/i) > -1){
        currentInput.classList.add("has-error");
        currentInput.focus();
        break
      }
      if (currentInput.getAttribute("type") === "text"){
        let pattern =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
        if (pattern.test(currentInput.value)){
          currentInput.classList.add("has-error");
          currentInput.focus();
          break
        }
      }
    }
  }
  // Invoca las funciones que chequean los campos
  checkEmpty();
  checkData();
}

// Quita la clase "has-error" cuando el usuario comienza a escribir en el elemento
const removeErrors = (event) => {
  var i;
  const checkClasses = () => {
    for (i = 0; i < contactForm.length; i++) {
      var currentInput = contactForm.elements[i];
      if (currentInput.classList.contains("has-error") && document.activeElement === currentInput) {
        currentInput.classList.remove("has-error");
        break;
      }
    }
  }
  // Invoca la función que remueve la clase "has-error"
  checkClasses();

}

// Cuando el checkbox "#useTelegram" está marcado, hace que "#telephone" tenga la clase "required"
// Cuando está desmarcado, quita la clase "required" (y "has-error" en caso de que exista)
const markRequired = (event) => {
  let inputTarget = document.getElementById("telephone");
  inputTarget.classList.toggle("required");
  if (inputTarget.classList.contains("has-error")){
    inputTarget.classList.remove("has-error");
    inputTarget.setAttribute("placeholder", "");
  }
}

// Cuando el usuario hace click en botones del tipo "submit" llama a la función de validación
contactForm.addEventListener('submit', validate);
// Cuando el usuario escribe sobre cualquier campo llama a la función de remover la clase "has-error"
contactForm.addEventListener('input', removeErrors);
// Cuando el usuario cambia el estado del checkbox llama a la función que altera las clases de "#telephone"
document.getElementById("useTelegram").addEventListener("change", markRequired);