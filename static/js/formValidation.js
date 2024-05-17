const validate = (event) => {
  event.preventDefault();
  const currentForm = event.target;
  const inputs = document.querySelectorAll("#" + currentForm.id + " .input");

  var i;
  for (i = 0; i < inputs.length; i++){
    var input = inputs[i];
    var foundError = false;
    if (input.value === "" || input.value == null){
      if (input.classList.contains("required")){
        input.classList.add("has-error");
        input.setAttribute("placeholder", "Debe completar este campo");
        input.focus();
        foundError = true;
        break;
      }
    } else {
      if (input.type === "text"){
        let pattern =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
        if (pattern.test(input.value)) {
          input.classList.add("has-error");
          input.focus();
          foundError = true;
          break;
        }
      } 
      if (input.type === "tel") {
        if (input.value.search(/[a-z]/i) > -1){
          input.classList.add("has-error");
          input.focus();
          foundError = true;
          break;
        }
      }
    }
  }
  if (!foundError){
    currentForm.submit();
  }
}

const removeErrors = (event) =>{
  const currentInput = event.target;
  if (currentInput.classList.contains("has-error")){
    currentInput.classList.remove("has-error");
  }
}

const toggleRequired = (event) =>{
  const telegramPhone = document.querySelector("#telephone");
  if (telegramPhone.classList.contains("has-error")){
    telegramPhone.classList.remove("has-error");
  }
  telegramPhone.classList.toggle("required");
}

document.addEventListener("submit", validate);
document.addEventListener("change", removeErrors);
document.getElementById("useTelegram").addEventListener("change", toggleRequired);