// for of 반복문은 for in과 다르게 반복 변수에 '요소'가 들어간다.

// for in 반복문 (반복 변수에 인덱스가 들어감)

const array = [1, 2, 3, 4];

for (let item in array ) {
  console.log(`${item} 번째 요소는 ${array[item]} 입니다.`);
}

// for of 반복문 (반복 변수에 요소가 들어감)

for (const element of [1, 2, 3, 4]) {
  console.log(`요소는 ${element} 입니다.`)
}

// 그렇다면 for of 반복문에서 현재 몇 번을 반복했는지는 어떻게 알까? 
// 알 수 없음. 따로 변수를 만들어 확인해야 함.

let i = 0;
for ( const element of [1, 2, 3, 4]) {
  console.log(`${i}번째 요소는 ${element} 입니다.`);
  i++; 
} 

//매개변수와 리턴값 

// return ? 
const fun = (x) => x * x;
console.log(fun(3)) 

// arguments 객체를 사용한 가변 인자 함수 

function sumAll() {
  let output = 0 ;
  for ( let i = 0; i < arguments.length; i++ ) {
    output += arguments[i];
  }

  return output;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Array()함수처럼 함수의 매개변수 개수가 다를 때는 서로 다른 것을 리턴하는 함수를 어떻게 만드나요? 

function thisisfunction() {
  let length = arguments.length;
  if ( length == 0 ) {
    console.log(`hi ${length}`);
  }
  else if ( length == 1 ) {
    console.log(`hey ${length}`) 
  } else {
    console.log('buy')
  }
}

thisisfunction(2, 3)

// 이제 리턴값을 살펴보자면 ~ 
// return 은 함수를 호출한 곳으로 return 값을 넘긴다. 

function func(x) { return x * x; }
let returnvalue = func(5)
console.log(returnvalue)

// 원래 return 이란 함수가 실행되는 도중에 함수를 호출한 곳으로 돌아가라는 의미.
// 따라서 return 키워드를 사용하면 값을 지정하지 않아도 함수를 호출한 곳으로 돌아감.

const returnFunction = ( ) => {
  console.log('문장 A');
  return;
  console.log('문장 B');
}

returnFunction(); //문장 a 다음 return 문이 들어왔으니 b는 호출이 안됌

console.clear()


// return 뒤 값을 입력하지 않을 경우 
const returnFunctionTwo = ( ) => {
  return; 
  console.log('문장 A')
  console.log('문장 B')
}
// 함수  호출
let output = returnFunctionTwo()
console.log(`${typeof(output)} : ${output}`); 
//아무것도 return 되지 않았기때문에 undefind

// 콜백함수 
/** 자바스크립트에서는 함수도 하나의 자료형(object) 이기떄문에 매개변수로 전달 가능. 
 * 이렇게 매개변수로 전달하는 함수를 콜백함수라고 함.
 * 마로 아래 callTenTimes() 함수는 함수를 매개변수로 받아 해당 함수를 10번 호출하는 함수
 */

const callTenTimes = ( callback ) => {
  for ( let i = 0; i < 10; i++ ) {
    callback();
  }
}

const callback = function () {
  console.log('나는 콜백함수야❁') 
}
callTenTimes(callback)
//callback이 10번 호출됌. 무섭군 

console.clear()
