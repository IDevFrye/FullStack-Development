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
        let checkMail = validateEmail(EmailAddress);
        if (checkMail == false) {
            let emailStyle = document.forms[0].Email.style;
            emailStyle.color = 'red';
            emailStyle.fontSize = '18px';
            emailStyle.outline = '1px solid red';
        }
        document.get
    }
}