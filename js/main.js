import {makeIntroTemplate} from './modules/templates/intro/intro';
import {insertIntoContainer} from './modules/module-constructor';
const introTemplate = makeIntroTemplate();
insertIntoContainer(introTemplate);
