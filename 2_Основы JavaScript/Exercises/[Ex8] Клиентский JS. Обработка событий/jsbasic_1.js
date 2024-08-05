{
    "use strict";
    function validateEmail(email) {
        let Location = email.indexOf('@')
        if (Location == -1) {
            return false;
        }
        return true;
    }

    function checkInputEmail(EmailAddress) {
        if(!validateEmail(EmailAddress)) {
            alert('Введите Email! Формат: имя_ящика@платформа');
        }
    }
}