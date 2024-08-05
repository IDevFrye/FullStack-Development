{
    "use strict";
    window.products = ['Блины', 'Квас', 'Пельмени', 'Икра'];
    function printProduct(arr) {
        let tmp = '';
        for (let i = 0; i < arr.length; i++) {
            tmp += products[i] + '<br>';
        }
        document.write(tmp);
    }
    printProduct(products);
}