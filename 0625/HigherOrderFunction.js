const map = new Map([
  ['key1', 'apple'],
  ['key2', 'banana'],
]);

console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));
//순회
map.forEach((value, key) => console.log(key, value));
//찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3'));
//추가
map.set('key4', 'kiew');
console.log(map);
//삭제
map.delete('key2')
//전부삭제 
map.clear()
console.log(map);