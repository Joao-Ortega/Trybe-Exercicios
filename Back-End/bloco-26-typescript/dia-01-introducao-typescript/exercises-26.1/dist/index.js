"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const length_1 = require("./length");
const mass_1 = require("./mass");
const main = () => {
    console.log((0, length_1.convert)(1, 'm', 'mm'));
    console.log((0, mass_1.convertMass)(1, 'g', 'mg'));
};
main();
