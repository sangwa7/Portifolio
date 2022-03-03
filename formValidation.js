// Form validation
 document.querySelector("#contact-form").addEventListener("submit", e =>{
  let valid = true;

  let responseContainer = document.querySelector("#warning-message");

  let emailArray = document.querySelector("#email").value.split('');

  for(let i = 0; i < emailArray.length; i++){
    if(emailArray[i] != emailArray[i].toLowerCase() && emailArray[i] != "@" && emailArray[i] != ".") {
      valid = false;
    }
  }

  if(!valid){
    e.preventDefault();
    responseContainer.innerHTML = "Invalid Email";
  }
});