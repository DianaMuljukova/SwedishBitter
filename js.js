var clickFirst = document.querySelector('.first-tab');
var clickSecond = document.querySelector('.second-tab');
var secondBlock = document.querySelector('.second-block-hidden');
var firstBlock = document.querySelector('.first-block-hidden');


clickSecond.addEventListener('click', function () {
secondBlock.classList.remove('hidden');
firstBlock.classList.add('hidden');
clickSecond.classList.add('green-bg');
clickFirst.classList.remove('green-bg');
});

clickFirst.addEventListener('click', function () {
  secondBlock.classList.add('hidden');
  firstBlock.classList.remove('hidden');
  clickSecond.classList.remove('green-bg');
  clickFirst.classList.add('green-bg');
})