{
    "use strict";

    let arr = ['Книги', 'Фильмы', 'Видео', undefined, 'Контакты', 'Поисковик', 1, 5, 3, 2];

    function compareElements(a, b) {
        if (((typeof a) == 'string') && ((typeof b) == 'number')) return 1;
        if (((typeof a) == 'number') && ((typeof b) == 'string')) return -1;
        if (((typeof a) == 'string') && ((typeof b) == 'string') && (a > b)) return -1;
        if (((typeof a) == 'string') && ((typeof b) == 'string') && (a < b)) return 1;
        if (((typeof a) == 'string') && ((typeof b) == 'string') && (a == b)) return 0;

        if (((typeof a) == 'number') && ((typeof b) == 'number') && (a > b)) return -1;
        if (((typeof a) == 'number') && ((typeof b) == 'number') && (a < b)) return 1;
        if (((typeof a) == 'number') && ((typeof b) == 'number') && (a == b)) return 0;
    }

    let newArr = arr.filter(item => { if (item !== undefined) return item; }).sort(compareElements);
    document.write(newArr.join("|"));
}