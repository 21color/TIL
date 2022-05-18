 /** 객체를 만드는 템플릿 
  * 객체를 손쉽게 만드는~ 
  * 
 **/

 //기본문법 
 class Fruit {
   // 클래스를 통해서 만드는 객체에 필요한!
   // 속성들을 consteructor 라고 지칭 
   // 생성자: new 키워드로 객체를 생성할때 호출되는 함수 
   constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
   }

   display = () => {
    console.log(`${this.name}: ${this.emoji}`)
   };
 }

 // fruit 는 Fruit의 인스턴스이다!
 
const fruit = new Fruit('banana', '🍌')
console.log(fruit.emoji)
console.log(fruit.name)
console.log(fruit)
console.log(Fruit)
fruit.display()
