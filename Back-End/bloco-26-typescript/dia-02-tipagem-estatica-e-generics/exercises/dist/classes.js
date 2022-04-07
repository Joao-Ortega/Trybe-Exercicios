"use strict";
;
class Dog {
    constructor(nome, modelo, idade) {
        this._nome = nome;
        this._modelo = modelo;
        this._idade = idade;
    }
    latirFunc(latido) {
        return `${this._nome} latiu: ${latido}`;
    }
    ;
}
const dog1 = new Dog('Baruk', 'Fila', 7);
console.log(dog1.latirFunc('Eae meu parceiro!'));
// Classe Flight
class Flight {
    constructor(number, company, pilot, firstFlight) {
        this._number = number;
        this._company = company;
        this._pilot = pilot;
        this._firstFlight = firstFlight;
    }
    atentionFunc(destiny) {
        return `Atention flight number ${this._number} of ${this._company} company, here is you pilot ${this._pilot} we are in route to ${destiny}`;
    }
}
const flight1 = new Flight(626, 'Airlines', 'Francisco');
const flight2 = new Flight(428, 'Emirates', 'Bella', true);
console.log(flight1.atentionFunc('Miami'));
console.log(flight2.atentionFunc('Las Vegas'));
