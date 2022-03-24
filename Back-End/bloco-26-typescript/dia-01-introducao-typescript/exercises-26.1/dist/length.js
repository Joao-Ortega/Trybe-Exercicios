"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
function convert(v, uB, uC) {
    const arr = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    const indexBase = arr.indexOf(uB);
    const indexForConvert = arr.indexOf(uC);
    const differenceToPow = indexBase < indexForConvert ? Math.abs(indexBase - indexForConvert) : indexForConvert - indexBase;
    return v * Math.pow(10, differenceToPow);
}
exports.convert = convert;
