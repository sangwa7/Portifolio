function validate() {
  if (document.myForm.Name.value === '') {
    alert('Please provide your name!');
    document.myForm.Name.focus();
    return false;
  }
  if (document.myForm.EMail.value === '') {
    const emailID = document.myForm.EMail.value;
    const atpos = emailID.indexOf('@');
    const dotpos = emailID.lastIndexOf('.');

    if (atpos < 1 || dotpos - atpos < 2) {
      alert('Please enter correct email ID');
      document.myForm.EMail.focus();
      return false;
    }
  }
  return true;
}

validate();
