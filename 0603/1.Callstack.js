'use strict';

// JavaScript is synchronus.
// Excute the code block by orger after hoisting.
// hoisting: ver, function declaration

console.log(1);
setTimeout(()=>{
  console.log('비동기지롱');
},2000)
console.log(3);
console.log(4);

//Synchronous callback 
function printImmdiately(print) {
  print();
} // 함수의 선언은 hoisting ! 
printImmdiately(()=> console.log('hello'));

//Asynchronus callback 
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
  }
printWithDelay(()=> console.log('async callback'),3000);
console.clear()

// callback hell example 

class UserStorage {
  loginUser(id, password, onSucces, onError){
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy') 
      ) {
        onSucces(id);
      } else {
        onError(new Error('not found'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage()
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(id, password, 
  user => {UserStorage.getRoles(user, (userWithRole)=>{

  })}, 
  error => {}
)