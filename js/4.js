/*
 * #4
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів,
 * здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */

function DateCalculator(initialDate) {
  initialDate = new Date(initialDate);

  this.addDays = function(days) {
    initialDate.setDate(initialDate.getDate() + days);
  };

  this.subtractDays = function(days) {
    initialDate.setDate(initialDate.getDate() - days);
  };

  this.getResult = function() {
    return initialDate;
  };
}

// Демонстрація використання
const dateCalculator = new DateCalculator("2023-01-01");
dateCalculator.addDays(5);
console.log(dateCalculator.getResult()); // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult()); // Виводить нову дату після віднімання днів




