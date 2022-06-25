// Symbol 심벌
// 유일한 키를 생성할 수 있음! 

const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key');
const key2 = Symbol('key');
// 심볼로 하면 유일한키를 만들게됌!!! 보이는건 같아도 다른녀석이 되는것 
map.set(key1, 'Hello');
map.get(key2);
console.log(map.get(key2));
console.log(key1 === key2);

//동일한 이름으로 하나의 키를 사용하고 싶다면 symbol.for
//전역 심벌 레지스트리 (Global Symbol Registry) 

const k1 = Symbol.for('key');
const k2 = Symbol.for('key');

map.set(k1, 'Symbol');
map.get(k2)
console.log(map.get(k2))
console.log(k1 === k2)

const obj = {[k1]: 'Hello', [Symbol('key')] : 1};
console.log(obj);

// 동일한 이름으로 하나의 키를 사용하고싶다면 Symbol.for 
// 전역 심벌 레지스트리 (Global Symbol Registry) 

console.clear()

// User-defined Async Iterables

const myAsyncIterable = {
  async* [Symbol.asyncIterator]() {
    yield 'hello';
    yield 'async';
    yield 'iteration!';
  }
};
// this yield* ? 

function* func1() {
  yield 42;
}

function* func2() {
  yield* func1();
}

const iterator = func2();
console.log(iterator.next().value);


(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
  }
})();

