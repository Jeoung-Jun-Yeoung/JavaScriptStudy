const arr1 = new Array(1, 2, 3, 4, 5);

const arr2 = [1, 2, 3, 4, 5];

console.log(arr1 + " " + arr2);

const rainbow = ["red", "orange", "yellow", "grenn", "blue", "purple"];

console.log(rainbow[0]);
console.log(rainbow[1]);
console.log(rainbow[2]);
console.log(rainbow[3]);
console.log(rainbow[4]);
console.log(rainbow[5]);

console.log(rainbow.length);

rainbow.push("black");
console.log(rainbow);
rainbow.pop();
console.log(rainbow);

for (let i = 0; i < rainbow.length; i++) {
  console.log(rainbow[i]);
}
