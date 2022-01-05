// while
let temperature = 20;
while (temperature < 25) {
  console.log(`${temperature}도 정도면 적당한 온도네요.`);
  temperature++;
}

//for
for (let temp = 20; temp < 25; temp++) {
  console.log(`${temp}도 입니다.`);
}

// 반복문과 조건문 활용해보기
for (let num = 1; num <= 10; num++) {
  if (num % 3 === 0) {
    console.log(`${num}은 3으로 나누어 떨어집니다.`);
  }
}

for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log(`${num}은 짝수입니다.`);
  } else {
    console.log(`${num}은 홀수입니다.`);
  }
}
