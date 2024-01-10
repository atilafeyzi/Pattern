// Challenge: Write a JS code to print blow pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const length = 5;

for (let i = 1; i <= length; i++) {
  let string = "";

  for (let j = 1; j <= i; j++) {
    string += j + " ";
  }
  console.log(string);
}
