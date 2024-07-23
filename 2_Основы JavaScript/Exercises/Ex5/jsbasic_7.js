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
console.log(getDateProperties(1628414191622));