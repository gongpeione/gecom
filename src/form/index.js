import './style.scss';

console.log('form');

'use strict';
import './radio';
import './checkbox';
import './input';
import InputNumManager from './inputNum';
import SelectorManager from './select';
import SwitchManager from './switch';
import SliderManager from './slider';
import RateMangaer from './rate';

// const gecomForm = {};

// gecomForm['sliderManager'] = sliderManager.renderedList;

// gecom.noConflict = function () {
//     if (window.g === gecom)
// }

// window.gecom = gecom;

// if (! 'g' in window) {
//     window.g = window.gecom;
// }

export {
    SliderManager, SelectorManager, InputNumManager, SwitchManager
};