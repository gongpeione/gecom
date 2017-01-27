import './style.scss';
import { g, CONST } from '../../basic';

const $ = g.$;
const $$ = g.$$;
const vdom = g.vdom;

class SliderManager {

    constructor (className = '.g-input--slider') {

        this.original = $$(className);
        
        this.renderedList = [];

        this.generate();
    }

    generate () {
        this.original.forEach(item => {
            this.renderedList.push(new Slider(item, this));
        });
    }

    getList () {
        return this.renderedList;
    }
}

class Slider {
    constructor (sliderBtn, manager) {
        this.original = sliderBtn;
        this.parentNode = this.original.parentNode;
        this.originalAttrs = g.attrs(this.original);
        this.manager = manager;
        this.rendered = null;
        this.btn = null;
        this.line = null;
        this.cur = null;

        this.totalLength = 0;
        this.curPercentage = 0;
        this.curPos = 0;
        this.oldPos = 0;

        // Deal with addEventListener callback this scope issus
        this.onDragHandler = this.onDrag.bind(this);
        this.onDragEndHandler = this.onDragEnd.bind(this);

        this.generate();
        this.updatePos({});
    }

    generate () {

        const input = new vdom('input', this.originalAttrs);
        const line  = new vdom('div', {
            class: 'line'
        }, [ new vdom('div', { class: 'current' }) ]);

        const btn  = new vdom('div', {
            class: 'button'
        });
        btn.addEvent('mousedown', e => this.onMouseDown(e));
        
        const wrap = new vdom('div', {
            class: 'g-input--slider_wrap'
        }, [ input, line, btn ]);

        this.rendered = wrap.render();
        // console.log(sliderRendered);

        this.parentNode.insertBefore(this.rendered, this.original);

        this.original.remove();

        this.btn = $('.button', this.rendered);
        this.line = $('.line', this.rendered);
        this.cur = $('.current', this.rendered);
    }

    generateInput () {

        const input = new vdom('input', this.originalAttrs);
        
        return input;
    }

    onDrag (e) {
        // console.log(1);
        const oldPos = this.curPos;
        const newPos = e.clientX;

        console.log(oldPos, newPos);

        this.curPos = newPos;
    }

    onDragEnd (e) {
        // // console.log(e);

        // console.log('Drag End:', this, this.onDragHandler);
        document.removeEventListener('mousemove', this.onDragHandler);
        document.removeEventListener('mouseup', this.onDragEndHandler);

    }

    onMouseDown (e) {
        // console.log(e, document, this.onDrag);
        // console.log('Drag Start:', this, this.onDragHandler);
        // this.
        document.addEventListener('mousemove', this.onDragHandler);
        document.addEventListener('mouseup', this.onDragEndHandler);
    }

    updatePos ({ x = 0, y = 0 }) {

        console.log(this.btn, this.cur, this.line);

    }
}

console.log(new SliderManager());

export default SliderManager;