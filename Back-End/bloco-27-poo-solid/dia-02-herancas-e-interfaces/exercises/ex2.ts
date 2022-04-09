import Person from "./ex1";
import IStudentInfos from "./interfaces";

class Student extends Person implements IStudentInfos {
  enrollment: string;
  examsGrades: number[];
  worksGrades: number[];
  constructor(name: string, birthDate: string, enrollment: string, examsGrades: number[], worksGrades: number[]) {
    super(name, birthDate);
    if (enrollment.length < 16) {
      console.error('A matéria tem que ter 16 caracteres no minímo');
    } else {
      this.enrollment = enrollment;
    }
    if (examsGrades.length > 4) {
      console.error('O aluno só pode ter no máximo 4 notas')
    } else {
      this.examsGrades = examsGrades;
    }
    if (worksGrades.length > 2) {
      console.error('O aluno só pode ter no máximo 2 notas de trabalho')
    } else {
      this.worksGrades = worksGrades;
    }
  }

  sumGrades(): number {
    const sum = this.examsGrades.reduce((acc, num) => acc + num, 0);
    return sum;
  }

  sumAverageGrade(): string {
    const avg = this.sumGrades() / this.examsGrades.length;
    return `Sua média é ${avg}`;
  }

  generateEnrollment(): string {
    return this.enrollment;
  }
};

const st1 = new Student('Ortega', 'Aug 8, 1997', 'Matemáticaaaaaaaa', [8, 7.5, 9], [9, 10]);
const st2 = new Student('Hyorana', 'March 23, 1998', 'Químicaaaaaaaaaa', [10, 7, 9, 5], [10, 7]);

console.log('A soma total do aluno ' + st2.name + ' foi de ' + st2.sumGrades());
console.log('A média dele foi:' + st2.sumAverageGrade());


