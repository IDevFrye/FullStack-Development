{
    "use strict";

    let prоducts = [];
    prоducts[0] = 'Блины ';
    prоducts[1] = 'Квас';
    prоducts[3] = 'Пельмени';
    prоducts[4] = 'Икра';

    function printProduct(prоducts) {
        for (let i = 0; i < prоducts.length; i++) {
            if (prоducts[i] != undefined) {
                document.write(prоducts[i] + '<br>');
            }
        }
    }

    printProduct(prоducts);
}