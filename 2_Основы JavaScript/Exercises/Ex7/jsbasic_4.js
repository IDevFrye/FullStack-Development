function getCookies() {
    let tmp = '';
    if (typeof Cookies.get('login') !== 'undefined') {
    tmp = tmp + 'login : '+Cookies.get('login')+'<br>';
    }
    if (typeof Cookies.get('password') !== 'undefined') {
    tmp = tmp + 'password : '+Cookies.get('password');
    }
    document.getElementsByClassName('saveCookie')[0].innerHTML = tmp;
}


let login = async () => {
    let username = encodeURIComponent(document.getElementById('login').value);
    let password = encodeURIComponent(document.getElementById('password').value);
    Cookies.set('login',`${username}`);
    Cookies.set('password',`${password}`);
    await getCookies();
}
