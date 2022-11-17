const input = document.querySelector('#font-size-control');
console.dir(input);
const text = document.querySelector('#text');
console.dir(text.textContent);

input.addEventListener('input', changeFontSize);

function changeFontSize(e) {
  console.log(e.currentTarget.value);

  text.style.fontSize = e.currentTarget.value + 'px';
}
