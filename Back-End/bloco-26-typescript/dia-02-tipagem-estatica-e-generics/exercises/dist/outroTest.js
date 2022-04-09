"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, eyeColor) {
        // usamos o this para acessar as propriedades da instância da classe
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
