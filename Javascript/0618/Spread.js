// Spread 연산자... ㅠ헷갈려서 다시한번 정리 
// 전개연산자 

// 모든 Iterable은 Spread 될 수 있다.
// 순회 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다.


function add (a, b, c) {
  return a + b + c; 
}

const nums = [1, 2, 3];
console.log(add(...nums));

//rest parameters 
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(3,2,1,3,3,3,3,3,1,3);

console.clear()
//Array Concat
const array1 = ['✨', '🧘‍♀️'];
const array2 = ['🏓', '❁'];

let arrays = [...array1,'😶', ...array2];
console.log(arrays) //great ! 

//Object 

const hana = { name: 'Hana lee', age: 20 , home: { address : 'home'} };
const update = {
  ...hana, 
  height : 163, 
  job : 'engineer'
};



