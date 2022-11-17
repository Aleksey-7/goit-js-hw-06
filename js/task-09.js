function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onChangeBodyBackgroundColor);

function onChangeBodyBackgroundColor(e) {
  document.body.style.backgroundColor = getRandomHexColor();

  e.currentTarget.value = getRandomHexColor();
  console.log(e.currentTarget.value);

  refs.colorValue.textContent = e.currentTarget.value;
}
