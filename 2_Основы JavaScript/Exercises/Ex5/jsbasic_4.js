{
    "use strict";

    let arr = ['Книги', 'Фильмы', 'Видео', 'Контакты', 'Поисковик', 1, 5, 3, 2];

    sortAndJoin = (unsortedArr) => {
        for (let i = 0; i < unsortedArr.length; i++) {
            if (unsortedArr[i] == undefined) {
                unsortedArr.splice(i, 1);
                i--;
            }
        }
        unsortedArr.sort();
        return unsortedArr.join("|");
    }

    document.write(sortAndJoin(arr));
}