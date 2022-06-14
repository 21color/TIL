const add = (a, b) => a + b; 
const matrix = (a , b) => a * b;

  function calculator(func, a, b) {
    return func(a,b);
  }

  const result = () => () => {
    console.log('hello');
  }


  console.log(calculator(add, 2, 3));
  console.log(calculator(matrix, 10, 20));
  console.clear();



  const x = 'x';
  function c() {
    const y = 'y';
    console.log('c');
  }

  function a() {
    const x = 'x';
    console.log('a');
    function b() {
      const z = 'z';
      console.log('b');
      c();
      
    }
    b();
  }

  a() // a,b,c;
  c(); // c 

  //일반적으로 위->아래 왼->오 코드가 돌아감 
  