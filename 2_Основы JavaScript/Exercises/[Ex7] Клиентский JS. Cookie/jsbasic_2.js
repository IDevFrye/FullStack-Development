function cookieRefr() {
    let name = 'login', value = 'stanislav';
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + "; max-age=1";
}