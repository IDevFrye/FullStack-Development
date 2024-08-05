{
    "use strict";
    function buildOptions(objData, root) {
        for (item of objData) {
            let option = document.createElement("option");
            option.value = item.value;
            option.innerText = item.name;
            root.appendChild(option);
            //Создать виртуальный dom-элемент option. Подсказка document.createElement
            //Указать в атрибуте value Значение из объекта objData (item.value, item.name)
            //Указать текстовое значение для option. Подсказка option.innerText
            //добавить созданный и настроенный элемент в root. Подсказка root.appendChild
        }
    }

    function ResetOptionList(ElementValue) {
        //Получаем доступ к форме
        let cars = document.forms.cars;
        //Объект содержащий как машины, так и мотоциклы
        let listCars = {
            moto: [
                {
                    name: "Classic",
                    value: 1
                },
                {
                    name: "Police Cruiser",
                    value: 2
                },
                {
                    name: "Harley Davidson",
                    value: 3
                },
            ],
            cars: [
                {
                    name: "Ford",
                    value: 1
                },
                {
                    name: "Chevy",
                    value: 2
                }
            ]
        }
        //Аналогично примеру проверяем значение в value
        if (ElementValue == 1) {
            //Убираем созданные ранее option из select
            cars.OptionList.innerHTML = "";
            //Запускаем на выполнение построение option
            //Передаем раздел moto (т.к. мотоциклы отображаем) и select
            buildOptions(listCars.moto, cars.OptionList);
        }
        if (ElementValue == 2) {
            //Убираем созданные ранее option из select
            cars.OptionList.innerHTML = "";
            //Передаем раздел cars (т.к. машины отображаем) и select
            buildOptions(listCars.cars, cars.OptionList);

        }
    }
}