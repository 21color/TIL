// generator ?? 

// generator함수 작성시에는 function* <= * 을 붙여준다. 
function* multipleGenerator() {
  for( let i = 0; i < 10 ; i++ ) {
    console.log(i); //0
    yield i ** 2;
  }
}

const multiple = multipleGenerator();

let next = multiple.next();
console.log(next.value, next.done);