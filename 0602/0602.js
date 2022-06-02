let mymoney = 60000;
let mymymoney = 0;

function resultmoney (money) {
  if (money <= 50000) {
    return mymoney = money * 1.15 * 1.15;
  } else if ( money >= 50000) {
    return mymoney = money * 1.20 * 1.20;
  }
}

console.log(resultmoney(mymoney))

function coffee (first) {
  let second = first * 2/3;
  let third = second * 2/3;  
  return first + second + third;
}
console.log(coffee(360));

