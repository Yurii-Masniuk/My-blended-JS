// !===================

// Task-1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = numbers.map(item => item ** 2);
// console.log(newNumbers);

// !===================

// Task-2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
// const res = data.flatMap(item => item.values);
// console.log(res);

// !===================

// Task-3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const res = people.some(item => item.age < 20);
// console.log(res);

// !===================

// Task-4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const evenNum = numbers.every(number => number % 2 === 0);
// console.log(evenNum);

// !===================

// Task-5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNum = numbers.find(numbers => numbers % 2 !== 0);
// console.log(oddNum);

// !===================

// Task-6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// numbersArray.sort((a, b) => a - b);
// console.log(numbersArray);

// !===================

// Task-7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// stringArray.sort((a, b) => a.localeCompare(b));
// console.log(stringArray);

// !===================

// Task-8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// users.sort((a, b) => a.age - b.age);
// console.log(users);

// !===================

// Task-9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// let newArray = user.filter(item => item.age > 20);
// console.log(newArray);

// !===================

// Task-10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, item) => acc + item, 0);
// console.log(sum);

// !===================

// Task-11
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
// .number(10) // Встановлюємо початкове значення 10
// .add(5) // Додаємо 5 (10 + 5 = 15)
// .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4) // Множимо на 4 (12 * 4 = 48)
// .divide(2)  // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24
// console.log(result); // 24

// class Calculator {
//     number(value) {
//         this.value = value;
//         return this;
//     }
//     getResult() {
//         return this.value;
//     }
//     add(value) {
//         this.value += value;
//         return this;
//     }
//     subtract(value) {
//         this.value -= value;
//         return this;
//       }
    
//       multiply(value) {
//         this.value *= value;
//         return this;
//     }
//     divide(value) {
//         this.value /= 2;
//         return this;
//       }
// }
// const calc = new Calculator();
// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);

// !===================

// Task-12
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login
//   #email
//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
  
// !===================

// Task-13
// Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.
  
// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.
  
//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   name
//   age
//   gender
//   email
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
// }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
// }
// }
// class Employee extends  Person {
//   salary
//   department
//   constructor(params) {
//     super(params);
//     this.salary = params.salary;
//     this.department = params.department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     }
//   }
// }

// !================================================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//   static Priopity() {
//     return {
//       HIGH: 'high',
//       MEDIUM: 'medium',
//       LOW: 'low'
//     }
//   }
//   constructor() {
//     this.items = [];
//   }

//
//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     this.items = this.items.filter((item) => item.text !== text);
//   }
// }


// const note = new Notes();

// note.addNote({ text: 'Купити хліб', priority: Notes.Priopity().HIGH });
// note.removeNote('Купити хліб');
// console.log(note);

// !================================================================