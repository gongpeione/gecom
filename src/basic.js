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

    keyCode: {
        'up': 38,
        'down': 40
    }
};