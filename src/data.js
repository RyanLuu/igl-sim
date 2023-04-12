class Data {
    constructor(data) {
        data.listeners = { 'set': [] };
        let p = new Proxy(data, {
            set: function(target, key, value) {
                target[key] = value;
                target.listeners['set'].forEach(function(listener) {
                    listener({
                        variable: key,
                        value: value
                    });
                });

                return true;
            }
        });

        p.addEventListener = function(type, listener)  {
            data.listeners[type].push(listener);
        }

        // initialize one more time to call 'set' methods for all listeners
        // used to e.g. update responsive GUI elements
        for (let key in p) {
            setTimeout(() => p[key] = p[key]);
        }
        return p;
    }
}

var variables = new Data({
    pressure: 1,
    temperature: 273.15,
    volume: 22.40,
    moles0: 1,
    moles1: 0,
    moles2: 0,
    species0: "Ar",
    species1: "Xe",
    species2: "He",
    listeners: [],
});

var options = new Data({
    trail: false,
    lineChart: true // if true show relationship between variables, if false show histogram of speeds
});

export {variables, options}
