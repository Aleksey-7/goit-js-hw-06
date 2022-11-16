const categoryListEl = document.querySelector('#categories');

const numberOfCategories = categoryListEl.childElementCount;
console.log('Number Of Categories:', numberOfCategories);

const categoryEl = document.querySelectorAll('.item');

categoryEl.forEach(element => {
  const titleCatEl = element.firstElementChild.innerHTML;
  console.log('Category:', titleCatEl);

  const countCatEl = element.lastElementChild.childElementCount;
  console.log('Elements:', countCatEl);
});
