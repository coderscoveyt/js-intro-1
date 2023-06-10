let variable = "Hello";
let num = 500;
let num2 = 100.65;
let bool1 = true;
let bool2 = false;
let x = null;
let y = undefined;

let obj = {
  name: "Peter",
  age: 55,
  isMarried: false,
  hasChildren: null
};

obj.name; // "Peter"
obj["age"]; // 55
obj.isMarried; // false
obj["hasChildren"]; // null

let arr = [1, 2, 3, 4, 5];

arr[0]; // 1
arr[1]; // 2
arr[2]; // 3
arr[3]; // 4
arr[4]; // 5

num = -num;
num; // -500

let u = 1, z = 2;
let s = z + u;
s; // 3

let x1 = 2 ** 3;
x1; // 8

let x2 = x1 % 3;
x2; // 2
x2++;
x2; // 3
x2--;
x2 // 2

x2 += 5;
x2 // 7

x2 *= 2;
x2; // 14

x2 -= 15;
x2; // -1

x2 /= 2;
x2; // -0.5

let y1 = "Hello, ", y2 = "world!";
let y3 = y1 + y2;
y3; // "Hello, world!"

let y4 = 100 / "10";
y4; // 10

let y5 = 50 / "Hello";
y5; // NaN

console.log("Thanks for watching :)");
