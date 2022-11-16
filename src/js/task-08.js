const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = { mail, password };

  if (mail === '' || password === '') {
    return alert('Bсі поля повинні бути заповнені!');
  }
  console.log(formData);
  return formData, e.target.reset();
}
