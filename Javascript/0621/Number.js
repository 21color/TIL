
// 지수 표기법 (매우 크거나 작은 숫자를 표기할때 사용! 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12323233233;
console.log(num4.toFixed()); //1234 

const num5 = num4.toString();
console.log(typeof(num5)); 

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(30));

console.log(Number.EPSILON);
if(Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.1 - 0.2 

function isEqual(original, expected) {
  return original === expected; 
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
