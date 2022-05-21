// Higher-Order Function

// 순수함수? -> 함수 내부에서 외부를 건들이지않음 중요키워드 불 변 성

const sports = ['🏓', '⚽', '⚾️', '🧘‍♀️'];

//forEach
sports.forEach( value => console.log(value) )

// 조건에 맞는(콜백함수) 아이템을 찾을 때 

// 조건에 맞는 콜백함수 아이템을 찾을때 
//find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍒' , price: 200 }
const item2 = { name: '🥑' , price: 1000 }
const item3 = { name: '🍑' , price: 400 }
const itemarray = [item1, item2, item3, item1];
let findarray = itemarray.find(value => value.name === '🍒' );
console.log(findarray); 

findarray = itemarray.findIndex(value => value.name === '🥑');
console.log(findarray); // 1
//findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환

// 배열의 아이템들이 부분적으로 조건에 맞는지 확인 (하나라도)
findarray = itemarray.some(item => item.name === '🍒') 
console.log(findarray); //true

// 배열의 아이템들이 전부~~ 맞는지 확인 
findarray = itemarray.every(item => item.price === 200) 
console.log(findarray); //false

// 조건에 맞는 모든~ 아이템들을 새로운 배열로 반환
findarray = itemarray.filter(item => item.name === '🍒')
console.log(findarray);
