// // //function declaration // function statement
// // // function sum(...args) {
// // //   let s = 0;
// // //   for (i = 0; i < args.length; i++) {
// // //     s = s + args[i];
// // //   }
// // //   console.log(s);
// // // }

// // function sum() {
// //   console.log(arguments);
// //   let s = 0;
// //   for (i = 0; i < arguments.length; i++) {
// //     s = s + arguments[i];
// //   }
// //   console.log(s);
// // }

// // sum(1, 2, 3, 4, 5, 6, 7, 8, 9); //calling a function
// // // console.log("Sum of value: " + a);

// // //argument, perameters;

// // function expression
// let sum = function () {
//   console.log("Sum Function");
// };

// sum();

// // anonymous function
// // function() {
// //     //
// // }
// //Name function expression
// // function xyz() {}

//function statement/ declaration
//hoisting
// console.log(func1);
// console.log(func2);
// function func1() {
//   console.log("Function One");
// }
// //function expression
// var func2 = function () {
//   console.log("Function Two");
// };

// func2 = undefined;

// first class function , function class citizen

function showSum(sum) {
  return function newFunc(a, b) {
    return sum(a, b);
  };
}

// const func1 = showSum(sum);
// const func2 = func1(1, 2);
// console.log(func1);
// console.log(func2);

console.log(showSum(sum)(1, 2));

function sum(a, b) {
  return a + b;
}
