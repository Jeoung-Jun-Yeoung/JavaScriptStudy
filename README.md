# 자바스크립트 문법 공부

간단하게 자바스크립트문법을 공부하면서 내용을 정리해 보았습니다. 여러군데 흩어져있던 자료들중에서 보기 좋은 내용들만 따로 추려 정리해봅니다.

### 1.필수프로그램 설치

본 스터디는 Chrome의 개발자 모드(f12)를 통해 console창에서 진행해도 무방합니다.
그러나 기본적으로 vs코드에서 진행하는것을 추천합니다.
<br>
vscode에서 진행을 하기 위해서는 node.js를 설치합니다.

#### node.js 설치 이유?

node.js는 자바스크립트 언어의 문법에 맞게 코딩을 했을때 컴퓨터가 해석해서 처리할 수 있도록 도와주는 일종의 번역기 역할을 수행합니다. 이를 통해 웹브라우저가 아닌곳에서도 자바스크립트 코드의 실행과 결과확인을 할 수 있습니다.
<br>
[node.js 설치하러 가기] https://nodejs.org/en/

일반적으로 안정화된 버전인 LTS버전의 설치를 권장합니다.

mac os이용자라면 brew를 이용해 설치하면 편리하게 설치할수있습니다.

[brew설치하러가기] https://brew.sh/index_ko


### 1.1 hello world src/hello.js

실습 폴더를 만들어 주고, vscode에서 해당 폴더를 오픈합니다. 이후 해당 폴더에 새로운 파일을 만드는데 확장자를 '파일이름아무거나.js'로 저장합니다.

이후 code를 작성합니다.

<pre><code>console.log("hello world!");</code></pre>

이후 vscode에서 터미널을 실행하고 파일이 위치한 경로로 이동합니다. 이후에
<br>

    node "js파일명"

<br>
명령어를 입력한 후 엔터를 누르면 코드가 실행됩니다.
<br>
축하합니다. 첫 js코드를 작성하고 실행했습니다.

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

자바스크립트에는 const라는 변수유형도 존재한다. const는 let과 달리 재할당할 필요가 없는 경우 사용한다. 해당 변수가 고정된 값을 계속 갖고 있고, 재할당을 하려고 하면 오류가 난다.

<code><pre>
const name = 'jun yeong';
name = 'junmato';
</code></pre>
다음과 같은 코드에서는 에러가 발생한다. const변수에 값을 재 할당 해주었기 때문이다.

> 추가적으로 var라는 변수유형도 존재한다. 두개의 유형과의 차이점은 let과 const는 block단위로 변수의 유효범위가 지정되지만 var는 함수단위로 지정된다는 것이다.

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
