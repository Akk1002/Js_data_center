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

//if else
// if (condition) {

// }
// else if (condition) {

// }
// else {

// }

// switch
// switch (key) {
//    case value: break;
//    default: break;
// }

// ternary
// let a = 2
// a % 2 === 0 ? console.log("Четное") : console.log("Нечетное");

// Цикл

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

// let i = 0;
// while (i < 10) {
//   i++
//   console.log(i);
// }

// do {
//   i++;
//   console.log(i);
// } while (i < 10);
