;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (str) {
        console.log(str);
    };
    return ConsoleLogger;
}());
;
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (str) {
        console.log('Aqui é o 2!! =>', str);
    };
    return ConsoleLogger2;
}());
;
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(atribute) {
        if (atribute === void 0) { atribute = new ConsoleLogger(); }
        this.atribute = atribute;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.atribute.log("Salvando ".concat(key, " com valor de ").concat(value));
    };
    return ExampleDatabase;
}());
;
var log1 = new ConsoleLogger();
var log2 = new ConsoleLogger2();
var example1 = new ExampleDatabase(log1);
var example2 = new ExampleDatabase(log2);
var example3 = new ExampleDatabase();
console.log(example1.save('age', '24'));
console.log(example2.save('name', 'ortega'));
console.log(example3.save('height', '1.74cm'));
