export const CONST = {
    USE_CAPTURE: {
        BUBBLING: false,
        CAPTURE: true
    },
    KEY_CODE: {
        UP: 38,
        DOWN: 40
    }
};

export const g = {
    /**
     * Get single element by selector
     * 
     * @param {String} selector
     * @param {Element} [context=document]
     * @returns {Element} element
     */
    $: (selector, context = document) => {
        if (context instanceof NodeList) {
            return Array.from(context, node => {
                return node.querySelector(selector);
            });
        }
        return context.querySelector(selector);
    },

    /**
     * Get elements by selector
     * 
     * @param {String} selector
     * @param {Element} [context=document]
     * @returns {Array} elements list
     */
    $$: (selector, context = document) => {
        if (context instanceof NodeList) {
            return Array.from(context, node => {
                return node.querySelectorAll(selector);
            });
        }
        return context.querySelectorAll(selector);
    },

    warn: (...msg) => {
        console.warn(msg);
    },

    /**
     * Create a new element
     * 
     * @param {string} [tagName='div']
     * @param {Object} [attrs={}]
     * @returns {Element} new element
     */
    create: (tagName = 'div', attrs = {}) => {
        const node = document.createElement(tagName);
        for (let key in attrs) {
            node.setAttribute(key, attrs[key]);
        }

        return node;
    },

    /**
     * Get or set element's attribute
     * 
     * @param {Element} node
     * @param {String} attr
     * @param {String} [newVal=null]
     * @returns {String} element's attribute value or null
     */
    attr: (node, attr, newVal = null) => {
        if (newVal) {
            node.setAttribute(attr, newVal);
            return;
        }

        return node.getAttribute(attr);
    },
    /**
     * Return a array of all element's attributes
     * 
     * @param {Element} node
     * @returns [{Attribute Name: Attribute Value},...]
     */
    attrs: node => {
        const attrs = {};
        Array.from(node.attributes).forEach(attr => {
            const attrName = attr.nodeName;
            attrs[attrName] = node.getAttribute(attrName);
        });

        return attrs;
    },

    /**
     * Add or remove element's class name
     * 
     * @param {Element} node
     * @param {String} className
     * @param {boolean} [remove=false]
     * @returns
     */
    class: (node, className, remove = false) => {
        if (remove) {
            node.classList.remove(className);
            return;
        }
        if (Array.isArray(className)) {
            node.classList.add(...className);
            return;
        }
        node.classList.add(className);
    },

    /**
     * Set style
     * 
     * @param {Element} node
     * @param {String} styles
     */
    css: (node, styles) => {
        node.style.cssText = node.style.cssText ? node.style.cssText += styles : styles;
    },

    width: (node) => {
        return node.getBoundingClientRect().width;
    },

    height: (node) => {
        return node.getBoundingClientRect().height;
    },

    vdom: class VDOM {
        /**
         * Creates an instance of VDOM.
         * 
         * @param {string} [tagName='div'] element tag name
         * @param {Object} [attrs={}] element's attributes like id,class,name etc
         * @param {VDOM} [children=[]] children nodes
         */
        constructor (tagName = 'div', attrs = {}, children = []) {
            this.tagName = tagName;
            this.attrs = attrs;
            this.children = Array.isArray(children) ? children : Array.from(children);

            this.event = [];
        }

        render () {
            const node = document.createElement(this.tagName);
            const attrs = this.attrs;

            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }

            // console.log(this.event);
            if (this.event.length) {
                this.event.forEach(eachEvent => {
                    node.addEventListener(eachEvent.eventName, eachEvent.callback);
                });
            }

            const children = this.children;

            Array.from(children).forEach(child => {
                const childEl = (child instanceof VDOM) ? child.render() : document.createTextNode(child);

                node.appendChild(childEl);
            });

            return node;
        }

        addEvent (eventName, callback, useCapture = CONST.USE_CAPTURE.BUBBLING) {
            this.event.push({
                eventName: eventName,
                callback: callback,
            });
            return this;
        }
    },
};