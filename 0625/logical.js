 // Logical Operator 

 // && 그리고 
 // || 또는 
 // 단축평가 : short-circuit evaluation  !! ! 

const obj1 = { name: 'dog' };
const obj2 = { name: 'cat', owner: 'hana' };

obj1 || obj2 ? console.log('ture!') : console.log('false!')

// 조건문 밖에서는 ? && -> 마지막평가 할당
// || -> 처음 발견된 true 값 할당
let result = obj1 || obj2;
console.log(result)

// 활용예 
// && -> 조건이 truthy 일때 , 무언가를 해야할 경우? 
// || -> 조건이 falshy 일때, 무언가를 해야 할 경우 ? 

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어')
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어')
  }
  animal.owner = '새로운주인!';
}

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);

console.log(obj1)
console.log(obj2);
console.clear()

// null 또는 undefined인 경우를 확인할때
let item = { price : 3 }
const price =  item && item.price; 
console.log(price);

// 기본값을 설정
// default parame ? 전달하지않거나 undefined 설정
// || 값이 falshy 한 경우 할당 : 0, -0, null, undefiemd 
function print(message) {
  const text = message || 'Hello'; 
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
 



