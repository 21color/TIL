// Array?  index 중요 중복 가능
//  Set ? 집합체 ! 세트 ! 순서 상관없음, 하지만 중복 불가
// 그냥 하나의 집합체! iterable 가능

const set = new Set([1, 2, 3]);
console.log(set);

console.log(set.size);
console.log(set.has(2)); // 있는지 확인 

set.forEach((item) => console.log(item));
for ( const value of set.values() ) {
  console.log(value);
}
console.clear()
// 추가 

set.add(6)
console.log(set);
set.add(4)
console.log(set)
// set은 중복 추가가 안된다.

set.delete(6)
console.log(set);
set.clear()
console.log(set);

//오브젝트 세트
const obj1 = { name: '🍒', price: 8 };
const obj2 = { name: '🍑', price: 5 };
const objs = new Set([obj1, obj2])
console.log(objs);

// 퀴즈 

obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈

const obj3 = { name: '🍑', price: 5 };
objs.add(obj3);
console.log(objs);
// 오브젝트가 만들어지면 힙에 쌓이고. . 새로운 주소를 가지게된다. 
// 같은 값이라도 같은 객체가 아니다! 

 