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
        this.max = this.originalAttrs['data-max'] || 100;
        this.callback = this.originalAttrs['data-callback'] || null;
        // this.value 
        this.manager = manager;
        this.rendered = null;
        this.btn = null;
        this.line = null;
        this.cur = null;
        this.input = null;
        
        const isValued = !!this.originalAttrs.value;
        this._curVal = isValued ? parseInt(this.originalAttrs.value, 10) : 0;
        this._curPercentage = isValued ? parseFloat(this.originalAttrs.value / this.max) : 0;

        this.totalLength = 0;
        this.curPos = 0;
        this.oldPos = 0;

        // this._curValue = 0;

        // Deal with addEventListener callback this scope issus
        this.onDragHandler = this.onDrag.bind(this);
        this.onDragEndHandler = this.onDragEnd.bind(this);

        Object.defineProperty(this, 'curPercentage', {
            get: () => this._curPercentage,
            set: newVal => {
                this._curPercentage = newVal;
                this.updatePos();
                // console.log('[Set] ', newVal);
            }
        });

        Object.defineProperty(this, 'curVal', {
            get: () => this._curVal,
            set: newVal => {
                this._curVal = newVal;
                this.btn.dataset.value = this.curVal;
                this.input.value = this.curVal;
                // console.log('[Set] ', newVal);

                if (this.callback) {
                    // console.log('[Set]', newVal);
                    window.setTimeout(`${this.callback}(${this.curVal})`, 0);
                }
            }
        });

        this.generate();
        this.updatePos();

        // console.log(this.curPercentage);
    }

    generate () {

        const input = new vdom('input', this.originalAttrs);
        const line  = new vdom('div', {
            class: 'line'
        }, [ new vdom('div', { class: 'current' }) ]);

        const btn  = new vdom('div', {
            class: 'button',
            'data-value': this.curVal
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
        this.input = $('input', this.rendered);
        this.totalLength = g.width(this.line);
    }

    generateInput () {

        const input = new vdom('input', this.originalAttrs);
        
        return input;
    }

    onDrag (e) {
        // console.log(1);
        const oldPos = this.curPos;
        const newPos = e.clientX;
        const diff = newPos - oldPos;
        const diffPercentage = diff / this.totalLength;
        const tmpPer = this.curPercentage + diffPercentage;

        if (tmpPer >= 1) {
            this.curPercentage = 1;
        } else if (tmpPer <= 0) {
            this.curPercentage = 0;
        } else {
            this.curPercentage = tmpPer;
        }

        const value = Math.floor(this.curPercentage * this.max);

        if (value != this.curVal) {
            this.curVal = value
        }
        
        // console.log(oldPos, newPos, diff, this.curPercentage);

        this.curPos = newPos;
    }

    onDragEnd (e) {
        // console.log(e);

        // console.log('Drag End:', this, this.onDragHandler);
        this.btn.classList.remove('dragging');
        document.removeEventListener('mousemove', this.onDragHandler);
        document.removeEventListener('mouseup', this.onDragEndHandler);
        document.removeEventListener('contextmenu', this.onDragEndHandler);
    }

    onMouseDown (e) {
        // console.log(e, document, this.onDrag);
        // console.log('Drag Start:', this, this.onDragHandler);
        // this.
        this.curPos = e.clientX;
        this.btn.classList.add('dragging');
        document.addEventListener('mousemove', this.onDragHandler);
        document.addEventListener('mouseup', this.onDragEndHandler);
        document.addEventListener('contextmenu', this.onDragEndHandler);
    }

    updatePos () {

        this.cur.style.width = this.curPercentage * 100 + '%';
        this.btn.style.left = this.curPercentage * 100 + '%';
        // console.log(this.btn, this.cur, this.line, this.totalLength);

    }
}

export default new SliderManager();