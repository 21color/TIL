// 구조 분해 할당 ! Desturcturing Assignment 
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits = ['🍓', '🥝', '🍑', '🥑'];
const [first, second, ...others] = fruits;
// 디스트럭처링을 이용하면 배열 안에서도 조금 더 의미있는 이름을 지어줄 수 있다. 
console.log(first);
console.log(second);
console.log(others);

const point = [ 1, 2 ];
const [x, y, z=0] = point; 
console.log(x);
console.log(y);
console.log(z);
console.log(point);

const createEmoji = ( ) => {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };

const display = ({ name, age, job }) => {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}

display(ellie)
// 가져서 분해할당 !! ! 

let a, b, rest; 

[a, b] = [10, 20];
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log([a, b], rest);

({ a, b } = { a: 10, b: 20 });

console.log(a);
console.log(b);

// finished proposal 

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});

console.log(a);
console.log(b);
console.log(rest);

const xi = [1, 2, 3, 4, 5]; 

const [ yi, zi, ...zz ] = xi;

console.log(yi);
console.log(zi);
console.log(zz);

// Array destructuring 
// Basic variable assignment 

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;

console.log(red); // one 
console.log(yellow); // two
console.log(green); // three

console.log(foo); // [ 'one', 'two', 'three' ]

// Assignment separate from declaration 

let a2, b2;

[a2, b2] = [1, '2'];
console.log(a2); // 1
console.log(b2); // '2' 

const examarr = [1, 2, 3]; 

const [one, two, three] = examarr;

console.log(examarr); // [1, 2, 3]
console.log(one, two, three); // 1 2 3 

console.clear()
let x1, y1, z1 ; 

[x1, y1] = [1, 2];
console.log(x1, y1); // 1 2 

[x1, y1] = [1];
console.log(x1, y1); // 1 undefined

[x1, y1] = [ 1, 2, 3 ];
console.log(x1, y1); // 1, 2

[x1, , z1] = [1, 2, 3];
console.log(x1, z1); // 1, 3
// 

[x1, ...y1] = [1,3,4,5,6,7,8];
console.log(x1, y1);
//왼쪽의 변수 리스트와 오른쪽의 배열은 배열의 인덱스를 기준으로 할당된다. 

console.clear();

// Date 객체의 Instance 
const today = new Date(); // 2022-05-27T07:51:05.596Z

//today의 10까지 반환 
const formattedDate = today.toISOString().substring(0, 10); // 2022-05-27

// - 빼주기 
const [ year, month, day ] = formattedDate.split('-');

console.log([year, month, day]); // [ '2022', '05', '27' ]
console.log(formattedDate);

// ES6 Object Destructuring 
const obj = { firstName: 'Hana', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName 이 선언되고 obj(initializer(초기화자)) 가 Destructuring되어 할당된다.h(v => console.log(v));

const { lastName, firstName } = obj; 

console.log(firstName, lastName); // Hana Lee 

// 객체 디스트럭처링을 위해서는 할당 연산자 왼쪽에 객체 형태의 변수리스트가 필요. 

// 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당 
// 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당 

const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };

console.log(p1, p2);
console.log({prop1: p1, prop2: p2}); 

// 아래는 위의 축약형 

const { prop1, prop2 } = { prop1: 'a', prop2: 'b' }; 
console.log({prop1, prop2});

// default value 

const { prop3, prop4, prop5 = 'c' } = { prop3: 'a', prop4: 'b' };
console.log({prop3, prop4, prop5}); 
console.clear() 

// 객체 디스트럭처링은 객체에서 프로퍼티 이름으로 필요한 프로퍼티 값만을 추출할 수 있다.

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'JS', completed: false },
]

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다. 
const completedTodos = todos.filter(({ completed }) => completed )
console.log(completedTodos);

// Array.prototype.filter 메소드의 콜백 함수는 대상 배열을 순회하며 첫 번째 인자로 대상 
// 배열의 요소를 받는다. 이때 필요한 프로퍼티만을 추출 할 수 있다.

const person = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul'
  }
}

const { address: { city } } = person;
console.log(city);

const prop = {
  name: 'Button',
  style: {
    size: 20,
    color: 'black'
  },
}

const changeColor = ({ style: { color }}) => {
  console.log(color);
}
changeColor(prop)