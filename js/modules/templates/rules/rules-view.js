import {makeTemplate} from "../../module-constructor";

export default (textData) => {
  const content = `<header class="header">${textData.header}</header>
<div class="rules">
  <h1 class="rules__title">${textData.title}</h1>
  <p class="rules__description">${textData.paragraph}</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>${textData.button}</button>
  </form>
</div>`;
  return makeTemplate(content);
};
