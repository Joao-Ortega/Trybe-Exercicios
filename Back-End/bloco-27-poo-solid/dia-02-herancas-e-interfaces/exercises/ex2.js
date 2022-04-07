"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ex1_1 = require("./ex1");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate, enrollment, examsGrades, worksGrades) {
        var _this = _super.call(this, name, birthDate) || this;
        if (enrollment.length < 16) {
            console.error('A matéria tem que ter 16 caracteres no minímo');
        }
        else {
            _this.enrollment = enrollment;
        }
        if (examsGrades.length > 4) {
            console.error('O aluno só pode ter no máximo 4 notas');
        }
        else {
            _this.examsGrades = examsGrades;
        }
        if (worksGrades.length > 2) {
            console.error('O aluno só pode ter no máximo 2 notas de trabalho');
        }
        else {
            _this.worksGrades = worksGrades;
        }
        return _this;
    }
    Student.prototype.sumGrades = function () {
        var sum = this.examsGrades.reduce(function (acc, num) { return acc + num; }, 0);
        return sum;
    };
    Student.prototype.sumAverageGrade = function () {
        var avg = this.sumGrades() / this.examsGrades.length;
        return "Sua m\u00E9dia \u00E9 ".concat(avg);
    };
    Student.prototype.generateEnrollment = function () {
        return this.enrollment;
    };
    return Student;
}(ex1_1.default));
;
var st1 = new Student('Ortega', 'Aug 8, 1997', 'Matemáticaaaaaaaa', [8, 7.5, 9], [9, 10]);
var st2 = new Student('Hyorana', 'March 23, 1998', 'Químicaaaaaaaaaa', [10, 7, 9, 5], [10, 7]);
var st3 = new Student('Luan', 'Apr 2, 2000', 'Filosofiaaaaaaaaaa', [5, 7, 8], [7, 10]);
var st4 = new Student('William', 'Dec 15, 1999', 'Engenhariaaaaaaaaa', [8, 5, 10], [4, 6]);
console.log('A soma total do aluno ' + st2.name + ' foi de ' + st2.sumGrades());
console.log('A média dele foi:' + st2.sumAverageGrade());
