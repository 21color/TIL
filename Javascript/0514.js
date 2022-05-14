function sumAll () {
  let output = 0;

 for(let i = 0 ; i < arguments.length; i++ ) {
   output += arguments[i] * arguments[i]
 }
  return output;
  
}

console.log(sumAll(1,2,3,4,5,6,7,8,9))

//매개변수의 개수가 다른 경우 
//서로 다른 것을 리턴하는 함수를 어떻게 만드나용???

function thisFunction() {
  // 매개변수의 개수를 가져온다.
  let length = arguments.length;
 
  //조건을 나누어준다.

  if( length == 0 ) {
    return;
  } else if (length == 1) {
    console.log(arguments[0]);
  } else {
    console.log(arguments[0] * arguments[1])
  }
}
thisFunction(2, 8)
console.clear()
// return value 

function f(x) {
  return x * x 
}
//값을 호출한 곳으로 넘김
returnValue = f(5);
console.log(returnValue); 

//아무값도 리턴하지않는다면? 

function returnFunction() {
  return;
  console.log('test1');
  console.log('test2');
}

let output = returnFunction() ;
console.log(typeof(output) + ' : ' + output);

//return 하는 값이 없기때문에 undefined를 리턴한다.

//내부함수 