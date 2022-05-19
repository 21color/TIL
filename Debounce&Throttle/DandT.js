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

//다음번엔 이 방법으로 이벤트핸들링해보기!
