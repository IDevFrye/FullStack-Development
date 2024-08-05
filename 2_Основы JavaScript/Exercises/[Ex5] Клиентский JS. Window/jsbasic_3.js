{
    "use strict";
    let counter = 10;

    let countdown = () => {
        document.getElementById('cont').innerHTML = counter--;
        if (counter < 0) {
            clearInterval(interval_id);
        }
    }

    let interval_id = setInterval(countdown, 1000); //запустить таймер с интервалом в 1 секунду и передать первым аргументом countdown.
}