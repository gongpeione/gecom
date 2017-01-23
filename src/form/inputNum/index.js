import './style.scss';

import { g, CONST } from '../../basic';

const $ = g.$;
const $$ = g.$$;
const vdom = g.vdom;

const inputNum = $$('.g-input--num');
const input = $('input', inputNum);
const min = $('.min', inputNum);
const plus = $('.plus', inputNum);

class InputNumManager {

    constructor (className = '.g-input--num') {

        this.original = $$(className);
        
        this.renderedList = [];

        this.generate();
    }

    generate () {
        this.original.forEach(item => {
            this.renderedList.push(new InputNum(item, this));
        });
    }

    // selectorFlush () {
    //     this.inputNumRenderedList.forEach(selector => {
    //         selector.hide();
    //     });
    // }

    getList () {
        return this.renderedList;
    }
}

class InputNum {
    constructor (inputNum, manager) {
        this.original = inputNum;
        this.parentNode = inputNum.parentNode;
        this.originalAttrs = g.attrs(this.original);
        this.manager = manager;

        this.counter = this.original.value ? 
                        parseInt(this.original.value, 10) : 
                        parseInt(this.originalAttrs['data-counter'] || 0, 10);

        this.max = parseInt(this.originalAttrs['data-max'] || 0, 10);
        this.step = parseInt(this.originalAttrs['data-step'] || 1, 10);

        this.generate();
    }

    generate () {

        const input = this.generateInput();
        const plus = this.generatePlus();
        const min = this.generateMinus();

        if (this.originalAttrs['class'].indexOf('g-input--num') < 0) {
            this.originalAttrs['class'] += ' g-input--num';
        }
        const inputNum = new vdom('div', this.originalAttrs, [ input, min, plus]);

        const inputNumRendered = inputNum.render();

        this.parentNode.insertBefore(inputNumRendered, this.original);

        this.original.remove();
    }

    generateInput () {
        const input = new vdom('input', {
            type: 'text',
            value: this.counter,
            'data-counter': this.counter,
            'data-max': this.max,
            'data-step': this.step
        });
        input.addEvent('keydown', e => {
            // Prevent typing non-numeric
            if (/[^\d]/.test(String.fromCharCode(e.which))) {
                e.preventDefault();
                return false;
            } 
        })
        input.addEvent('keyup', e => {
            // input filter
            const target = e.target;
            let oldVal = target.value;
            console.log(oldVal);
            if (this.max > 0 && oldVal > this.max) {
                oldVal = this.max + '';
            }
            this.counter = target.value = parseInt(oldVal.replace(/[^\d]/g, ''), 10) || 0;

            const keyCode = e.keyCode;
            if (keyCode != CONST.KEY_CODE.UP && keyCode != CONST.KEY_CODE.DOWN) {
                return;
            }

            if (keyCode == CONST.KEY_CODE.UP) {

                if (this.max > 0 && this.counter >= this.max) {
                    return;
                }

                let newVal = this.counter + this.step;
                if (this.max > 0 && newVal > this.max) {
                    newVal = this.max;
                }
                target.dataset.counter = target.value = this.value = newVal;

            } else if (keyCode == CONST.KEY_CODE.DOWN) {
                if (this.counter !== 0) {
                    let newVal = this.counter - this.step;
                    if (newVal < 0) {
                        newVal = 0;
                    }
                    target.dataset.counter = target.value = this.counter = newVal;
                }
            }
        });

        return input;
    }

    generatePlus () {
        const plus = new vdom('span', {
            class: 'plus'
        });
        plus.addEvent('click', e => {
            const target = e.target;
            const parent = target.parentNode;
            const input = $('input', parent);

            if (this.max > 0 && this.counter >= this.max) {
                return;
            }

            let newVal = this.counter + this.step;
            if (this.max > 0 && newVal > this.max) {
                newVal = this.max;
            }
            input.dataset.counter = input.value = this.counter = newVal;
        });

        return plus;
    }

    generateMinus () {
        const min = new vdom('span', {
            class: 'min'
        });
        min.addEvent('click', e => {
            const target = e.target;
            const parent = target.parentNode;
            const input = $('input', parent);

            if (this.counter !== 0) {
                let newVal = this.counter - this.step;
                if (newVal < 0) {
                    newVal = 0;
                }
                input.dataset.counter = input.value = this.counter = newVal;
            }
        });
        
        return min;
    }
}

const inputNums = new InputNumManager('input[type=num].g-input--num');
console.log(inputNums);

// input.forEach(item => {
//     item.dataset.counter = item.value = 0;
//     item.addEventListener('input', () => {
//         const oldVal = item.value;
//         item.value = parseInt(oldVal.replace(/[^\d]/g, ''), 10) || 0;
//     });
//     item.addEventListener('keyup', e => {
//         const keyCode = e.keyCode;
//         if (keyCode != CONST.KEY_CODE.UP && keyCode != CONST.KEY_CODE.DOWN) {
//             return;
//         }

//         const curCounter = parseInt(item.dataset.counter, 10);
//         const maxValue = item.dataset.max || 0;
//         const max = parseInt(maxValue, 10);
//         const stepValue = item.dataset.step || 1;
//         const step = parseInt(stepValue, 10);

//         if (keyCode == CONST.KEY_CODE.UP) {

//             if (max > 0 && curCounter >= max) {
//                 return;
//             }

//             let newVal = curCounter + step;
//             if (max > 0 && newVal > max) {
//                 newVal = max;
//             }
//             item.dataset.counter = item.value = newVal;

//         } else if (keyCode == CONST.KEY_CODE.DOWN) {
//             if (curCounter !== 0) {
//                 let newVal = curCounter - step;
//                 if (newVal < 0) {
//                     newVal = 0;
//                 }
//                 item.dataset.counter = item.value = newVal;
//             }
//         }
//     });
// })
// min.forEach(item => {
//     const parent = item.parentNode;
//     const input = $('input', parent);

//     item.addEventListener('click', () => {
//         const curCounter = parseInt(input.dataset.counter, 10);
//         const stepValue = input.dataset.step || 1;
//         const step = parseInt(stepValue, 10);
//         if (curCounter !== 0) {
//             let newVal = curCounter - step;
//             if (newVal < 0) {
//                 newVal = 0;
//             }
//             input.dataset.counter = input.value = newVal;
//         }
//     });
// });
// plus.forEach(item => {
//     const parent = item.parentNode;
//     const input = $('input', parent);

//     item.addEventListener('click', () => {
//         const curCounter = parseInt(input.dataset.counter, 10);
//         const maxValue = input.dataset.max || 0;
//         const max = parseInt(maxValue, 10);
//         const stepValue = input.dataset.step || 1;
//         const step = parseInt(stepValue, 10);
//         // console.log(curCounter, input.dataset.counter);
//         if (max > 0 && curCounter >= max) {
//             return;
//         }

//         let newVal = curCounter + step;
//         if (max > 0 && newVal > max) {
//             newVal = max;
//         }
//         input.dataset.counter = input.value = newVal;
        
//     });
// });

// console.log(inputNum, input, min, plus);