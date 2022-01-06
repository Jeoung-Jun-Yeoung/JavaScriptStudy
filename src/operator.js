console.log("jun" + "babo");
console.log("1" + 2);

// 문자열 붙이기에서 문자 + 숫자는 숫자가 문자로 치환되어 연산된다.

const price = 20000;

console.log(`치킨가격은 ${price} 원 입니다.`);

// 템플릿 리터럴. 백틱 기호를 사용하면 + 로 붙이지 않고 표현 할 수 있다. 백틱 기호 입력은 ₩를 누르면 된다.
// mac 기준 영어자판일때만 백틱기호가 입력되는데, 한글일때도 백틱기호를 사용하고 싶으면 option + ₩ 를 누르면 된다.

console.log(2 + 1);
console.log(4 - 1);
console.log(2 * 3);
console.log(4 / 2);
console.log(10 % 3);
console.log(10 ** 2); // ** 는 제곱연산

// 기본 사칙연산도 가능하다.

//증감연산자

let count = 1;
const preIncrement = ++count;

// count = count + 1
// const preIncrement = count 와 같은 코드이다. 하지만 증감연산자를 활용하면 더 간단히 표현할 수 있다.
console.log(`count : ${count} preIncrement : ${preIncrement}`);

count = 1;
const postIncrement = count++;

console.log(`count : ${count} postIncrement : ${postIncrement}`);

// const preIncrement = count
// count = count + 1 와 같은 코드이다. 하지만 증감연산자를 활용하면 더 간단히 표현할 수 있다.
// 증감연산자가 어디에 붙느냐에 따라 코드 진행순서가 달라진다. 이경우에는 먼저 count를 postIncrement에 할당하고 1을 증가시킨다.

//대입연산자

const shirtPrice = 10000;
const shosePrice = 20000;
const memberSale = 5000;
let totalPrice = 0;

totalPrice += shirtPrice;
console.log(totalPrice);

totalPrice += shosePrice;
console.log(totalPrice);
totalPrice -= memberSale;
console.log(totalPrice);

//비교연산자

console.log(1 < 2);
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 <= 2);
console.log(1 == 2);
console.log(1 != 2);

// data끼리 비교를 하고 boolean을 결과로 리턴한다.

//논리연산자

let isOnsale = true;
let isDiscountItem = true;
console.log(isOnsale && isDiscountItem);
// true && true 트루 리턴
console.log(isOnsale || isDiscountItem);
// 트루 or 트루 트루 리턴

isOnsale = false;
console.log(isOnsale && isDiscountItem);
// true && fale false 리턴
console.log(isOnsale || isDiscountItem);
// 하나는 트루니까 트루리턴

isDiscountItem = false;
console.log(isOnsale && isDiscountItem);
console.log(isOnsale || isDiscountItem);

console.log(!isOnsale);
// !는 not(부정)의 의미 즉 !를 붙이면 반대값을 리턴한다.
console.log("일치연산자");
//일치 연산자
console.log(1 === 1);
console.log(1 === 2);
console.log("javascript" === "javascript");
console.log("Javascript" === "javascript");
console.log("Javascript" == "javascript");

// ===는 엄격한 일치 연산자. 값과 data타입이 모두 일치해야 같다. 보통의 비교연산자 ==는 약한 비교연산자
// data타입이 일치하지 않더라도 값이 일치하면 일치한다고 판단.

// ==와 ===차이 비교

console.log(1 === "1"); // false
console.log(1 == "1"); // true

// 임의의 물건 2개 가격을 정하고 20프로 할인한 가격을 출력해보기. 템플릿리터럴 사용해보기. 이때
// 템플릿 리터럴에도 연산자가 들어갈수있음을 확인해보기.
const Aprice = 100000;
const Bprice = 400000;

const ToTalPrince = Aprice + Bprice;

console.log(`총 ${ToTalPrince * 0.8} 원 입니다.`);
