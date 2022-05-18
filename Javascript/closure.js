function outer(param){
    // param 을 넣고 말고는 중요한게 아님!!! 나중에 Inner함수 실행시
    // outerParam을 불러올 수 있다는 점이 중요하다.
    const outerParam = `This is how ${param} works!`;

    function inner()  {
    //outer함수의 스코프를 inner함수가 기억하고 있어서 outerParam을 호출할 수 있다.
        console.log(outerParam);
    }

    //outer 함수는 inner함수를 리턴해준다.
    return inner;
}
// outer 함수 실행이 끝나면 outer함수 내부 변수 outerParam은 함수 내부에서 선언이 되었기떄문에 더이상 호출하지 못해야 하지만
// outer함수 내부에 선언된 inner함수는 함수가 생성된 렉시컬 환경을 기억하고 있기때문에 outer 내부에서 생성된 비공개 변수 outerParam 호출이 가능하게 됌.

const closure = outer('CLOSURE');
//outer함수 실행결과로 inner함수를 받아 closure변수에 할당

closure();
