# Debouncing & Throttling!

## 분명 개념적으로는 아는데 막상 면접에서 물어보시니까 말하기가 어려웠다 ... 오히려 좋아 다시한번 복습!!!!

> 이벤트는 js에서 빠질 수 없는 요소. 디바운스와 쓰로틀링은 이러한 이벤트를 제어하는 방법. 과도한 이벤트의 발생이 성능 저하를 초래하지 않도록 하기 위하여 사용된다....
  - 스크롤 휠 이용 지도 확대/축소
  - 검색어 입력시에 자동완성 혹은 연관검색어 노출
  - 피드 방식의 데이터 노출 (use scroling...)

이벤트 오버클럭 리소스 사용량을 과도하게 증가시키기 때문에 성능 문제를 야기하고 사용자의 경험을 떨어뜨린다. 특히 스크롤 이벤트의 경우 이벤트 오버클럭을 발생시키기 쉬운데 이는 사용자가 스크롤을 빨리 내리면 3초의 간격 내에 몇 천번 이상의 이벤트가 발생할 수 있기 때문...



## Debounce

    동일 이벤트가 반복적으로 시행되는 경우 마지막 이벤트가 실행되고 나서 일정 시간동안 해당 이벤트가 다시 실행되지 않으면 해당 이벤트의 콜백함수를 실행한다.

  ![debounce](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlIYLA%2FbtqLuCMQ6E1%2FwamNKZqgf5nlm5iB1MoCRk%2Fimg.png)

  음..뭔말인지 쉽게 말해서! 디바운스는 이벤트를 grouping 하여 연이어 호출되는 함수들 중 마지막 함수만 호출되게 하는 기술!!!! 


## Throttle

    동일 이벤트가 반복적으로 시행되는 경우 실제 반복 주기와는 상관없이 임의로 설정한 일정 시간 간격으로 콜백함수의 실행을 보장함.

 ![throttle](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8DOo3%2FbtqLpuCzL9z%2FWiRnKCAsZcQbBrEuVwxLP1%2Fimg.png)
  일정기시간내에 한번만! 호출을 하게하는것...
    디바운스와 가장 큰 차이점이라면 정해진 시간 간격 내에 반드시 최대 한번 함수가 호출된다는것! 
  디바운스와는 달리 스로틀링은 사용자가 이벤트를 일으킨 점선 박스 시간동안 기다렸다가 가장 마지막에 호출된 이벤트를 발생시킨다. 

# Example

```js
// Debounce
// use defualt parameter

//debounce
let debounce = (callback, limit = 100) => {
	let timeout;

	return function (...args) {
		console.log(...args);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback.apply(this, args);
		}, limit);
	};
};

/** debounce
 * callback: 실행대상이 되는 콜백함수
 * limit: 얼마 후에 함수를 실행할 지 결정하며 millisecond 단위
 * limit 이내에 함수가 반복 호출될 경우에 timeout이 clearTimeout이 되므로 실행되지 않음
 * 함수의 반복 호출이 멈춰진 경우에 chearTimeout이 실행되지 않기때문에 limit 밀리초 후에 callback.apply가 실행
 * apply 메소드는 this의 범위를 지정할 수 있다.
 * 여기서 this 의 범위로 콜백 함숙사 실행될때 그 컨텐스트의 this가 배정됌.
 */

let throttle = (callback, limit = 100) => {
	let waiting = false;

	return function () {
		if (!waiting) {
			callback.apply(this, arguments);
			waiting = true;
			setTimeout(() => {
				waiting = false;
			}, limit);
		}
	};
};

/** throttle
 * callback: 실행 대상이 되는 콜백함수
 * limit: 얼마 간격으로 함수를 실행할 지 결정하며 millisecond 단위
 * wating 상태가 true인 경우에는 if문 실행이 안됌
 * 최초 함수가 호출되었을 때 waiting은 false이며 if문이 실행됌. 이때 콜백 함수를 실행한 뒤 다시 wating은 true가 된다!
 * waiting이 true가 되었을 때 limit 밀리초 후에는 waiting이 강제로 false가 되고 다시 콜백 함수가 실행됌.
 * apply 메소드는 this의 범위를 지정할 수 있음. 여기서 this의 범위로 콜백 함수가 실행될 때 그 컨텍스트의 this가 배정
 */

// 사용예시
let debouncecount = 0,
	mouseMoveCount = 0,
	mouseThrottleCount = 0;

let inputDebounce = document.querySelector('#input-debounce'),
	dispDebounce = document.querySelector('#disp-debounce'),
	disNotThrottle = document.querySelector('#disp-not-throttle'),
	dispThrottle = document.querySelector('#disp-throttle');

inputDebounce.addEventListener(
	'keyup',
	(debounce = () => {
		dispDebounce.textContent = ++debouncecount;
	}),
	100
);

window.addEventListener('mousemove', () => {
	disNotThrottle.textContent = ++mouseMoveCount;
});

window.addEventListener(
	'mousemove',
	throttle(() => {
		dispThrottle.textContent = ++mouseThrottleCount;
	}, 500)
);

```

[refernces]

 https://kellis.tistory.com/142
 
 http://yoonbumtae.com/?p=3584
