let firstTimer = window.setTimeout(() => { alert('Отработал первый!'); }, 2000);
let secondTimer = window.setTimeout(() => { alert('Отработал второй!'); }, 4000);
clearTimeout(firstTimer);