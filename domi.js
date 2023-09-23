 // domy.js by David Echeverri
(function () {
  const elements = document.querySelectorAll('[data-do]');

  elements.forEach((element) => {
    element.addEventListener('click', function () {
      const action = this.dataset.do;
      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      switch (action) {
        case 'hide':
          targetElement.style.display = 'none';
          break;
        case 'show':
          targetElement.style.display = 'block';
          break;
        case 'fadein':
          targetElement.style.transition = 'opacity 0.5s';
          targetElement.style.opacity = 1;
          break;
        case 'fadeout':
          targetElement.style.transition = 'opacity 0.5s';
          targetElement.style.opacity = 0;
          break;
        case 'textswapon':
          const textInput = this.dataset.textinput;
          targetElement.textContent = textInput;
          break;
        case 'textswapoff':
          targetElement.textContent = 'Initial text';
          break;
        case 'toggleclass':
          const toggleClass = this.dataset.class;
          targetElement.classList.toggle(toggleClass);
          break;
        default:
          break;
      }
    });
  });
})();
