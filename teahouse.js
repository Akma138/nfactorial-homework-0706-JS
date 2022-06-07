
//1. Переменные - let, const
let message;
let client;
const address = "Almaty, Panfilova 100"
client = "Petya"
message = `Hello, ${client}, рады видеть Вас в новой чайной по адрес ${address}`;
console.log(message); 

//Типы данных - string, number, boolean, null, undefined

let priceOfTea;
priceOfTea = 300;
let priceOfCoffee;
priceOfCoffee = 800.5;
console.log(priceOfTea, priceOfCoffee);

let isOpen = true;
let isClosed = false;

let owner = "Dalida";
let company = 'TeaHouse';
let language = `Kazakh, Russian`;
console.log(owner);
console.log(company);
console.log(language);

let isCool;
console.log(isCool);//undefined

isCool = null;
console.log(isCool); // null

//3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже), добавление функции в объект

let blackTea = {    
  name: "super",  
  age: 2       
};
console.log( blackTea.name ); 
console.log( blackTea.age );

let blackTea = {};
blackTea["Princess"] = true;
console.log(blackTea["Princess"]); 
delete blackTea["Princess"];

let key = "Princess";
blackTea[key] = true;

//Массивы - использовать все методы, которые мы прошли. Не забывать про map, filter, rest и spread операторы. Еще slice ;)
let arr = ["Я", "работаю", "в", "чайном", "доме"];
arr.splice(1, 2); // начиная с позиции 1, удалить 2 элемент
console.log( arr ); 

let arr = ["t", "e", "a"];
console.log( arr.slice(1, 3) ); // (копирует с 1 до 3)

let arr = ["tea"];
console.log( arr.concat(["coffee"]) ); 

["Tea", "Coffee", "Cacao"].forEach((item, index, меню) => {
  console.log(`${item} имеет позицию ${index} в ${меню}`);
});

let items = [
  {id: 1, name: "Tea"},
  {id: 2, name: "Coffee"},
  {id: 3, name: "Cacao"}
];
let someItems = items.filter(item => item.id < 2);
console.log(someItems.length);

let lengths = ["Tea", "Coffee", "Cacao"].map(item => item.length);
console.log(lengths);

function f(...[a, b, c]) {
  return a + b + c;
}
console.log(f(1, 2, 3))


const guests = ["Tom", "Sam", "Bob"];
console.log(...guests); 

Сравнения - нестрогое и строгое, условный оператор, оператор нулевого слияния, преобразование к логическому типу, switch
console.log( '2' > 1 ); // true, строка '2' становится числом 2
console.log( '01' == 1 ); // true, строка '01' становится числом 1
console.log( 0 === false ); // false, так как сравниваются разные типы


let stop = false, age = 23;
age > 18 ? (
    console.log("Хорошо, вы можете продолжить.")

) : (
    stop = true,
    console.log("Простите, вы ещё так юны!"))

    let count = 0;
    let text = "";
    let qty = count || 42;
    let message = text || "hi!";
    console.log(qty);     
    console.log(message); 


let str = "123";
console.log(typeof str); 

let num = Number(str); 
console.log(typeof num); 


let Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}

//6. Циклы - for, while, do while
let i = 0;
while (i < 3) {
  console.log( i );
  i++;
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let i = 0; 
for (; i < 3; i++) { 
  console.log( i ); 
}
//7. Функции - обычные, function expression, arrow functions, destructuring
function greet(who) {
  return `Hello, ${who}!`;
  }
console.log(greet('name'))

button.addEventListener('click', function(event) {
  console.log('button is clicked!')
});


let elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map((element) => {
  return element.length;
}); 
elements.map(element => element.length); 

//Импорт и экспорт - named export & import, export & import as, default export & import
const router = require('express').Router();
module.exports = router;

const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');
