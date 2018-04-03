import {makeIntroTemplate} from './modules/templates/intro.js';
import {insertIntoContainer} from './modules/module-constructor';
const introTemplate = makeIntroTemplate();
insertIntoContainer(introTemplate);
