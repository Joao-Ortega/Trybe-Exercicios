"use strict";
exports.__esModule = true;
exports.ReadingTracker = void 0;
var ConsoleNotification = /** @class */ (function () {
    function ConsoleNotification() {
    }
    ConsoleNotification.prototype.sendNotification = function (message) {
        console.log("Here we go again! - ".concat(message));
    };
    return ConsoleNotification;
}());
var EmailNotification = /** @class */ (function () {
    function EmailNotification(email) {
        this.email = email;
    }
    EmailNotification.prototype.sendNotification = function (message) {
        console.log("Here should go the implementation to send notification to the email: ".concat(this.email, " - ").concat(message));
    };
    return EmailNotification;
}());
var PhoneNotification = /** @class */ (function () {
    function PhoneNotification(phone) {
        this.phone = phone;
    }
    PhoneNotification.prototype.sendNotification = function (message) {
        console.log("Here should go the implementation to send notification to the phone ".concat(this.phone, " - ").concat(message));
    };
    return PhoneNotification;
}());
var ReadingTracker = /** @class */ (function () {
    function ReadingTracker(readingGoal, notificator) {
        if (notificator === void 0) { notificator = new ConsoleNotification(); }
        this.notificator = notificator;
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    ReadingTracker.prototype.trackReadings = function (readsCount) {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification("Congratulations! You've reached your reading goal!");
            return;
        }
        this.notificator.sendNotification("There are still some books to go!");
    };
    return ReadingTracker;
}());
exports.ReadingTracker = ReadingTracker;
var onlyLog = new ConsoleNotification();
var email = new EmailNotification('joao_ortega17@hotmail.com');
var phone = new PhoneNotification(61991489053);
var RT = new ReadingTracker(55, onlyLog);
var RT2 = new ReadingTracker(100, email);
var RT3 = new ReadingTracker(10, phone);
console.log(RT.trackReadings(56));
console.log(RT2.trackReadings(90));
console.log(RT3.trackReadings(2));
