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
console.clear()

let square = (x) => x * x;
let pythagoras = ( width, height ) => {
  return Math.sqrt(width * width + height * height);
}
console.log(pythagoras(3,4));

square = (width, height, hypotenuse) => {
  width * width + height * height == hypotenuse * hypotenuse ? console.log(true) : console.log(false);
}
// 위의 경우에 원하지 않는 결과가 발생할 수 있으므로 내부함수 이용 

pythagoras = (width, height) => {
  square = (x) => x * x;
  console.log(square(9));
  return Math.sqrt(square(width) + square(height))
}
console.log(pythagoras(200, 300)); 

// 자기 실행함수 

(function (a) {
  a < 3 ? console.log('💛') : console.log('💗');
})(10);

// 콜백함수  => 매개변수로 전달하는 함수 !~ 

//함수를 매개변수로 받아 해당 함수를 10번 호출하는 함수!

const callTenTimes =(callback)=> {
  let i = 0;
  while( i < 10 ) {
    callback()
    i++;
  }
}
const callback = function() {
  console.log('this is callback!');
}

callTenTimes(callback);

