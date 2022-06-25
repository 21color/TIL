// 일단 비동기부터 
console.log('Hello');

setTimeout(()=> {
  console.log('bye');
}, 0);
console.log('Hello Again');

function getData() {
  return new Promise(function(resolve, reject) {
    let data = 100;
    resolve(data);
  });
}
getData().then(function(resolvedData){
  console.log(resolvedData);
})