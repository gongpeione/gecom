import './style.scss';

import './basic/';
import './data';
import { 
    SliderManager,
    SelectorManager,
    InputNumManager,
    SwitchManager
} from './form';
import './navigation';
import './notice';
import './others';

// console.log('src', SliderManager, SelectorManager, InputNumManager, SwitchManager);

const gecom = {
    SliderManager: SliderManager,
    SelectorManager: SelectorManager,
    InputNumManager: InputNumManager,
    SwitchManager: SwitchManager
}

window.gecom = gecom;