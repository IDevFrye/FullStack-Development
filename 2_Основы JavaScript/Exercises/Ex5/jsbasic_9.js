let getRoundedNumber = (originalNumber, count) => {
    return Math.round(originalNumber * 10**count)/(10**count);
}
console.log(getRoundedNumber(16.245656776, 4));