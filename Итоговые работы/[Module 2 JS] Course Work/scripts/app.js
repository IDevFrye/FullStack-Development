'use strict';

let habbits = [];
let doneHabbits = [];
const DONE_HABBIT_KEY = 'DONE_HABBIT_KEY';
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;
let globalActiveHabbit;

/* page */
const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.h1'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar')
    },
    content: {
        daysContainer: document.getElementById('days'),
		nextDay: document.querySelector('.habbit__day'),
        input: document.querySelector('.input_icon'),
        done: document.querySelector('.settings button')
    },
    popup: {
        index: document.getElementById('add-habbit-popup'),
        iconField: document.querySelector(`.popup__form input[name='icon']`)
    }
}

/* utils */
//Загрузка данных
function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);
    if (Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

//Сохранение данных
function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function saveDataDone() {
    localStorage.setItem(DONE_HABBIT_KEY, JSON.stringify(doneHabbits));
}

function togglePopup() {
    if (page.popup.index.classList.contains('cover_hidden')) {
        page.popup.index.classList.remove('cover_hidden');
    } else {
        page.popup.index.classList.add('cover_hidden');
    }
}

function resetForm(form, fields) {
	for (const field of fields) {
		form[field].value = '';
	}
}

function validateAndGetFormData(form, fields) {
    const formData = new FormData(form);
    const res = {};
    for (const field of fields) {
        const fieldValue = formData.get(field);
        form[field].classList.remove('error');
        if (!fieldValue) {
            form[field].classList.add('error');
        }
        res[field] = fieldValue;
    }
    let isValid = true;
    for (const field of fields) {
        if(!res[field]) {
            isValid = false;
        }
    }
    if (!isValid) {
        return;
    }
    return res;
}

//Рендеринг
function rerenderMenu(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);
        if (!existed) {
            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => {
                rerender(habbit.id);
            });
            element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
            if (activeHabbit.id === habbit.id){
                element.classList.add('menu__item_active');
                
            }
            page.menu.appendChild(element);
            continue;
        }
        if (activeHabbit.id === habbit.id){
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerenderHead(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    page.header.h1.innerText = activeHabbit.name;
    const progress = (activeHabbit.days.length / activeHabbit.target) > 1
        ? 100
        : (activeHabbit.days.length / activeHabbit.target) * 100;
    page.header.progressPercent.innerText = progress.toFixed(0) + "%";
    page.header.progressCoverBar.style.width = progress.toFixed(0) + "%"; 
}

function rerenderContent(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    page.content.daysContainer.innerHTML = '';
    for (const day in activeHabbit.days) {
        const element = document.createElement('div');
        element.classList.add('habbit');
        element.innerHTML = `<div class="habbit__day">День ${Number(day) + 1}</div>
              <div class="habbit__comment">${activeHabbit.days[day].comment}</div>
              <button class="habbit__delete" onclick="deleteDay(${day})">
                <img src="./images/delete.svg" alt="Удалить день ${Number(day) + 1}" />
              </button>`;
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
    completeHabbitText(activeHabbit);
}

function rerender(activeHabbitId) {
    globalActiveHabbitId = activeHabbitId;
    const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
    globalActiveHabbit = activeHabbit;
    document.location.replace(document.location.pathname + '#' + activeHabbitId);
    rerenderMenu(activeHabbit);
    rerenderHead(activeHabbit);
    rerenderContent(activeHabbit);
    if (page.content.input) {
        page.content.input.classList.remove('error');
    }
}

/* Добавление дня */
function addDays(event) {
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['comment']);
    if (!data) {
        return;
    }
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            return {
                ...habbit,
                days: habbit.days.concat([{ comment: data.comment }])
            };
        }
        return habbit;
    });
    resetForm(event.target, ['comment']);
    saveData();
    rerender(globalActiveHabbitId);
}


function deleteDay(day) {
    habbits = habbits.map(habbit => {
        if (habbit.id === globalActiveHabbitId) {
            habbit.days.splice(day,1);
            return {
                ...habbit,
                days: habbit.days
            };
        }
        return habbit;
    });
    saveData();
    rerender(globalActiveHabbitId);
}

function setIcon(context, icon) {
    page.popup.iconField.value= icon;
    const activeIcon = document.querySelector('.icon.icon_active');
    activeIcon.classList.remove('icon_active');
    context.classList.add('icon_active');
}

function addHabbit(event) {
    event.preventDefault();
    const data = validateAndGetFormData(event.target, ['name','icon','target']);
    if (!data) {
        return;
    }
    const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0);
    habbits.push({
        id: maxId + 1,
        name: data.name,
        target: data.target,
        icon: data.icon,
        days: []
    });
    resetForm(event.target, ['name','target']);
    togglePopup();
    saveData();
    rerender(maxId + 1);
}

function completeHabbitText(activeHabbit){
    if ((activeHabbit.days.length / activeHabbit.target) >= 1) {
        page.content.done.innerText= 'Завершить привычку';
    } else {
        page.content.done.innerText='Удалить привычку';
    }
}

function deleteHabbit(event) {
    const tt = habbits.find(habbit => habbit.id === globalActiveHabbit.id);
    const targId = habbits.indexOf(tt);
    if ((globalActiveHabbit.days.length / globalActiveHabbit.target) >= 1) {
        let ti = tt;
        ti.timestamp = new Date();
        doneHabbits.push(ti);
        saveDataDone();
    }
    habbits.splice(targId, 1);
    saveData();
    const menuItem = document.querySelector(`[menu-habbit-id="${globalActiveHabbitId}"]`);
    if (menuItem) {
        menuItem.remove();
    }
    if (habbits.length > 0) {
        rerender(habbits[0].id);
    } else {
        globalActiveHabbitId = null;
        page.header.h1.innerText = "-";
        page.header.progressPercent.innerText = "0%";
        page.header.progressCoverBar.style.width = "0%";
        page.content.daysContainer.innerHTML = "";
        page.content.nextDay.innerHTML = "-";
    }
}

//Инциализация
(() => {
    loadData();
    const hashId = Number(document.location.hash.replace('#', ''))
    const urlHabbit = habbits.find(habbit => habbit.id == hashId);
    if (urlHabbit) {
        rerender(urlHabbit.id);
    } else {
        rerender(habbits[0].id);
    }
})()

