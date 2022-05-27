// Map ! 
// [키, 값] 으로 이루어진 자료구조 ( keys, values )

// 키는 유일해야하며 값은 중복이 가능. 순서는 상관 xxxxx
// js 에서는 Object 와 Map 이 유사... ! 

const map = new Map([
  ['key1', '🥝'],
  ['key2', '🍓'],
]);
// 사이즈 확인
console.log(map.size); 

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key2'));
// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//찾기 
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

//추가
map.set('key3', '🥝');
console.log(map);

//전부 삭제
map.clear()
console.log(map);
console.clear()

// object와 차이점 ?

const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const object_1 = {
  [key]: milk, 
};
console.log(object_1); 

const map2 = new Map([[key, milk]]);
console.log(map2);
// 대부분 동일하지만 사용가능한 interface가 다르다. 

console.log(object_1[milk]); // object는 이렇게 키에 직접 접근 가능
//하지만! Map은 불가능하다ㅡ
console.log(map2.get(key)); //이렇게 키를 받아와서 써야함.






