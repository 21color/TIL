// 이터레이션?? Iteration 
/** == 반복. 순회하다. 
 * 순회가 가능하다. ! 
 */

const array = [ 1 , 2 , 3 ] 

for ( const item of array ) {
  console.log(item);
}

// 배별 안의 요소들을 순회해서 하나하나씩 할당

const obj = { 0: 1, 1: 2 } 
for( const objitem in obj ) {
  console.log(objitem);
}
//객체는 이터러블 하지않기떄문에 for of 반복문 사용 불가. for in 가능 
// for in  ==> key를 출력 

const iterator = array.values();
while (true) {
  const item = iterator.next()
  if (item.done) break;
  console.log(item.value); 
}
const multiple = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(const num of multiple ){
  console.log(num * 2);
}

//solution 

const multiple_2 = {
  // iterator 호출시 object 반환.... 
  [Symbol.iterator] () {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done : num > max }; 
      },
    };
  },
};

for (const num of multiple_2) {
  console.log(num);
}