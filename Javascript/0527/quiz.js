const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
const items = [...new Set(fruits)];

// 위의것을 함수로 만들어보면 ? 
const removeDuplication = (array) => {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));


const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const findIntersection = (set1, set2) => {
  const array = [...set1].filter(item => set2.has(item))
  return new Set(array);
}
console.log(findIntersection(set1, set2));