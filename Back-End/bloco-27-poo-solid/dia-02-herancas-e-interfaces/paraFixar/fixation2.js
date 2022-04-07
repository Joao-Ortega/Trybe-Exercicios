var MyClass = /** @class */ (function () {
    function MyClass(myNumber) {
        this.myNumber = myNumber;
    }
    MyClass.prototype.myFunc = function (myParam) {
        var soma = myParam + this.myNumber;
        return "A soma \u00E9 ".concat(soma);
    };
    return MyClass;
}());
;
var classe = new MyClass(8);
console.log(classe.myFunc(9));
