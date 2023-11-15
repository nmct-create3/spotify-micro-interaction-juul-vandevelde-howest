function init() {
  const toggle = document.querySelector('.js-toggle');
  toggle.addEventListener('click', function () {

    toggle.classList.toggle('added');
  });
}

document.addEventListener('DOMContentLoaded', init);
