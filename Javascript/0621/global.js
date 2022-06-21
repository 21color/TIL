// globalThis ? = > 쥰내많음!
console.log(this); // in node => global object // in document => window 

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(parseFloat('12.32')) // 숫자로 변환
console.log(parseInt('12.323')); // 정수로 변환 

// URL => (URI의 하위 개념!)
// 아스키 문자로만 구성되어야 함 
// 한글이나 특수문자는 이스케이프 처리 해야 한다 

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded); // 이스케이프 처리 완!

const decoded =decodeURI(encoded);
console.log(decoded); // 다시 문자로 처리 완! 

// 전체가 아닌 부분적인건 Component 이용

const part = '드림코딩.com';
console.log(encodeURIComponent(part));

