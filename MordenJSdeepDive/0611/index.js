class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello = () => {
    this.age > 19 ? console.log(`Hello! ${this.name} , 당신은 성인입니다.`) : 
    console.log(`Hello! ${this.name} , 당신은 미성년자입니다.`); 
  }
}

const person = new Person('이하나', 30)
 // 당연히 Hello! 이하나 , 당신은 성인입니다. 가 나오쥬 

//ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.

const prefix = 'prop';
let i = 0;

//객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성 
const obj = {
  [`${prefix} - ${++i}`]: 1,
  [`${prefix} - ${++i}`]: 1,
  [`${prefix} - ${++i}`]: 1
}

const object = {
  x : { 
    y : 1
  }
}

const c1 = { ...object }; 

const { add } = require('lodash');
const _= require('lodash');
const Logger = require('nodemon/lib/utils/log');

const c2 = _.cloneDeep(object);
console.log(c2.x === object.x); //false

console.clear();

const v = 1;

const c4 = v;
console.log( c4 === v );
const oj =  { x: 1 };

const c5 = oj;
console.log(c5 === oj);


//틈새 30seconds of knoewledge 

//object literal 
const persnalage = {
  name : 'jhon',
  age : 50,
  birthday() { 
   console.log(this.age++)
  }
}
persnalage.birthday(); //50
persnalage.birthday(); //51
persnalage.birthday(); //52

// constructor 

Person.prototype.birthday = () => {
  this.age ++; 
}

const person1 = new Person('jun', 20);
const person2 = new Person('sally', 21);
person1.birthday();
person2.birthday()

console.clear()

const createPerson = (name, age) => {
  const birthday = () => person.age++;
  const person = { name, age, birthday }
  return person;
}
const persons = createPerson('hana', 29);

//object.create();

const personProto = {
  birthday() {
    this.age++
  }
}
const personme = Object.create(personProto);
personme.age = 50
person.birthday();

const personNum1 = {
  name : 'Lee'
};

const personNum2 = {
  name : 'Lee'
}

console.log(personNum1 === personNum2);
console.log(personNum1.name === personNum2.name);
console.clear();

function addNumberThing (x,y,z) { 
  console.log(arguments);
  return x + y;
 
}
console.log(addNumberThing(30,2.2,30));
// arguments == 30,2.2,30 
console.clear();

function rememberparameter(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') { throw new TypeError('인수는 모두 숫자 값이어야 합니다. ')
}
return x + y;
}

function changeValue(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';
}

let num = 100;
let personss = { name : 'Lee' };

console.log(num);
console.log(personss);

(
  function() {
    let a = 3;
    let b = 5;
    return console.log(a * b);
  }
()); // Immediiately Invoked Function;

(
  function foo() {
    const a = 3;
    const b = 5;
    return console.log(a * b / 3);
  }
()); // 기명 즉실함수 

/* foo(); => foo is not defined */

console.clear();


