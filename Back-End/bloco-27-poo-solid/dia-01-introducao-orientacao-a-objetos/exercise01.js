var Student = /** @class */ (function () {
    function Student(matricula, nome, notas, trabalhos) {
        this._matricula = matricula;
        this._nome = nome;
        this._notas = notas;
        this._trabalhos = trabalhos;
    }
    Student.prototype.sumAllGrades = function () {
        return this._notas.reduce(function (acc, numb) { return acc + numb; }, 0);
    };
    Student.prototype.gradesAverage = function () {
        var average = (this.sumAllGrades() / this._notas.length).toFixed(2);
        return parseInt(average);
    };
    return Student;
}());
;
var Joao = new Student('Programming', 'Ortega', [8, 9.5, 9], [10, 10]);
console.log(Joao);
console.log("A soma das notas de Jo\u00E3o \u00E9 ".concat(Joao.sumAllGrades()));
console.log("Logo sua m\u00E9dia \u00E9 ".concat(Joao.gradesAverage()));
