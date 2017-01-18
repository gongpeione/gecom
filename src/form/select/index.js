import './style.scss';

import { g, CONST } from '../../basic';

const select = g.$$('.g-select');
const vdom = g.vdom;
const selectRenderedList = [];

select.forEach(item => {

    const tmpFragment = document.createDocumentFragment();
    const parentNode = item.parentNode;
    const nodeAttrs = g.attrs(item);
    const options = [];
    const optionsGroup = {};
    const optionsOriginal = g.$$('option', item);
    const mode = nodeAttrs['data-mode'] ? nodeAttrs['data-mode'].split(/[,\s，]/) : [];
    let selected = { value: '', text: '' };
    let child;

    // debugger;

    optionsOriginal.forEach(child => {
        const text = child.innerText;
        const attrs = g.attrs(child);

        if ('selected' in attrs) {
            selected.text = text;
            selected.value =  attrs['value'];
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

            if (mode.indexOf('clearable') >= 0) {
                const close = g.$('.close', parent);
                close.classList.remove('hidden');
            }
            
            input.value = li.innerText;
            g.attr(input, 'data-value', g.attr(li, 'value'));

            // console.log(li, ul, parent, input);
        });

        if (mode.indexOf('group') < 0) {
            options.push(listItem);
        } else {
            const groupName = attrs['data-group'] || 'Other';
            if (Array.isArray(optionsGroup[groupName])) {
                optionsGroup[groupName].push(listItem);
            } else {
                optionsGroup[groupName] = [];
                optionsGroup[groupName].push(listItem);
            }
        }
        
    });
    let selectList;
    if (mode.indexOf('group') >= 0) {
        const optionsGroupAfter = [];
        for (let groupName in optionsGroup) {
            optionsGroupAfter.push(new vdom('li', {
                class: 'g-group--name'
            }, [
                groupName
            ]));

            optionsGroup[groupName].forEach(option => {
                optionsGroupAfter.push(option);
            });
        }
        selectList = new vdom('ul', {}, optionsGroupAfter);
        // debugger;
    } else {
        selectList = new vdom('ul', {}, options);
    }

    // if (selected.value === '') {
    //     selected.text = null;
    //     selected.value = optionsOriginal[0].getAttribute('value');
    // }

    const input = new vdom('input', {
        type: 'text',
        name: nodeAttrs.name,
        readonly: true,
        value: selected.text,
        'data-value': selected.value,
        placeholder: '请选择'
    });
    input.addEvent('click', e => {
        const parent = e.target.parentNode;

        selectRenderedList.forEach(select => {
            if (select !== parent) {
                select.classList.remove('slideDown');
            }   
        });

        parent.classList.toggle('slideDown');

        e.stopPropagation();
    });

    const nodeChildren = [ input, selectList ];

    //arror
    const arror = new vdom('div', {
        class: 'arror'
    }, []);
    nodeChildren.push(arror);

    // Add clean button
    if (mode.indexOf('clearable') >= 0) {
        const close = new vdom('div', {
            class: 'close hidden'
        }, []);
        close.addEvent('click', e => {
            const parent = e.target.parentNode;
            const input = g.$('input', parent);
            const close = g.$('.close', parent);
            input.value = '';
            console.log(input);
            input.dataset.value = '';
            close.classList.add('hidden');
        });
        nodeChildren.push(close);
    }

    const node = new vdom('div', {
        class: 'g-selector'
    }, nodeChildren);
    const nodeRendered = node.render();
    // console.log(node);
    
    selectRenderedList.push(nodeRendered);
    parentNode.insertBefore(nodeRendered, item);

    item.remove();
});


document.addEventListener('click', e => {
    selectRenderedList.forEach(select => {
        select.classList.remove('slideDown');
    });
});
// console.log(selectRenderedList);