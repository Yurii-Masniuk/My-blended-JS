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

const logins = ["Peter", "John", "Igor", "Sasha"];
function checkLogin(array) {
    let userName = prompt('Введіть ім`я');
    if (array.includes(userName)) {
        alert(`Welcome, ${userName}`);
    } else {
        alert(`User not found`);
    }    
}
checkLogin(logins);