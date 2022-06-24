//  primitive
//  number  > raqam 1234
//  string  > matn '', "",``
//  boolean > true yoki false
//  undefined > belgilanmagan
//  null > 0
//  symbol > unique words
//  bigInt > katta hajmdagi sonlarni saqlash uchun

// non-primitive, reference, object
// array > []
// object > {}
// function > funksiya

// let f = 5
// let g = 4
// console.log(f+g);
// console.log(f-g);
// console.log(f*g);
// console.log(f**g);
// console.log(f/g);
// console.log(++f);
// console.log(f++);
// console.log(f);
// console.log(--f);
// console.log(f--);
// console.log(f);

// Number metods
// let a = 5.83
// console.log(a.toFixed(1));// Переводит Num и Str
// console.log(a.toString());// Переводит Num и Str
// console.log(Number.isInteger(a));// Спрашивает число целое ?
// console.log(Number.parseInt(a));// Показывает только челую часть
// console.log(Number.parseFloat(a));// Выводит только число из Str

// let a = 5.3
// console.log(Math.round(a));//округление
// console.log(Math.pow(a,3));//степень
// console.log(Math.sqrt(a));//квадратный корень
// console.log(Math.cbrt(a));//кубич еский корень
// console.log(Math.max(1,22,40.23,13,20,65,123));//максимальное число из списка
// console.log(Math.min(1,22,40.23,13,20,65,123));//Минимальное число из списка
// console.log(Math.floor(a));//Округляет к меньшему
// console.log(Math.ceil(a));//Округляет к большему
// console.log(Math.abs(a));//Модуль
// console.log(Math.round(Math.random() * 100)); //Рандомное число

// Comparision operators
// ==,===,!==,<,>,&&,||

// String
// "" '' ``

// let text = 'Sasha Kim'

// console.log(text.length);// Выведет сколько буков
// console.log(text.indexOf('l', 4));// Покажет номер буквы начнает с 0 (после 4 индекса)
// console.log(text.lastIndexOf('l'));// Покажет номер буквы начиная с конца
// console.log(text.search('l'));// Покажет номер буквы начнает с 0
// console.log(text.chartAt(2));// Выводит букву этого индекса
// console.log(text.startsWith('a'));// Спрашивает начинается ли солово с этой буквы True/False
// console.log(text.endWith('a'));// Спрашивает заканчивается ли солово с этой буквы True/False
// console.log(text.chartCodeAt(1));// Выводит машинный номер буквы
// console.log(text.concat('Kim'));// Добывит текс с зади
// console.log(text.includes('sa'));// Есть ли в тексте True/False
// console.log(text.repeat(10));// Повторяет текс
// console.log(text.replace('Kim', 'Big'));// Заиеняет слово
//Регулярные выражения "/Big/gi" g = global i = ignore
// console.log(text.trimStart());// Убирает прбелы в начале
// console.log(text.trimEnd());// Убирает прбелы в конце
// console.log(text.slice(2,-1));// Вырезает текс по индексу
// console.log(text.substring(2,6));// Вырезает текс по индексу
// console.log(text.slice(2));// Вырезает текс с индекса до конца
// console.log(text.split());// Переводит в Arrey значение(''=Берет каждую букву в ковычки, ' '=Каждое слово)
// console.log(text.match(/sasha/gi));// Переведет в Arrey только это текс
// console.log(text.toLowerText());// Выведит все в нижнем регимтре
// console.log(text.toUpperText());// Выведит все в верэнем регимтре

// -if else-
// if (condition) {

// }
// else if (condition) {

// }
// else {

// }

// -switch-
// switch (key) {
//    case value: break;
//    default: break;
// }

// -ternary-
// let a = 2
// a % 2 === 0 ? console.log("Четное") : console.log("Нечетное");

// Цикл

// -for-
// for (let i = 1; i <= 20; i++) {
//    console.log(i);
// }
// for (let i = 20; i >= 1; i--) {
//    console.log(i);
// }
// for (let i = 1; i <= 20; i = i + 2) {
//    console.log(i);
// }
// let p = "Hi Sasha"
// for (let i = 0; i < p.length; i++) {
//    console.log(p[i]);
// }

// -while-
// let i = 0;
// while (i < 10) {
//   i++
//   console.log(i);
// }

// -do while-
// let i = 0
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// Функции

// Function declaration
// function name(params) {
//    return
// }
// console.log(name());

// Funcition expression
// let name = function (params) {

// }
// name()

//  Arrow funcition
// let name = () => {

// }
// let name = (_)=>


// Массивы
// let array = [1, 2, 3, 4, 5, 6, [7, 8, 9, 10]]
// let array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(array.concat(array2)); // Bозвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями,
// console.log(array.every(elem => elem >= 10));//роверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// console.log(array.fill(2, 3, 8));// заполняет все элементы массива от начального до конечного индексов одним значением.
// console.log(array.filter(array => array > 6));//создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
// console.log(array.flat());//возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты"
// array.forEach(element => console.log(element));//выполняет указанную функцию один раз для каждого элемента в массиве.
// console.log(Array.from('fooo'));//создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
// console.log(array.includes(1));//определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
// console.log(array.indexOf(2));//возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
// console.log(Array.isArray(array));// возвращает true, если объект является массивом и false, если он массивом не является.
// console.log(array.join());//объединяет все элементы массива (или массивоподобного объекта) в строку.
// console.log(array.map((num) => num * 2));// создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// console.log(Array.of(7));//создаёт новый экземпляр массива Array из произвольного числа аргументов, вне зависимости от числа или типа аргумента.
// console.log(array.pop());//удаляет последний элемент из массива и возвращает его значение.
// console.log(array.push(11,12));//добавляет один или более элементов в конец массива и возвращает новую длину массива.
// console.log(array2.reduce((a, b) => a + b));// применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
// console.log(array.reverse());//на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.
// console.log(array.shift());//удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
// console.log(array.unshift(2));// добавляет один или более элементов в начало массива и возвращает новую длину массива.
// console.log(array.slice(2, 5));//возвращает новый массив, содержащий копию части исходного массива.
// console.log(array.some(elem => elem > 10));//проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// console.log(array2.sort((a, b) => a - b));//проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
// console.log(array2.splice(1, 7));// изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.