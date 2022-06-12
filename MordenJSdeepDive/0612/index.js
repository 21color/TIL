// reducedFilter 

const reducedFilter = ( data, keys, fn ) => 
  data.filter(fn).map(el => 
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
    );

    const data = [
      {
        id : 1,
        name : 'John',
        age : 26
      },
      {
        id : 2,
        name : 'mike',
        age : 50
      }
    ];

   console.log(reducedFilter(data, ['id', 'name'], item => item.age > 24));

   // age가 24보다 큰 key, value만 출력해주는 

   /* 조건을 기준으로 object array 를 fillering and... 지정되지 않은
   키를 필터링한다.

   Array.protype을 사용한다. 
   filter는 조건이 truth 값을 반환한 개체를 반환하도록 접두사 fn을 기준으로 배열을 필터링한다.

   필터링된 배열에서 Array.protype.map()을 사용하여 
   Array.protype.reduce()를 사용하여 새 개체를 반환하고 Keys 인수로 제공되지 않은 키를 필터링한다. 
   */