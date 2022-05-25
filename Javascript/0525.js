// 함수를 리턴하는 함수! 

const returnFunction = ( ) => function (item) {
  console.log( `${item} : return function!`);
};
returnFunction()('test');

//retrunFunction() 함수 호출시 함수가 리턴되므로 한번 더 괄호를 사용해서 해당 함수 호출 
// 해당 함수 실행시 log에는 test : return function! 이 출력된다.

console.clear();

/**
 * 함수를 매개변수로 전달하는 이유?
 * 이전 절에서 살펴보았듯... 특정 함수를 여러 번 실행할 수 있음.
 * 이벤트를 배운다면 이렇게 사용하는 것이구나! 라고 이해할 수 있다. 
 * 함수를 리턴하는 함수는 어디에서 사용될까?? => " 클로저 "
*/

//클로저 Closure

//예제 전에 지역변수의 유효 범위부터 알고 넘어가자.

// function testexample(name) {
//   let output = 'Hello' + name + '...!'; 
// }
// console.log(output) 

 // ==> 함수 내부의 변수는 ' 지역 변수 ' 이기때문에 함수 외부에서 사용할 수 없다.
 // 지역 변수는 함수가 실행될 때 생성되고 종료될 때 사라지기 때문이다.


 //하지만 클로저 사용시 이 규칙을 위반할 수 있다. 
// 클로저 예제 - 1 

const test = ( name ) => 
{ let output =  `hello! ${name} ... !`;
  return function () {
    console.log(output);
  }; // 지역변수 output은 함수 test() 호출시에 생성된다.
 }


 test('JavaScript')();

 // 변수 output은 지역변수이기때문에 함수가 종료될 때 사라져야 한다.
 // 그러나 해당 변수가 이후에도 활용될 가능성이 있기때문에 자바스크립트는 변수를 제거하지않고 남겨둔다. 
 // 따라서 코드를 실행하면 output의 내용이 정상적으로 출력된다.

 /** 클로저의 정의는 워낙 다양하다. 지역 변수를 남겨두는 현상을 클로저라고 부르기도 하고
  * 함수 test() 내부의 변수들이 살아있는 것이므로 test() 함수로 생성된 공간을 클로저라고 부르기도 한다.
  * 또한 리턴ㄴ된 함수 자체를 클로저라고 부르기도 하며 살아남은 지역변수 output을 클로저라고 부르기도 한다.
  * 정의가 워낙 다양하기때문에 헷갈릴 수 있지만 클로저가 어떤것인지 감을 잡기로 하자. 
  * 추가로 지역변수 output을 남겨둔다고해서 외부에서 마음대로 사용할 수 있지는 않음.
  * 반드시 리턴된 클로저 함수를 사용해야 지역 변수 output을 사용할 수 있다. 
  * 클로저 함수로 인하여 남은 지역 변수는 클로저 함수 각각의 고유 변수이다. 
  */

// closure2 
console.clear()


const closureTest = ( name ) => {
  const output = `Hello ${name} ... !`; 
  return function () {
    console.log(output);
  }
}

const test_1 = closureTest('Web')
const test_2 = closureTest('Javascript');

test_1();
test_2();

// 함수 test_1(), test_2() 호출시에 각 함수가 고유한 지역변수 output이 있다는 것을 알 수 있다.

// 자바스크립트 내장 함수에대해 알아보장 
console.clear()

const URI = 'http://hanbit.co.kr?test=한글입니다.'; 

let output = '';
output += `★escape()\n`;
output += escape(URI) + '\n\n';
output += `★encodeURI()\n`;
output += encodeURI(URI) + '\n\n';
output += `★encodeURIComponent()\n`
output += encodeURIComponent(URI) + '\n\n'

console.log(output)
console.clear()

// eval(string)

//숫자 확인 함수 
// js에는 Infinity와 NaN이라는 특별한 숫자가 있다. 

const numberTest = 1 / 0; 
console.log(`numberTest : ${isFinite(numberTest)}`);

const value = -10 / 0;
value == Infinity ? console.log('Infinity 입니다.') : console.log('Infinity가 아닙니다.')

NaN == NaN ? console.log('NaN == NaN') : console.log('NaN != NaN');

isNaN(NaN) ? console.log('NaN == NaN') : console.log('NaN != NaN');

const won = '1,000원';
const dollar = ' 1.5 $ ';
console.log(Number(won) + ':' +  Number(dollar));
console.log(parseInt(won) + ':' + parseInt(dollar));
console.log(parseFloat(won) + ':' + parseFloat(dollar));

console.clear();

console.log('A');
setTimeout(()=> {
  console.log('B');
}, 0);
console.log('C');

for ( let i = 0; i < 3; i ++ ) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }

console.clear();

const array = [0, 1, 2];
array.forEach((value)=>{
  setTimeout(()=>{
    console.log(value);
  }, 0)
});

const testParam = ( a, b = 52, c = 273 ) =>
console.log(`a : ${a} b : ${b} c : ${c}`)

testParam(10)

console.clear()

const testhing = (a, b, ...numbers) => {
  console.log(numbers);
}

testhing(1, 2, 3, 4, 5, 6, 7)






