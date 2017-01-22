import './style.scss';

import { g, CONST } from '../../basic';

const $ = g.$;
const $$ = g.$$;

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
        this.inputNum = inputNum;
        this.manager = manager;
    }
}

const inputNums = new InputNumManager('input[type=num].g-input--num');
console.log(inputNums);

input.forEach(item => {
    item.dataset.counter = item.value = 0;
    item.addEventListener('input', () => {
        const oldVal = item.value;
        item.value = parseInt(oldVal.replace(/[^\d]/g, ''), 10) || 0;
    });
    item.addEventListener('keyup', e => {
        const keyCode = e.keyCode;
        if (keyCode != CONST.KEY_CODE.UP && keyCode != CONST.KEY_CODE.DOWN) {
            return;
        }

        const curCounter = parseInt(item.dataset.counter, 10);
        const maxValue = item.dataset.max || 0;
        const max = parseInt(maxValue, 10);
        const stepValue = item.dataset.step || 1;
        const step = parseInt(stepValue, 10);

        if (keyCode == CONST.KEY_CODE.UP) {

            if (max > 0 && curCounter >= max) {
                return;
            }

            let newVal = curCounter + step;
            if (max > 0 && newVal > max) {
                newVal = max;
            }
            item.dataset.counter = item.value = newVal;

        } else if (keyCode == CONST.KEY_CODE.DOWN) {
            if (curCounter !== 0) {
                let newVal = curCounter - step;
                if (newVal < 0) {
                    newVal = 0;
                }
                item.dataset.counter = item.value = newVal;
            }
        }
    });
})
min.forEach(item => {
    const parent = item.parentNode;
    const input = $('input', parent);

    item.addEventListener('click', () => {
        const curCounter = parseInt(input.dataset.counter, 10);
        const stepValue = input.dataset.step || 1;
        const step = parseInt(stepValue, 10);
        if (curCounter !== 0) {
            let newVal = curCounter - step;
            if (newVal < 0) {
                newVal = 0;
            }
            input.dataset.counter = input.value = newVal;
        }
    });
});
plus.forEach(item => {
    const parent = item.parentNode;
    const input = $('input', parent);

    item.addEventListener('click', () => {
        const curCounter = parseInt(input.dataset.counter, 10);
        const maxValue = input.dataset.max || 0;
        const max = parseInt(maxValue, 10);
        const stepValue = input.dataset.step || 1;
        const step = parseInt(stepValue, 10);
        // console.log(curCounter, input.dataset.counter);
        if (max > 0 && curCounter >= max) {
            return;
        }

        let newVal = curCounter + step;
        if (max > 0 && newVal > max) {
            newVal = max;
        }
        input.dataset.counter = input.value = newVal;
        
    });
});

console.log(inputNum, input, min, plus);