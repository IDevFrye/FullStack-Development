let EmailAddress = 'stanislav_sivin@mail.ru';

getSubstring = (str, start, end) => {
    return str.substring(start, end);
}

let result = getSubstring(EmailAddress, EmailAddress.indexOf('@') + 1, EmailAddress.length);
alert(result);
//mail.ru