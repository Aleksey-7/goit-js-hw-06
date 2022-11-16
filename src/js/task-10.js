function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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
  console.log(e.currentTarget.value);
  return e.currentTarget.value;
}

function onCreateBoxes(amount) {
  const elements = [];
  amount = 5;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = '30px';
    boxEl.style.height = '30px';
    boxEl.style.backgroundColor = getRandomHexColor();

    elements.push(boxEl);
  }

  refs.boxes.append(...elements);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
  // function removeAllChildNodes(parent) {
  //   while (parent.firstChild) {
  //     parent.removeChild(parent.firstChild);
  //   }
  // }
  // removeAllChildNodes(refs.boxes);
}
