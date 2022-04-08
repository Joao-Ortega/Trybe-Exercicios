var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
;
var MeleeCharacter = /** @class */ (function (_super) {
    __extends(MeleeCharacter, _super);
    function MeleeCharacter(_name) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        return _this;
    }
    ;
    MeleeCharacter.prototype.talk = function () {
        console.log("".concat(this._name, " est\u00E1 falando"));
    };
    MeleeCharacter.prototype.specialMove = function () {
        console.log("".concat(this._name, " ataca com faca"));
    };
    return MeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter(_name) {
        var _this = _super.call(this) || this;
        _this._name = _name;
        return _this;
    }
    ;
    LongRangeCharacter.prototype.talk = function () {
        console.log("".concat(this._name, " est\u00E1 alcan\u00E7ando longe"));
    };
    LongRangeCharacter.prototype.specialMove = function () {
        console.log("".concat(this._name, " ataca de MUITO LONGE"));
    };
    return LongRangeCharacter;
}(Character));
;
var func = function (sup) {
    sup.talk();
    sup.specialMove();
};
var melee = new MeleeCharacter('Ortega');
var long = new LongRangeCharacter('Hyo');
console.log(func(melee));
console.log(func(long));
