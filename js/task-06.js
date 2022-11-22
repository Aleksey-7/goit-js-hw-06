const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputChange);

function onInputChange(e) {
  if (e.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
