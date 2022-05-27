// Spread 연산자 ( 전개연산자 )
// 모든 Interable은 Spread 될 수 있다.
// 순회 가능한 모든것들은 촤라ㅡ르륵 펼쳐질 수 있다.
// function(...iterable)
//[...iterable]
// {...obj}
// EcmaScript 2018 == > 최신은 바벨을 써야할 수 있다.

add = (a, b , c) => {
  return a + b + c
}

const nums = [ 1, 2, 3 ];

console.log(add(...nums));

const sum = ( first, second, ...nums ) => {
  console.log(first, second, nums);
}

sum(1, 2, 0 , 2, 3, 1);

// Array Concat 대신 spread! 
const fruits1 = ['🍑', '🥝'];
const fruits2 = ['🍓', '🍒'];

let arr = [...fruits1, '🍓',...fruits2]
console.log(arr);

// obeject! 

const ellie = { name : 'Ellie' , age: 20, home: { address: 'home' } };
const updated = { ...ellie, job: 's/w enginner', };

console.log(ellie);
console.log(updated);

// Syntax 

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a);
console.clear() 

const array = [ 'apple', 'peach' ];

array.push.apply(array, [ 'orange', 'banana' ]);
console.log(array); //[ 'apple', 'peach', 'orange', 'banana' ]
// 스프레드를 사용하면 조금 더 쉽게 깔아놓을 수 있당. 

array.push(...[ 'kiwhifruit', 'mango' ])
// [ 'apple', 'peach', 'orange', 'banana', 'kiwhifruit', 'mango' ]
console.log(array);

// 배열 복사는 스프레드 연산자의 가장 편리한 기능 중 하나!! 

const copyarray = array.slice(0);
const copyarray2 = [...array]
console.log(copyarray); 
console.log(copyarray2);
//copyarray , copyarray2 는 모두 [ 'apple', 'peach', 'orange', 'banana', 'kiwhifruit', 'mango' ]

//스프레드 연산자는 배열 => 새로운 배열로 복사. (얕은 복사)
//example

const myArr = [ 'Css', 'JavaScript', ['NodeJs', 'React'] ]
const myArrCopy = [ ...myArr ]
myArrCopy[2][0] = 'FrontEnd'
console.log(myArrCopy);

// 원본배열도 변경된것을 확인할 수 있다. 
console.log(myArr);

// 배열에서 중복값 제거 
// 배열의 중복값들을 set 데이터 구조와 스프레드 연산자를 통하여 제거할 수 있다. 

const uniqueArray = [...new Set(array)]
console.log(uniqueArray);

// 복수 배열 연경 
// 스프레드 연산자를 통해 여러 배열을 이어 붙여 새로운 데이터를 만들 수있다.

const arr1 = [ 'a', 'b' ];
const arr2 = [ 'c', 'd' ];
const firstarr = [...arr1, ...arr2]
console.log(firstarr);

console.clear()
// NodeList를 진짜 배열로 변환하기 
// spread 연산자를 이용하여 NodeList를 일반 배열로 변환할 수 있다.
// 그러면 forEach, map 등을 이용할 수 있게 된다. 

// 구조 분해 할당 (디스트럭쳐링!) 
// 스프레드 연산자는 종종 배열과 객체의 구조 분해 할당에 사용된다! 

const [ num0, ...others ] = [ 1, 2, 3, 4, 5, 6 ]
console.log(num0);
console.log(others);

// 객체의 구조 분해 할당

const obj = { name: 'fatfish', age: 100, luckyNumber: 6 }
const { name, ...other } = obj;
console.log(name);
console.log(other);

// 문자열을 배열로 변환하기
const myName = 'fatfish';
const nameArray = [...myName] 
console.log(nameArray);
