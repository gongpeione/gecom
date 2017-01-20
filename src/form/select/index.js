import './style.scss';

import { g, CONST } from '../../basic';

const vdom = g.vdom;

class SelectorManager {

    constructor (selectClass = '.g-select') {

        this.select = g.$$(selectClass);
        
        this.selectorRenderedList = [];

        this.selectorGenerator();

        document.addEventListener('click', e => {
            this.selectorFlush();
        });
    }

    selectorGenerator () {
        this.select.forEach(item => {
            this.selectorRenderedList.push(new Selector(item, this));
        });
    }

    selectorFlush () {
        this.selectorRenderedList.forEach(selector => {
            selector.hide();
        });
    }

    getSeletorList () {
        return this.selectorRenderedList;
    }
}

class Selector {

    constructor (select, manager) {
        this.select = select;
        this.manager = manager;
        this.parentNode = select.parentNode;
        this.nodeAttrs = g.attrs(select);
        this.options = [];
        this.optionsGroup = {};
        this.optionsOriginal = g.$$('option', this.select);
        this.mode = this.nodeAttrs['data-mode'] ? this.nodeAttrs['data-mode'].split(/[,\s，]/) : [];
        this.selected = { value: '', text: '' };
        this.child = null;
        this.nodeChildren = [];
        this.selectRendered = null;

        this.walkOriginal();
        this.inputGenerator();
        this.optionListGenerator();
        this.buttonsGenerator();
        this.render();
    }

    walkOriginal () {

        this.optionsOriginal.forEach(child => {

            const text = child.innerText;
            const attrs = g.attrs(child);

            if ('selected' in attrs) {
                this.selected.text = text;
                this.selected.value =  attrs['value'];
            }

            const listItem = new vdom('li', attrs, [ text ]);
            listItem.addEvent('click', e => {

                const li = e.target;
                const ul = li.parentNode;
                const parent = ul.parentNode;
                const input = g.$('input', parent);

                if (g.attr(li, 'disabled')) {
                    return;
                }

                parent.classList.remove('slideDown');

                if (this.mode.indexOf('clearable') >= 0) {
                    const close = g.$('.close', parent);
                    close.classList.remove('hidden');
                }

                input.value = li.innerText;
                g.attr(input, 'data-value', g.attr(li, 'value'));
            });

            if (this.mode.indexOf('group') < 0) {
                this.options.push(listItem);
            } else {
                const groupName = attrs['data-group'] || 'Other';
                if (Array.isArray(this.optionsGroup[groupName])) {
                    this.optionsGroup[groupName].push(listItem);
                } else {
                    this.optionsGroup[groupName] = [];
                    this.optionsGroup[groupName].push(listItem);
                }
            }
            
        });
    }

    optionListGenerator () {

        let optionList = [];

        if (this.mode.indexOf('group') >= 0) {

            const optionsGroupAfter = [];
            for (let groupName in this.optionsGroup) {
                optionsGroupAfter.push(new vdom('li', {
                    class: 'g-group--name'
                }, [
                    groupName
                ]));

                this.optionsGroup[groupName].forEach(option => {
                    optionsGroupAfter.push(option);
                });
            }
            optionList = new vdom('ul', {}, optionsGroupAfter);

        } else {
            optionList = new vdom('ul', {}, this.options);
        }

        this.nodeChildren.push(optionList);
    }

    inputGenerator () {

        const input = new vdom('input', {
            type: 'text',
            name: this.nodeAttrs.name,
            readonly: true,
            value: this.selected.text,
            'data-value': this.selected.value,
            placeholder: '请选择'
        });
        input.addEvent('click', e => {

            const parent = e.target.parentNode;

            this.manager.getSeletorList().forEach(selector => {
                if (selector !== this) {
                    selector.hide();
                }
            });

            parent.classList.toggle('slideDown');

            e.stopPropagation();
        });

        this.nodeChildren.push(input);
    }

    buttonsGenerator () {
       
        //arror
        const arror = new vdom('div', {
            class: 'arror'
        }, []);
        this.nodeChildren.push(arror);

        // Add clean button
        if (this.mode.indexOf('clearable') < 0) {
            return;
        }
        const close = new vdom('div', {
            class: 'close hidden'
        }, []);
        close.addEvent('click', e => {
            const parent = e.target.parentNode;
            const input = g.$('input', parent);
            const close = g.$('.close', parent);
            
            input.value = '';
            input.dataset.value = '';

            close.classList.add('hidden');
        });
        this.nodeChildren.push(close);
    }

    render () {

        const node = new vdom('div', {
            class: 'g-selector'
        }, this.nodeChildren);
        this.selectRendered = node.render();
        
        this.parentNode.insertBefore(this.selectRendered, this.select);

        this.select.remove();
    }

    hide () {
        this.selectRendered.classList.remove('slideDown');
    }
}

const selectorManager = new SelectorManager();
console.log(selectorManager);

export default SelectorManager;