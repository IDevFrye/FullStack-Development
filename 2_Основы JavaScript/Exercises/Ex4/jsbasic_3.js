{
    "use strict";

    let prоducts = [];
    prоducts[0] = 'Блины';
    prоducts[1] = 'Квас';
    prоducts[3] = 'Пельмени';
    prоducts[4] = 'Икра';

    function printProduct(arr) {
        let tmpArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != undefined) {
                tmpArr.push(arr[i]);
            }
        }
        return tmpArr.join("/");;
    }
    str = printProduct(prоducts);
    document.write(str);
}