"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        var dateMs = Date.parse(birthDate);
        if (name.length < 3) {
            console.error('O nome precisa ter no minímo 3 caracteres');
        }
        else {
            this._name = name;
        }
        if (dateMs > Date.now()) {
            console.log('Data inválida');
        }
        else {
            this.birthDate = birthDate;
        }
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length < 3) {
                console.error('O nome precisa ter no minímo 3 caracteres');
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
;
var me = new Person('Ortega', 'Aug 8, 1997');
var hyo = new Person('Hyorana', 'March 23, 1998');
console.log(me.name);
console.log(hyo.name);
console.log(me.name = 'João Pedro Ortega');
console.log(me.name = 'Hyorana Figueiredo');
