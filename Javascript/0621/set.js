// Set 

const set = new Set([2, 3 ,1]);

console.log(set.has(3));

set.forEach(item => console.log(item));

set.add(10);
console.log(set);
//set.add(3) //Error (중복 안됌)

set.delete(3);
set.add(3); //가능

set.clear(); //전부삭제

console.log(set) // set(0) {}

