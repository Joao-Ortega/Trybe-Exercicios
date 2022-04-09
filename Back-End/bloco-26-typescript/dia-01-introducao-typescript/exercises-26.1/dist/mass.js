"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMass = void 0;
function convertMass(v, uB, uC) {
    const arr = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    const indexBase = arr.indexOf(uB);
    const indexForConvert = arr.indexOf(uC);
    const differenceToPow = indexBase < indexForConvert ? Math.abs(indexBase - indexForConvert) : indexForConvert - indexBase;
    return v * Math.pow(10, differenceToPow);
}
exports.convertMass = convertMass;
