import './style.scss';

import g from '../../basic';

const select = g.$$('.g-select');
const vdom = g.vdom;

select.forEach(item => {

    const tmpFragment = document.createDocumentFragment();
    const parentNode = item.parentNode;
    const nodeAttrs = g.attrs(item);
    const options = [];
    const optionsOriginal = g.$$('option', item);
    let selected = { value: '', text: '' };
    let child;

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
            input.value = li.innerText;
            g.attr(input, 'data-value', g.attr(li, 'value'));

            // console.log(li, ul, parent, input);
        });
        options.push(listItem);
    });
    const selectList = new vdom('ul', {}, options);

    if (selected.value === '') {
        selected.text = optionsOriginal[0].innerText;
        selected.value = optionsOriginal[0].getAttribute('value');
    }

    const input = new vdom('input', {
        type: 'text',
        name: nodeAttrs.name,
        readonly: true,
        value: selected.text,
        'data-value': selected.value
    });
    input.addEvent('click', e => {
        const parent = e.target.parentNode;

        parent.classList.toggle('slideDown');
    });
    // input.addEvent('blur', e => {
    //     const target = e.target;
    //     const parent = target.parentNode;

    //     console.log(target);
    //     parent.classList.remove('slideDown');
    // });

    // nodeAttrs['class'] = nodeAttrs['class'] ? nodeAttrs['class'] += ' g-selector' : 'g-selector';
    const node = new vdom('div', {
        class: 'g-selector'
    }, [ input, selectList ]);
    const nodeRendered = node.render();
    // console.log(node);
    
    parentNode.insertBefore(nodeRendered, item);

    // g.class(item, 'hidden');
    // g.css(item, 'display: none');

    item.remove();

    // console.log(node);
});