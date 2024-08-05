function setStyle(fontColor, fontSize) {
    let listOfLi = document.getElementsByClassName("listNumbers")[0].childNodes;
    listOfLi.forEach(item => {
        if (item.nodeType == 1) {
            item.style.color = fontColor;
            item.style.fontSize = fontSize;
        }
    });
}