function changeStyle() {
    let elem = document.querySelector('#elem').value;
    let style = document.querySelector('#style').value;
    let value = document.querySelector('#value').value;
    document.querySelector(elem).style[style] = value;
}