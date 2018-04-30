// import {makeTemplate} from './../../module-constructor';

export default (textData) => {
  const content = `<div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${textData.title}</h3>
      <p>${textData.paragraph}</p>
    </div>
    <div class="greeting__continue">
      <span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span>
    </div>`;
  const article = `<div class="greeting central--blur">${content}</div>`;

  // return makeTemplate(article);
};

