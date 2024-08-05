let city = {};
city['name'] = 'ГородN';
city['population'] = '10 млн';
city['getName'] = function () {
    return this.name;
};
city['printProperties'] = function () {
    let tmp = "";
    for (let prop in this) {
        if (typeof this[prop] != 'function') {
            tmp += `${prop}=${this[prop]}/`;
        }
    }
    return tmp;
};
console.log(city.printProperties());