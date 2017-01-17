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

            parent.classList.remove('slideDown');
            input.value = li.innerText;
            input['data-value'] = g.attr(li, 'value');

            console.log(li, ul, parent, input);
        });
        options.push(listItem);
    });
    if (selected.value === '') {
        selected.text = optionsOriginal[0].innerText;
        selected.value = optionsOriginal[0].getAttribute('value');
    }

    const input = new vdom('input', {
        type: 'text',
        readonly: true,
        value: selected.text,
        'data-value': selected.value
    });
    input.addEvent('click', e => {
        const parent = e.target.parentNode;

        parent.classList.toggle('slideDown');
    });
    input.addEvent('blur', e => {
        const parent = e.target.parentNode;

        parent.classList.remove('slideDown');
    });
    const selectList = new vdom('ul', {}, options);

    nodeAttrs['class'] = nodeAttrs['class'] ? nodeAttrs['class'] += ' g-selector' : 'g-selector';
    const node = new vdom('div', nodeAttrs, [ input, selectList ]);
    console.log(node);
    
    parentNode.insertBefore(node.render(), item);

    g.class(item, 'hidden');
    g.css(item, 'display: none');

    console.log(node);
});