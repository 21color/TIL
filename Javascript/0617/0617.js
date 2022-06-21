// what about higher order function ?  
// 고차함수라고 부른다 👀 반복문을 크게 줄일 수 있음 

//map 
let array = [1, 2, 3]
let res = array.map(item => item % 2);
console.log(res);
// maping! 배열을 새로운 배열 (return값으로 반환)

res = array.filter(item => item % 2);
console.log(res); //item중에 조건에 해당하는 녀석들 반환 

res = array.reduce((acc, cur)=> acc + cur, 0);
console.log(res);
//배열을 계산해주는 함수! reduce 




