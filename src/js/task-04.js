// const actions = document.querySelectorAll('#counter button');
// console.log(actions[1]);

// const value = document.querySelector('#value');
// console.log(value.innerHTML);
// let number;
// console.log(number);

const refs = {
  countPlus: document.querySelector('[data-action="increment"]'),
  countMinus: document.querySelector('[data-action="decrement"]'),
  counter: document.querySelector('#value'),
};

refs.countPlus.addEventListener('click', onCountPlus);
refs.countMinus.addEventListener('click', onCountMinus);

let counterValue = 0;

function onCountPlus() {
  counterValue = counterValue + 1;
  console.log((refs.counter.textContent = counterValue));
}

function onCountMinus() {
  counterValue = counterValue - 1;
  console.log((refs.counter.textContent = counterValue));
}
