# 자바스크립트 문법 공부

간단하게 자바스크립트문법을 공부하면서 내용을 정리해 보았습니다. 여러군데 흩어져있던 자료들중에서 보기 좋은 내용들만 따로 추려 정리해봅니다. src/ 하위 file은 example입니다. 설명을 그때 그때 적어서 존댓말과 반말이 섞여있습니다.

### 1.필수프로그램 설치

본 스터디는 Chrome의 개발자 모드(f12)를 통해 console창에서 진행해도 무방합니다.
그러나 기본적으로 vs코드에서 진행하는것을 추천합니다.
<br>
vscode에서 진행을 하기 위해서는 node.js를 설치합니다.

#### node.js 설치 이유?

> node.js는 자바스크립트 언어의 문법에 맞게 코딩을 했을때 컴퓨터가 해석해서 처리할 수 있도록 도와주는 일종의 번역기 역할을 수행합니다. 이를 통해 웹브라우저가 아닌곳에서도 자바스크립트 코드의 실행과 결과확인을 할 수 있습니다.

[node.js 설치하러 가기] https://nodejs.org/en/

일반적으로 안정화된 버전인 LTS버전의 설치를 권장합니다.

-------------------

추가적으로 mac os이용자라면 brew를 이용해 설치하면 편리하게 설치할수있습니다.

[brew설치하러가기] https://brew.sh/index_ko


### 1.1 hello world src/hello.js

실습 폴더를 만들어 주고, vscode에서 해당 폴더를 오픈합니다. 이후 해당 폴더에 새로운 파일을 만드는데 확장자를 '원하는파일이름.js'로 저장합니다. 중요한점은 확장자를 (".js")로 해야 합니다.

이후 code를 작성합니다.

<pre><code>console.log("hello world!");</code></pre>

이후 코드를 저장합니다. (ctrl + s or 상단의 File - Save 클릭)

그리고 vscode에서 터미널을 실행(Terminal - New Terminal을 클릭)하고 파일이 위치한 경로로 이동(cd "이동경로")합니다.

이후,
<br>

    node "js파일명"

<br>
명령어를 입력한 후 엔터를 누르면 코드가 실행됩니다.

<br>
<br>
터미널에 hello world!가 출력됨을 확인합니다.
<br>
<br>
첫 js코드를 작성하고 실행했습니다.

### 1.3 변수 src/value.js

자바스크립트에서는 변수를 선언할때는 let이라는 키워드를 사용합니다.

<pre><code>let 변수이름 = 값</code></pre>

이를 '변수유형 변수이름을 선언하고 해당 변수에 "값"을 할당했다고 합니다.'
<br>


<pre><code>
let name = 'jeoung jun yeoung'; // let유형의 name 변수에 jeoung jun yeoung 문자열 값을 할당한다.
console.log(name); // name의 값을 출력한다.

name = 'junmato'; // 이미 선언했던 name변수에 "junmato"값을 재할당한다.
console.log(name); // 변수 name값 "junmato"를 출력
</code></pre>

> 변수란 무엇인가?
>
> > 보통 프로그래밍 세계에서는 값(data)을 저장하고 사용하기 위해 변수를 사용한다. 변수는 데이터를 가르키는 이름이라고 할 수 있다. 이를 통해 데이터가 의미하는 바를 정확하게 하고, 재사용도 가능하다.

자바스크립트에는 const라는 변수유형도 존재합니다. const는 let과 달리 재할당할 필요가 없는 경우 사용합니다. 해당 변수가 고정된 값을 계속 갖고 있고, 재할당을 하려고 하면 오류가 발생합니다.

<code><pre>
const name = 'jun yeong';
name = 'junmato';
</code></pre>
다음과 같은 코드에서는 에러가 발생한다. const변수에 값을 재 할당 해주었기 때문이다.

> 추가적으로 var라는 변수유형도 존재한다. 두개의 유형과의 차이점은 let과 const는 block단위로 변수의 유효범위가 지정되지만 var는 함수단위로 지정된다는 것이다. scope의 대한 내용은 추후에 공부하자.

### 1.4 데이터 타입 src/dataType.js

자바스크립트에는 여러 종류의 데이터타입이 존재한다. 그중 원시형타입은 number,string,boolean,null,undefined가 있다.

1. number (숫자형)

숫자데이터는 숫자형이다. 다양한 종류의 데이터를 숫자로 표현 할 수 있다.

<code><pre>
console.log(100);
const age = 25;
let weight = 70;
console.log(age);
console.log(weight);
</code></pre>

2. string (문자열)

문자열 데이터는 ("문자열데이터")와 같은 이중따옴표나 ('문자열데이터')작은 따옴표로 데이터를 감싸야 한다.
<code><pre>
const firstName = "jeong ";
const middleName = "jun ";
const lastName = "yeoung";
console.log(firstName + middleName + lastName);
</code></pre>

3. boolean (불리언)

참과 거짓을 나타내는 true/false를 표현하는 데이터. 

<code><pre>
let temp = null;
let unDefine;
console.log(temp);
console.log(unDefine);
</code></pre>

4. null, undefined 

null은 비어있는 값을 의미한다. undefined는 변수를 선언만 하고 값은 할당하지 않은 것을 말한다.

<code><pre>
let a = null;
console.log(a)
let b;
console.log(b)
</code></pre>

### 1.5 연산자 src/operator.js

- 문자열 붙이기
    * '+'를 사용해서 문자열을 이어 붙일수있다.
    추가로 문자열과 숫자를 이어붙이면 "묵시적형변환"으로 숫자가 문자열로 변환되어 붙여진다.

    <code><pre>console.log("jun" + "babo");
    console.log("1" + 2);
    // 문자열 붙이기에서 문자 + 숫자는 숫자가 문자로 치환되어 연산된다.
    </code></pre>

    
    * template Literals (템플릿 리터럴)
    `(백틱)기호를 사용하여 문자열 data를 나타낼 수 있다. 출력시 문자열을 따옴표로 표현하는것 보다 간단하게 문자열 붙이기가 가능하다.

    <code><pre>
    const price = 20000;
    console.log(`치킨가격은 ${price} 원 입니다.`);
    // 템플릿 리터럴. 백틱 기호를 사용하면 + 로 붙이지 않고 표현 할 수 있다. 백틱 기호 입력은 ₩를 누르면 된다.
    // mac 기준 영어자판일때만 백틱기호가 입력되는데, 한글일때도 백틱기호를 사용하고 싶으면 option + ₩ 를 누르면 된다.
    </code></pre>

- 산술연산자
    * 숫자 data에 대한 연산. 사칙연산뿐만 아니라 //와 **(거듭제곱)연산도 지원.

    <code><pre> 
    console.log(2 + 1);
    console.log(4 - 1);
    console.log(2 * 3);
    console.log(4 / 2);
    console.log(10 % 3);
    console.log(10 ** 2); // ** 는 제곱연산
    </code></pre>

- 증감연산자
    * 자신의 값을 증가시키거나 혹은 감소시키는 연산자. 해당 연산자를 앞에 두냐, 뒤에 두냐에 따른 차이점이 있다.
    <br>
    1. 증감연산자를 앞에 두는 경우

    <code><pre> 
    let count = 1;
    const preIncrement = ++count;
    </code></pre>

    먼저 자기 자신에게 1을 더한후 재 할당한다. 이후에 다시 preIncrement에 할당했다는 의미다.
    <br>
    
    2. 증감연산자를 뒤에 두는 경우

    <code><pre> 
    let count = 1;
    const preIncrement = count++;
    </code></pre>

    preIncrement에 자기 자신의 값을 먼저 할당한다. 이후 1을 더해서 재할당한다는 의미다.

- 대입연산자
    * 대입연산자는 변수에 어떤 값을 할당할때 사용한다. 가장 기본적인 의미다. 추가적으로 사칙연산과의 조합으로 대입과 연산을 동시에 수행할수도 있다.

    <code><pre>
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
    </code></pre>
    
- 비교연산자
    * 값을 비교하는 연산자다. 해당 연산자를 통해 값을 얻을 수 있는데 해당 값이 바로 boolean값이다.
    
    <code><pre>
    console.log(1 < 2);
    console.log(1 > 2);
    console.log(1 >= 2);
    console.log(1 <= 2);
    console.log(1 == 2);
    console.log(1 != 2);
    </code></pre>

- 논리연산자
    * &&(and), !(not), ||(or) 연산자를 말한다. 조건문과의 조합으로 많이 사용하며 연산대상의 결과값의 따라 전체 boolean값이 정해진다.
    <br>
    > || 연산 대상중 하나만 true면 true리턴
        && 연산 대상중 둘다 true여야 true 리턴
        ! 는 true를 false로, flase는 true로 리턴

    <code><pre>
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
    </code></pre>

- 일치연산자
    * 두개의 값이 일치하는지 확인한다.

    <code><pre>
    console.log(1 === 1);
    console.log(1 === 2);
    console.log("javascript" === "javascript");
    console.log("Javascript" === "javascript");
    console.log("Javascript" == "javascript");
    </code></pre>

    > 자바스크립트에는 일치연산자가 2개 있다. ===는 엄격한 일치연산자로서 두개의 값과 데이터타입이 모두 일치해야 한다. 기본적으로 사용하는 == 일치연산자는 그저 값만 비교하고 데이터타입은 고려하지 않는다. 

### 1.6 if (조건문) src/condition.js


if조건문을 활용하면 조건을 만족했을때만 코드를 실행하도록 할 수있다.

<code>if (조건) {조건만족시 실행할 코드}</code>


위와같이 사용하며 조건에 해당하는 결과값으로 boolean이 나와야 한다.

<code><pre>
const distance = 2;
if (distance < 2) {
  console.log("run");
} else if (distance >= 2 && distance < 5) {
  console.log("taxi");
} else {
  console.log("train");
}
</code></pre>

if문에 body를 작성할때 들여쓰기(tab)는 필수적인 요소는 아니다. 하지만 들여쓰기를 통해 가독성을 높이고 명시적으로 if문 코드임을 나타낼수있다.


- else, else if

    if문의 조건을 만족하지 않을때 실행할 코드를 else구문으로 작성할 수 있다.
    
    추가적으로 eles if를 활용하면 보다 많은 조건을 판단하고 코드실행을 할 수 있다.

### 1.7 while (반복문) /src/loop.js
반복문을 활용하면 코드를 반복해서 실행 할 수 있다.

<code>while (조건) {조건을 만족할때 실행할 코드} </code>

이때 반복문 조건이 참(true)일때만 코드가 실행된다.

<code><pre>
let temperature = 20;
while (temperature < 25) {
  console.log(`${temperature}도 정도면 적당한 온도네요.`);
  temperature++;
}
</code></pre>

> 중요한것은 특별한 경우가 아니라면, 반복문의 조건에 들어간 변수를 언제가는 끝날 수 있도록 해야한다는 것이다. 조건에 변화를 주지 않아서 계속해서 true가 리턴되는 경우. 의도하는 것이 아니라면 무한루프에 빠져 프로그램이 끝나지 않는다.

### for (반복문) /src/loop.js

for문은 좀 더 명시적으로 반복문을 표현할 수 있는 문법이다.

<code>for (시작; 조건; 단계) {조건 만족시 실행할 코드}</code>

<code><pre>
for (let num = 1; num <= 10; num++) {
    console.log(`${num}은 입니다.`);
}
</code></pre>

    for문의 실행 순서
    1. num 변수가 선언되고 값이 할당된다. (예제에서는 1로 할당)
    2. num이 10보다 작거나 같은지 연산한다. 이때 결과값이 true면 계속 실행되며, false라면 for문이 종료된다.
    3. true라면 { }안의 코드가 실행된다.
    4. num에 1을 더해서 재 할당한다. 이후 2번과정부터 반복한다.

<br>
##### 반복문과 조건문의 활용

<code><pre>
for (let num = 1; num <= 10; num++) {
  if (num % 3 === 0) {
    console.log(`${num}은 3으로 나누어 떨어집니다.`);
  }
}
</code></pre>


<code><pre>
for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log(`${num}은 짝수입니다.`);
  } else {
    console.log(`${num}은 홀수입니다.`);
  }
}
</code></pre>

반복문 안에서도 조건에 따른 코드실행을 할 수 있다. 

### 1.8 함수 src/function.js

##### 함수의 필요성?
> 함수는 특정 work를 수행하는 코드의 집합이다. 만약 같은일을 반복해야 하는데 같은 코드를 계속 반복한다면 낭비가 될 것이다.

    <code><pre>
    const priceA = 1000
    const priceB = 2000
    // 두 상품가격의 합과 평균을 구해 출력해야 하는 상황.
    const sum1 = priceA + priceB
    console.log(`두 상품의 합계는 ${sum1}입니다.`)
    const avg1 = sum1 / 2
    console.log(`두 상품의 평균은 ${avg1}입니다.`)

    const priceC = 3000
    const priceD = 4000
    // 이번에도 두 상품가격의 평균을 구해서 출력해야 한다면? 위와 동일한 코드를 또 작성해야 한다.
    const sum2 = priceC + priceD
    console.log(`두 상품의 합계는 ${sum2}입니다.`)
    const avg2 = sum2 / 2
    console.log(`두 상품의 평균은 ${avg2}입니다.`)
    </code></pre>


계속해서 작업을 반복해야 한다면 너무나도 비효율적이다. 이렇게 반복되는 작업을 미리 정의해두고 필요할때마다 사용할수는 없을까? 마치 변수에 값을 할당하고 계속 사용하는것처럼! 해당 개념이 함수다.

##### 함수의 선언과 호출


함수또한 변수에 값을 할당했던것과 똑같이 선언하고 해당 함수가 호출되면 실행할 코드의 집합을 저장해주어야 한다.

<code><pre>
    function 함수이름 (매개변수들){
        해당 함수가 호출되면 실행할 코드들
        return 반환값
    }
</code></pre>

매개변수는 함수가 호출될때 호출하는 시점에서 함수에게 전달할수 있는 변수이다. 이 변수를 함수 내에서 사용할수있다. 그리고 반환값은 무조건 명시해 주어야 한다.

<code>const 변수명 = 선언한 함수이름(함수로전달할매개변수들)</code>

<code><pre>
function cal_avg(a, b) {
  console.log(`a + b = ${a + b}`);
  return (a + b) / 2;
}
const avg1 = cal_avg(10, 20);
console.log(avg1);
</code></pre>

그리고 함수를 선언하고 호출할때는 return값을 받을 변수를 지정해주면서 호출한다.


### 1.9 클래스와 객체 src/class.js


데이터의 기본 타입들을 사용하다보면 관련있는 데이터들을 묶어서 한번에 사용하고 싶은 생각이 든다. 예를 들어 노트북은 가격, 이름, 제조사 등 다양한 속성을 갖고있는데 한가지의 기본타입만으로는 표현하기 어렵다.

<code><pre>
    const firstnotebookName = 'Gram'
    const firstnotebookPrice = 2000000
    const firstnotebookCompany = 'LG'
</code></pre>

이때 객체를 이용해 표현할수있다. 객체는 자신만의 속성을 갖고 있고 식별이 가능하다. 위의 firstnotebook도 이름, 가격, 제조사로 자신의 속성이 있고 다른 노트북들과 식별이 가능하다.

##### 클래스(Class)

<code><pre>
    class Notebook {
    constructor(name, price, company) {
        this.name = name;
        this.price = price;
        this.company = company;
        }
    }
    const notebook1 = new Notebook("Macbook", 1000000, "apple");
</code></pre>



클래스는 객체를 만들때 사용하는 틀이라고 이해하면 된다. 클래스를 통해 객체를 생성할 수 있다. 또한 클래스를 통해 동일한 모양을 가진 객체를 만들 수도 있다.

> class 키워드를 통해 클래스를 선언하고 해당 클래스 이름이 다음에 나온다. 이후 중괄호 안에는 생성자(constructor)를 선언하는데 객체가 생성될때 자바스크립트 내부에서 호출되는 함수다. 이를 통해 객체의 초기화를 할 수 있다. this는 객체 자기자신을 의미한다.

<code>const 변수명 = new 클래스이름(생성자에 정의된 매개변수들)</code>

위와 같이 객체를 만들 수 있다.

생성자가 호출되면서 객체가 생성되고, 객체의 속성들에 매개변수의 값들이 할당된다. 이렇게 만든 객체는 변수에 할당을 해서 객체제 접근하고 활용할수있다. 해당 객체에 속성에 접근하기 위해서는 "this"키워드를 통해 접근한다.

<code><pre>
console.log(notebook1);
console.log(notebook1.name);
console.log(notebook1.price);
console.log(notebook1.company);
</code></pre>

#### 메소드(method)

클래스에는 데이터말고 함수도 정의할 수 있다. 객체를 생성하고, 해당 객체의 메소드를 호출함으로서 활용한다.


<code><pre>
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  printInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}`);
  }
}
const pr1 = new Product("mac", 1200000);
pr1.printInfo();
</code></pre>

#### 객체 리터럴

객체 리터럴을 통해 클래스 없이도 객체를 빠르게 생성할수있다.
<code><pre>
const 변수이름 = {
속성이름: 값(데이터),
메소드이름: function () { 메소드가 호출되면 실행할 코드들 }
}
</code></pre>

example
<code><pre>
const computer = {
  name: "MacbookPro",
  pro_price: 2000000,
  printInfo: function () {
    console.log(`name: ${this.name} price: ${this.pro_price}`);
  },
};
computer.printInfo();
</code></pre>


### 1.10 배열 src/array.js

배열 (Array)은 같은 타입의 데이터들을 하나의 변수에 할당해서 활용할수 있는 데이터타입이다.

<code>const array1 = new Array(1,2,3,4,5)</code>
<code>const array2 = [1,2,3,4,5]</code>

배열의 선언은 2가지 방법이 있다. 1번 방법은 원래 배열이라는 객체가 내부적으로 자바스크립트가 갖고 있는 클래스이기에 이를 활용하는 방법이다. 2번은 보편적인 배열선언방법으로 대괄호 안에 데이터를 넣어서 배열을 선언한다.


<code><pre>
const rainbow = ["red", "orange", "yellow", "grenn", "blue", "purple"];
console.log(rainbow[0]);
console.log(rainbow[1]);
console.log(rainbow[2]);
console.log(rainbow[3]);
console.log(rainbow[4]);
console.log(rainbow[5]);
console.log(rainbow.length);
</code></pre>

배열의 각각의 데이터를 요소(element)라고 부른다. 이 요소들의 접근하는 방법은 index를 통해 접근한다. index는 배열안에서 데이터들의 위치(순서)라고 생각하면 된다. 

> 추가적으로 배열의 길이또한 length를 이용해서 알 수 있다.

##### 배열선언이후 요소 추가와 삭제
<code><pre>
rainbow.push("black");
console.log(rainbow);
rainbow.pop();
console.log(rainbow);
</code></pre>

요소추가는 "push", 요소삭제는 "pop"이라는 키워드로 한다.


##### 배열의 반복문

<code><pre>
for (let i = 0; i < rainbow.length; i++) {
  console.log(rainbow[i]);
}
</code></pre>

기본적인 사용법은 위와 같다. 하지만 더욱 간단하게 배열을 반복문으로 사용하는 방법이 있다.

<code><pre>
for (const color of rainbowColors) {
	console.log(color)
}
</code></pre>

위와같이 사용하면 배열의 요소들을 순서대로(0부터)찾아 color라는 변수에 할당한다. 그리고 자동으로 배열의 끝까지 실행되기에 첫번째 for문보다 직관적이고 쉽다.