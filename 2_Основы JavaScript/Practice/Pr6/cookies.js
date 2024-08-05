"use strict"; 
function setcookie(name,value,expire) { 
    // Три аргумента передающиеся функции: первый отвечает за имя cookies, второй за значение, а третий за дату 
    let exp = new Date(); 
    // Создается новый объект Date 
    let cookieExpire = exp.getTime()+expire; 
    // Через объект Date получаем доступ к свойству getTime() которое возвращает количество миллисекунд с 1 января 1970 года;
    exp.setTime(cookieExpire); 
    // Устанавливает время в миллисекундах 
    document.cookie=name+"="+value+";expires="+exp.toGMTString(); 
    /* Записываем cookie где имя (name) и значения (value) 
    передаются как аргументы, 
    а дата создается с помощью метода toGMTString() который 
    преобразует миллисекунды 
    в формат - Monday, DD-Mon-YYYY HH:MM:SS GMT*/ 
} 

// Функция чтения cookies: 
function getcookie(name) { 
    let search = name + "="; // создается переменная со значением аргумента name для первого cookie это user=, для второго user2=, а для третьего user3. 
    if(document.cookie.length>0) { 
        /* Проверка на наличие cookie 
        если cookie усть то вернется true? если нет то false*/ 
        let offset = document.cookie.indexOf(search); 
        /* Возвращает индекс первого вхождения 
        значения указанной строки в 
        данном экземпляре, в противном случае -1.*/ 
        if(offset != -1) { // Если offset не равняется -1 
            offset+=search.length; 
            /* С помощью оператора присваивание с сложением 
            задаем 
            offset значение offset+ длина переменной serch, 
            которая 
            содержит количество символов в имени cookies.*/ 
            let end = document.cookie.indexOf(";",offset); 
            /* в переменную end заноситсится с помощью метода 
            indexOf() индекс первого вхождения значения (;) 
            с указанной позиции знака (offset).*/ 
            if(end == -1) { 
                end = document.cookie.length 
            } 
            return(document.cookie.substring(offset, end)); 
            /* С помощью метода substring() возвращается 
            подстрока, начиная с позиции offset до, 
            но не включая end. Это значение возвращается с 
            помощью 
            return переменной которая вызвала функцию 
            getcookie()*/ 
        } 
    } 
} 