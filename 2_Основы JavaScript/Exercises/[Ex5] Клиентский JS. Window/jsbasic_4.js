function getStyle(nameStyle) {
    let text = document.querySelector('.myDiv').style[nameStyle];
    document.querySelector('p').innerHTML = text;
}