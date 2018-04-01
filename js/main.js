(function () {
  const KEY_CODE_RIGHT = 39;
  const KEY_CODE_LEFT = 37;
  const centralContainer = document.querySelector(`.central`);
  const templates = Array.from(document.querySelectorAll(`template`));
  let defaultIndex = 0;
  function show(slide) {
    const content = slide.content;
    const clone = content.cloneNode(true);
    centralContainer.innerHTML = ``;
    centralContainer.appendChild(clone);
  }
  function keyDownHandler(ev) {
    if (ev.altKey && ev.keyCode === KEY_CODE_RIGHT) {
      defaultIndex++;
      if (defaultIndex % templates.length === 0) {
        defaultIndex--;
      }
    }
    if (ev.altKey && ev.keyCode === KEY_CODE_LEFT) {
      defaultIndex--;
      if (defaultIndex === -1) {
        defaultIndex++;
      }
    }
    show(templates[defaultIndex]);
  }
  document.addEventListener(`keydown`, keyDownHandler);
  show(templates[defaultIndex]);
})();

