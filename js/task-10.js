const refs = {
  input: document.querySelector('#controls input'),
  boxes: document.querySelector('#boxes'),
  btnCreateBoxes: document.querySelector('[data-create]'),
  btnDestroyBoxes: document.querySelector('[data-destroy]'),
};

refs.input.addEventListener('input', onInputChange);
refs.btnCreateBoxes.addEventListener('click', onCreateBoxes);
refs.btnDestroyBoxes.addEventListener('click', onDestroyBoxes);

function onInputChange(e) {
  e.currentTarget.value;
  console.log(e.currentTarget.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateBoxes(amount) {
  amount = refs.input.value;

  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10 + 'px';
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = size;
    boxEl.style.height = size;
    boxEl.style.margin = 5 + 'px';

    elements.push(boxEl);
  }
  refs.boxes.append(...elements);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}
