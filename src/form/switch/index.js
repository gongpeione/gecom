import './style.scss';

import { g, CONST } from '../../basic';

const $ = g.$;
const $$ = g.$$;
const vdom = g.vdom;

class SwitchManager {

    constructor (className = '.g-input--switch') {

        this.original = $$(className);
        
        this.renderedList = [];

        this.generate();
    }

    generate () {
        this.original.forEach(item => {
            this.renderedList.push(new Switch(item, this));
        });
    }

    getList () {
        return this.renderedList;
    }
}

class Switch {
    constructor (switchBtn, manager) {
        this.original = switchBtn;
        this.parentNode = this.original.parentNode;
        this.originalAttrs = g.attrs(this.original);
        this.manager = manager;

        this.generate();
    }

    generate () {

        const input = this.generateInput();
        const label = new vdom('label', {
            for: this.originalAttrs['id']
        });

        const wrap = new vdom('div', {
            class: 'g-input--switch_wrap'
        }, [ input, label ]);

        const switchBtnRendered = wrap.render();
        console.log(switchBtnRendered);

        this.parentNode.insertBefore(switchBtnRendered, this.original);

        this.original.remove();
    }

    generateInput () {

        const input = new vdom('input', this.originalAttrs);
        
        return input;
    }
}

const switchBtn = new SwitchManager('input.g-input--switch');
console.log(switchBtn)