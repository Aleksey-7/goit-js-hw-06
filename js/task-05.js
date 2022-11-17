const refs = {
  input: document.querySelector('#name-input'),
  newLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(e) {
  console.log(e.currentTarget.value);

  if (e.currentTarget.value != '') {
    return (refs.newLabel.textContent = e.currentTarget.value);
  }
  return (refs.newLabel.textContent = 'Anonymous');
}
