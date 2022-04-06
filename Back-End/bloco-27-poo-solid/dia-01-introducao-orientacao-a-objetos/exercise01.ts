class Student {
  private _matricula: string;
  private _nome: string;
  private _notas: number[];
  private _trabalhos: number[];

  constructor(matricula: string, nome: string, notas: number[], trabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = notas;
    this._trabalhos = trabalhos;
  }

  sumAllGrades(): number {
    return this._notas.reduce((acc, numb) => acc + numb, 0);
  }

  gradesAverage(): number {
    const average: string = (this.sumAllGrades() / this._notas.length).toFixed(2);
    return parseInt(average);
  }
};

const Joao = new Student('Programming', 'Ortega', [8, 9.5, 9], [10, 10]);

console.log(Joao);
console.log(`A soma das notas de João é ${Joao.sumAllGrades()}`);
console.log(`Logo sua média é ${Joao.gradesAverage()}`);

