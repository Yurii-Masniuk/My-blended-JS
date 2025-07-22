// !===================
// Task-1
// 1 - отримай body елемент і виведи його в консоль;
const body = document.querySelector('body');
console.log(body);
// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
console.log(list);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataTopics = document.querySelectorAll('[data-topic]');
console.log(dataTopics);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstDataTopic = dataTopics[0];
console.log(firstDataTopic);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastDataTopic = dataTopics[dataTopics.length - 1];
console.log(lastDataTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const titleNextSibling = title.nextElementSibling;
console.log(titleNextSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allTitles = document.querySelectorAll('h3');
console.log(allTitles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allTitles.forEach(item => {
    item.classList.add('active');
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navItemEl = document.querySelector('li[data-topic="navigation"]');
console.log(navItemEl);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navItemEl.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список


// !===================
// Task-2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;


// !===================
// Task-3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const textInput = document.querySelector('.js-username-input');
const textOutput = document.querySelector('.js-username-output')

function handleInput(event) {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue.length > 6) {
        textInput.classList.add('success');
        textInput.classList.remove('error');
    } else {
        textInput.classList.add('error');
        textInput.classList.remove('success');
    };
    textOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
};

function handleFocus(event) {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        textInput.style.outline = '3px solid red';
    } else {
        textInput.style.outline = '3px solid green';
    };
};

function handleBlur(event) {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        textInput.style.outline = '3px solid red';
    } else {
        textInput.style.outline = '3px solid green';
    };
};

textInput.addEventListener('input', handleFocus);
textInput.addEventListener('focus', handleFocus);
textInput.addEventListener('blur', handleBlur);




// !===================
// Task-4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// !===================
// Task-5
// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

