enum Month {
  Janeiro = 1,
  Fevereiro,
  Marco,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    if (day < 1 || day > 31) {
      this.day = 0o1;
    }
    if (month < 1 || month > 12) {
      this.month = 0o1;
    }
    if (year > 3000 || year < 0) {
      this.year = 1900;
    }
    this.day = day;
    this.month = month;
    this.year = year;
  }

  getMonthName(): string {
    return Month[this.month];
  }

  isLeapYear(year): boolean {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
};

const ano = new Data(0o6, 0o1, 1900);

console.log(ano.getMonthName());
console.log(ano.isLeapYear(ano.year));