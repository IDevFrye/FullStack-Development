let myArr = [0, 11, 20, 32, 54, 103, 72, 45];
getEvent = (arr) => {
    let evenArray = [];
    arr.forEach(item => {
        if (item % 2 === 0) {
            evenArray.push(item);
        }
    });
    return evenArray;
}
console.log(getEvent(myArr));