var Month;
(function (Month) {
    Month[Month["Janeiro"] = 1] = "Janeiro";
    Month[Month["Fevereiro"] = 2] = "Fevereiro";
    Month[Month["Marco"] = 3] = "Marco";
    Month[Month["Abril"] = 4] = "Abril";
    Month[Month["Maio"] = 5] = "Maio";
    Month[Month["Junho"] = 6] = "Junho";
    Month[Month["Julho"] = 7] = "Julho";
    Month[Month["Agosto"] = 8] = "Agosto";
    Month[Month["Setembro"] = 9] = "Setembro";
    Month[Month["Outubro"] = 10] = "Outubro";
    Month[Month["Novembro"] = 11] = "Novembro";
    Month[Month["Dezembro"] = 12] = "Dezembro";
})(Month || (Month = {}));
class Data {
    constructor(day, month, year) {
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
    getMonthName() {
        return Month[this.month];
    }
    isLeapYear(year) {
        if (year % 4 === 0) {
            return true;
        }
        return false;
    }
}
;
const ano = new Data(0o6, 0o1, 1900);
console.log(ano.getMonthName());
console.log(ano.isLeapYear(ano.year));
