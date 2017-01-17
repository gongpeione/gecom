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
        options.push(new vdom('li', attrs, [ text ]));
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
    const selectList = new vdom('ul', {}, options);

    nodeAttrs['class'] = nodeAttrs['class'] ? nodeAttrs['class'] += ' g-selector' : 'g-selector';
    const node = (new vdom('div', nodeAttrs, [ input, selectList ])).render();
    parentNode.insertBefore(node, item);
    item.remove();

    console.log(node);
});