let person = {
    name : "Станислав",
    surname : "Сивинский",
    setName : function (newName) {
        this.name = newName;
    },
    setSurname : function (newSurname) {
        this.surname = newSurname;
    },
    getFullName : function () {
        return (new String).concat(this.name, " ", this.surname);
    }
}
person.setName("Иван");
person.setSurname("Иванов");
console.log(person.getFullName());