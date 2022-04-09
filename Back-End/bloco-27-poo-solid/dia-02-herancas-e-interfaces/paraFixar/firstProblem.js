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
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var NaturalPerson = /** @class */ (function (_super) {
    __extends(NaturalPerson, _super);
    function NaturalPerson(name, cpf) {
        var _this = _super.call(this, name) || this;
        _this._cpf = cpf;
        return _this;
    }
    Object.defineProperty(NaturalPerson.prototype, "cpf", {
        get: function () { return this._cpf; },
        enumerable: false,
        configurable: true
    });
    return NaturalPerson;
}(Person));
var LegalPerson = /** @class */ (function (_super) {
    __extends(LegalPerson, _super);
    function LegalPerson(name, cnpj) {
        var _this = _super.call(this, name) || this;
        _this._cnpj = cnpj;
        return _this;
    }
    return LegalPerson;
}(Person));
;
var SalesContract = /** @class */ (function () {
    function SalesContract() {
        this._signatories = [];
        this._clauses = [];
    }
    Object.defineProperty(SalesContract.prototype, "signatories", {
        get: function () { return this._signatories; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalesContract.prototype, "clauses", {
        get: function () { return this._clauses; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SalesContract.prototype, "subject", {
        get: function () { return "Sales"; },
        enumerable: false,
        configurable: true
    });
    SalesContract.prototype.sign = function (signatory) { this._signatories.push(signatory); };
    SalesContract.prototype.addClause = function (clause) {
        if (this._signatories.length > 0)
            return;
        this._clauses.push(clause);
    };
    SalesContract.prototype.describe = function () {
        console.log('--------------------');
        console.log("Contrato: ".concat(this.subject));
        this.clauses.forEach(function (clause) { console.log("Cl\u00E1usula: ".concat(clause)); });
        this.signatories.forEach(function (signatory) { console.log("Assinado por: ".concat(signatory.name)); });
        console.log('--------------------\n');
    };
    return SalesContract;
}());
;
var s1 = new SalesContract();
var pp1 = new NaturalPerson('Tony', '123456789');
var pp2 = new NaturalPerson('Lilly', '987654321');
var lp = new LegalPerson('International Sales SA', '23961237162378');
s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();
