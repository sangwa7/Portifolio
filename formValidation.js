document.querySelector('#contact-form').addEventListener('submit', (e) => {
  let valid = true;

  const responseContainer = document.querySelector('#response-text');

  const email = document.querySelector('#email').value;
  const name = document.querySelector('#contact-name').value;
  const message = document.querySelector('#contact-message').value;

  const emailArray = email.split('');

  for ( i = 0; i < emailArray.length; i += 1) {
    if (
      emailArray[i] !== emailArray[i].toLowerCase()
      && emailArray[i] !== '@' && emailArray[i] !== '.'
    ) {
      valid = false;
    }
  }

  // if the email is valid, save user data in object
  if (valid) {
    // prevent the form fro automatically reloading the page
    e.preventDefault();

    // empty the response test in contact form
    responseContainer.innerHTML = '';
    // save the user info to object
    const details = {
      name,
      email,
      message,
    };

    // save the user object to localStorage
    // (here we use JSON.stringify() to convert the user data to string for safe storage)
    localStorage.setItem('contact-details', JSON.stringify(details));
  } else {
    e.preventDefault();
    responseContainer.innerHTML = 'Invalid Email';
  }
});

// function to populate the contact form from localStorage
function loadFormData() {
  if (localStorage.getItem('contact-details') != null) {
    const userData = JSON.parse(localStorage.getItem('contact-details'));

    document.querySelector('#email').value = userData.email;
    document.querySelector('#contact-name').value = userData.name;
    document.querySelector('#contact-message').value = userData.message;
  }
}

loadFormData();