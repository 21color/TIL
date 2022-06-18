'use strict';

function countdown(n) {
  for(let i = n; i >= 0; i--) {
    console.log(i);
  }
}
// 위 함수는 매우 잘 동작되지만 ! 반복문 없이도 구현할 수 있는 방법 o 
// 재귀함수를 이용하면 된다.

function countdown2(n) {
  if ( n < 0 ) return;
  console.log(n)
  countdown2(n - 1); // 재귀호출

}
countdown2(10)
// 이렇게 자기 자신을 호출하는 재귀함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있음! 예를ㄷ르어 팩초리얼은 재귀함수로 간단하게 구현할 수 있다. 

//팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
//  n! = 1 * 2 * .... (n-1) * n
function factorial(n) {
  //탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
  if ( n <= 1 )return 1;

  //재귀 호출 
  return n * factorial(n -1); 
}
console.log(factorial(0));
console.log(factorial(10));

console.clear()

//재귀함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 쫀재하지만 무한 반복에 빠질 위험이 있고 이로 인해 스책 오버플로 에러를 발생할 수 있으므로 사용시 반드시 주의해야한다.

function factorialfor(n) {
  if (n <= 1) return 1;

  let res = n;
  while (--n) res *= n;
  return res;
}

//  ^ 팩토리얼 예제르를 반복문으로 구현한 것 

// 함수 합성. 함수의 변하지 않는 공통 로직을 미리 설정후에 경우에 따라 변경되는 로직을 추상화에서 함수 외부에서 내부로 전달 

// 외부에서 전달받은 f를 n만큼 반복 호출하는 예제 

function repeat(n, f) {
  for ( let i = 0; i < n; i++ ) {
    f(i); // i를 전달하며 f를 호출
  }
}

const logAll = function(i) {
  console.log(`이것은 logAll의 결과 : ${i}`);
}

repeat(5, logAll); // 0 1 2 3 4 

//반복 호출할 함수를 인수로 전달한다.
const logOdds = function (i) {
  if( i % 2 ) console.log(`이것은 logOdds의 결과 : ${i}`)
}

//반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1, 3 
console.clear();

// Generator는 function 뒤에 *을 붙여라! (* 는 모두~ general 하게 이용할 수 있다~ 라는 의미)

function* multipleGenerator() {
  try{
  for (let i = 0; i < 10; i++) {
    console.log(i);
    yield i ** 2;
  }
}
catch (error) {
  console.log(error);
}
}

// yield = 사용자가 원할때까지 기다려줌
// 사용하는 사람에게 제어권을 양도한다! 

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();

//
