function cookieRefr() {
    let name = 'login', value = 'stanislav';
    let exp = new Date();
    let cookieExpire = exp.getTime()+1000*7; 
    exp.setTime(cookieExpire); 
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) +";expires="+exp.toGMTString();
}
