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
var SuperClass = /** @class */ (function () {
    function SuperClass(isSuper) {
        if (isSuper === void 0) { isSuper = true; }
        this.isSuper = isSuper;
    }
    SuperClass.prototype.sayHello = function () {
        console.log('Olá mundo!');
    };
    return SuperClass;
}());
;
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super.call(this, false) || this;
    }
    return SubClass;
}(SuperClass));
;
var testing = function (obj) {
    if (obj.isSuper) {
        console.log("Super");
    }
    console.log("Sub");
    obj.sayHello();
};
var supClassObj = new SuperClass();
var subClassObj = new SubClass();
testing(supClassObj);
testing(subClassObj);
