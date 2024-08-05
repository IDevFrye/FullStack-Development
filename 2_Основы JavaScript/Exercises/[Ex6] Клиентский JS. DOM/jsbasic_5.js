function buildNames(names, selector) {
    for (let i = 0; i < names.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = names[i];
        let parNd = document.getElementsByClassName(`${selector}`)[0];
        if (parNd) {
            parNd.append(newLi);
        } else {
            return false;
        }
    }
    return true;
}