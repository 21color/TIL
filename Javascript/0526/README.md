## Iteration protocols 
  ### 이터레이션 프로토콜? 
  > 순회가 가능한! 
  > for...of spread 반복, 순회, 구격, 약속, 인터페이스... 

  순회가 가능하기위해 따라야하는 규칙..인터페이스 같은것인데... 규격을 따르면 for...of 나 spread를 이용할 수 있다. 

  Array, String, Map, Set 

  ==>순회하고싶은 순회가 되는것을 하려면 ? 
```js
{
  [Symbol.iterator](): Iterator 프로토콜 을 반환하면...? 반복자? 를 리턴하는 객체가 만들어진다면 
} 
```