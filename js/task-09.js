function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
};

refs.btn.addEventListener('click', onChangeBodyBackgroundColor);

function onChangeBodyBackgroundColor() {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  refs.colorValue.textContent = colorHex;
}
