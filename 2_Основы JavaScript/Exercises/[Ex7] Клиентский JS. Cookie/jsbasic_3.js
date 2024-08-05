function setCookies() {
    document.cookie = encodeURIComponent('login') + "=" + encodeURIComponent('stanislav');
    document.cookie = encodeURIComponent('password') + "=" + encodeURIComponent('pass');
    document.cookie = encodeURIComponent('domain') + "=" + encodeURIComponent('localhost');
}

function getCookies() {
    let result = [];
    let copy = document.cookie;
    while (copy.indexOf("=") != -1) {
        let end1 = copy.indexOf("="); 
        let end2 = copy.indexOf(";");
        let offset = 0; 
        let name = copy.substring(offset, end1);
        let value = copy.substring(end1+1, end2);
        offset += end2;
        if(copy.indexOf(";") != -1) {
            result.push({name: `${name}`, value: `${value}`});
            copy = copy.substring(end2+2, copy.length);
        } else {
            let value = copy.substring(end1+1, copy.length);
            result.push({name: `${name}`, value: `${value}`});
            copy = "";
        }
    }
    return result;
}