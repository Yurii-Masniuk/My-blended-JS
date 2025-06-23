// !===================

// Task-1
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// let index = styles.indexOf('blues');
//     if (index !== -1) {
//         styles[index] = 'classic';
//     }
// function logItems(array) {
//     for (let i = 0; i < array.length; i++ ) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// logItems(styles);

// !===================

// Task-2
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogin(array) {
//     let userName = prompt('Введіть ім`я');
//     if (array.includes(userName)) {
//         alert(`Welcome, ${userName}`);
//     } else {
//         alert(`User not found`);
//     }
// }
// checkLogin(logins);

// !===================
// Task-3
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             sum += arg;
//             count += 1;
//         }
//     }
//     let average = sum / count;
//     return average;
// }
// console.log(calculateAverage(1, 2, 3));
// console.log(calculateAverage(4, 8, 10, 14));
// console.log(calculateAverage(2, 3, 20, 25));
// console.log(calculateAverage(2, 3, '20', 25));

// !===================
// Task-4
// Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
