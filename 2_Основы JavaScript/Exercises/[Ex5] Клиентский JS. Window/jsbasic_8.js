function getDateProperties(milliseconds) {
    let date = new Date(milliseconds);
    let result = {
        day : date.getDate(),
        month : date.getMonth() + 1,
        year : date.getFullYear(),
        hour : date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
    };
    return result;
}

function printPrettyDate(neededDate) {
    let date = getDateProperties(neededDate);
    let str = '';
    str = `${date.day} ${getNameOfMonth(date.month)} ${date.year}, `;
    str = str + `${date.hour}:${date.minutes}:${date.seconds}`;
    return str;
}

function getNameOfMonth(month) {
    let stringMonth= '';
    let month_names = new Array(12)
    month_names[0] = "Январь";
    month_names[1] = "Февраль";
    month_names[2] = "Март";
    month_names[3] = "Апрель";
    month_names[4] = "Май";
    month_names[5] = "Июнь";
    month_names[6] = "Июль";
    month_names[7] = "Август";
    month_names[8] = "Сентябрь";
    month_names[9] = "Октябрь";
    month_names[10] = "Ноябрь";
    month_names[11] = "Декабрь";
    stringMonth = month_names[month - 1];
    return stringMonth;
}
document.write(printPrettyDate(1628440235430));