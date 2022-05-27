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
