export default {
    $: (selector, context = document) => {
        if (context instanceof NodeList) {
            return Array.from(context, node => {
                return node.querySelector(selector);
            });
        }
        return context.querySelector(selector);
    },
    $$: (selector, context = document) => {
        if (context instanceof NodeList) {
            return Array.from(context, node => {
                return node.querySelectorAll(selector);
            });
        }
        return context.querySelectorAll(selector);
    },

    create: (tagName = 'div', attrs = {}) => {
        const node = document.createElement(tagName);
        for (let key in attrs) {
            node.setAttribute(key, attrs[key]);
        }

        return node;
    },

    /**
     * return [[Attribute Name, Attribute Value],...]
     */
    attrs: node => {
        const attrs = {};
        Array.from(node.attributes).forEach(attr => {
            const attrName = attr.nodeName;
            attrs[attrName] = node.getAttribute(attrName);
        });

        return attrs;
    },

    vdom: class VDOM {
        constructor(tagName = 'div', attrs = {}, children = []) {
            this.tagName = tagName;
            this.attrs = attrs;
            this.children = Array.isArray(children) ? children : Array.from(children);
        }

        render() {
            const node = document.createElement(this.tagName);
            const attrs = this.attrs;

            for (let attr in attrs) {
                node.setAttribute(attr, attrs[attr]);
            }

            const children = this.children;

            Array.from(children).forEach(child => {
                const childEl = (child instanceof VDOM) ? child.render() : document.createTextNode(child);

                node.appendChild(childEl);
            });

            return node;
        }
    },

    keyCode: {
        'up': 38,
        'down': 40
    }
};