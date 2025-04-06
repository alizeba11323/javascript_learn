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

// function showSum(sum) {
//   return function newFunc(a, b) {
//     return sum(a, b);
//   };
// }

// // const func1 = showSum(sum);
// // const func2 = func1(1, 2);
// // console.log(func1);
// // console.log(func2);

// console.log(showSum(sum)(1, 2));

// function sum(a, b) {
//   return a + b;
// }

//arrow function()
//syntax
//3. hoisting
//4. this
//

// var sum = (...args) => {
//   console.log(arguments);
// };

// sum(1, 2, 3, 4, 5, 6);

// const name = "name someone";
// const age = 25;
// const isMarried = true;
// //object with name of Person

// //creation of object
// const person = {
//   name: "Name Someone",
//   age: 25,
//   isMarried: true,
//   "full name": "User FullName",
//   address: {
//     city: "City One",
//     street: "Street One",
//     "pin code": 821106,
//   },
// };
// //nested object
// // 2 methods
// //1 . dot notation
// //2 [] notation
// // access object property
// console.log(person.name);
// console.log(person["name"]);
// console.log(person.age);
// console.log(person["full name"]);

// console.log(person.address.city);
// console.log(person.address["pincode"]);

// ///update something inside the object

// person.age = 27;

// person.name = "Name Updated!!";

// console.log(person);

// // delete property from object

// delete person.age;

// console.log(person);

// person.address.street = "New Street";
// person["full name"] = "Updated Full name";

// person.address["pin code"] = 821008;

// console.log(person);

// delete person.address["pin code"];

// console.log(person);

// const fullname = "Fullname";
// const person = {
//   name: "Name One",
//   [fullname]: "FullName Value",
//   age: 27,
//   isMarried: true,
//   address: {
//     city: "City One",
//     street: "Street One",
//   },
// };

// console.log(person);

//function called Object.keys()

// const keys = Object.keys(person); //array of values,keys
// const values = Object.values(person);
// const allvalue = Object.entries(person); //keys and value in the form of array [[name,"Name One"],["age",27],["isMarried",true]]
// console.log(keys);
// console.log(values);
// console.log(allvalue);

//object destructuring

// const {
//   age,
//   address: { city },
// } = person;
// console.log(age);

// const {
//   address: { city, street },
// } = person;

// console.log(street);
// // function hasOwnProperty()
// // in operator
// console.log(person.hasOwnProperty("fullname"));
// console.log("name" in person);
// console.log("fullname" in person);
// object -- data structure

1; // for loops
// for of  array and object
// //  for in object only
// const person = {
//   "full name": "Full Name",
//   age: 27,
//   isMarried: true,
// };

// console.log(person["full name"]);
// console.log(person.age);
// console.log(person.isMarried);

// const { ["full name"]: fullname, age } = person;

// console.log(age);
// console.log(fullname);
// // for in loop , access or looping object
// for (key in person) {
//   console.log("key : ", key);
//   console.log("value: ", person[key]);
// }
// object litral
// const person = {
//   name: "Zeba Ali",
// };

// // with the help Object constructor
// //
// const per = new Object({
//   name: "Zeba ali",
// });

// console.log(per.name);

// const student = {
//   name: "Student one",
// };
// //...student  spread operator
// student.age = 20;
// // passed by Reference
// // const studentCopy = { ...student }; // passed by value
// // student.age = 30;

// // console.log(studentCopy);

// //
// const studentTwo = {
//   age: 28,
//   ...student,
// };

// console.log(studentTwo);

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   c: 3,
//   d: 4,
// };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// const obj1 = {
//   a: 1,
//   b: 2,
//   sum: function () {
//     return this.a + this.b;
//   },
// };

// console.log("sum: " + obj1.sum());
// // Object.freeze(obj1);

// // obj1.a = 21;
// // obj1.d = 20;
// // delete obj1.a;
// // console.log(obj1);

// Object.seal(obj1);
// obj1.a = 21;
// obj1.d = 30;
// console.log(obj1);

// console.log(Object.isSealed(obj1));
// const obj2 = {
//   c: 3,
//   d: 4,
// };

// const obj3 = {
//   e: 6,
//   f: 7,
// };
// //static function of the object constructor
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);
// var a = 10;
// console.log(this); // global object // window object

// this.a = 10;
// window.a = 10;

// const obj1 = {
//   a: 1,
//   b: 2,
//   print: function () {
//     console.log(this.a + this.b);
//   },
// };

// // function sum() {
// //   console.log(this.a + this.b)
// // }
// //this substitution
// function sum() {
//   // console.log(this); // undefined non strict mode
//   console.log(this);
//   console.log(this.a + this.b);
// }

// //  call ,bind,apply

// // call
// sum.call(obj1);
// // sum.call(obj1);
// call,apply and bind
// const person = {
//   name: "Ram",
//   age: 20,
// };

// // var name = "New Name";
// // var age = 30;
// function display(isMarried, address) {
//   if (isMarried) {
//     console.log(
//       `my name is ${this.name} , i am ${this.age} years old`,
//       address
//     );
//   } else {
//     console.log(
//       `my name is ${this.name} , i am ${this.age} years old, is Not Married`,
//       address
//     );
//   }
// }

// const displayFn = display.bind(person);
// displayFn(true, "Address");
// const person = {
//   name: "Ram",
//   age: 27,
//   print: function () {
//     const p = () => {
//       console.log(this);
//     };
//     p();
//   },
// };

// person.print();

// factory function and prototype inheritance
// factory function
//constructor function
// function student(studentName, age) {
//   const obj = {};
//   obj.name = studentName;
//   obj.age = age;
//   obj.checkAge = function () {
//     if (this.age > 20) return "YES";
//     else "NO";
//   };
//   return obj;
// }
// const student1 = student("Student One", 20);
// console.log(student1);
// const student1 = {
//   name: "Student One",
//   age: 20,
//   checkAge() {
//     if (this.age > 20) return "YES";
//     else "NO";
//   },
// };
// const student2 = student("Student Two", 21);
// console.log(student2);
// // const student2 = {
// //   name: "Student Two",
// //   age: 21,
// //   checkAge() {
// //     if (this.age > 20) return "YES";
// //     else "NO";
// //   },
// // };

// const student3 = {
//   name: "Student Three",
//   age: 22,
//   checkAge() {
//     if (this.age > 20) return "YES";
//     else "NO";
//   },
// };

// const student4 = {
//   name: "Student Four",
//   age: 23,
//   checkAge() {
//     if (this.age > 20) return "YES";
//     else "NO";
//   },
// };

// const student5 = {
//   name: "Student Five",
//   age: 24,
//   checkAge() {
//     if (this.age > 20) return "YES";
//     else "NO";
//   },
// };

//constructor function

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.checkAge = function () {
//   if (this.age > 20) return "YES";
//   else return "NO";
// };

// const student1 = new Student("Ravi", 20);
// const student2 = new Student("Raj", 23);
// const student3 = new Student("Shaam", 40);
// console.log(student2);
// console.log(student1);
// console.log(student3);

// const arr1 = new Array(1, 2, 3);
// console.log(arr1);
// Array.prototype.myPrintFunc = function () {};
// const arr = [1, 2, 3];
// const names = ["Name One", "Name2", "Name3"];
// console.log(names);

// const obj1 = {
//   name: "Name",
//   age: 21,
// };

// Object.prototype.isMarried = true;

// console.log(obj1.isMarried);
// console.log(obj1);
// // const obj2 = {
// //   name: "name1",
// //   age: 21,
// //   checkAge: function () {},
// // };

// const obj2 = {};

// const obj3 = new Object();

// console.log(obj2.__proto__);
// console.log(Object.prototype);

// const arr2 = [1, 2, 3];
// console.log(arr2.__proto__.__proto__.__proto__);
// console.log(Array.prototype);

//constructor function

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const student = new Function("");

// // const student = new Student("Name One", 24);

// console.dir(Student.__proto__.__proto__);
// console.log(Object.prototype);
// const obj = { name: 1 };
// const obj2 = new Object({ name: 1 });
// Object.prototype;
// __proto__;
// prototype[[prototype]]; // hidden property

// const obj = {
//   name: "Ravi",
// };

// const checkFunc = {
//   talk() {
//     console.log(`${this.name} is talking`);
//   },
// };

// const obj3 = Object.create(checkFunc);

// obj3.talk.call(obj);

// const myObject = {
//   city: "Madrid",
// };
// Object.setPrototypeOf(myObject, {
//   greet: function () {
//     console.log(`Greetings from ${this.city}`);
//   },
// });
// console.log(Object.getPrototypeOf(myObject));

// myObject.greet();

// const obj1 = { name: "Name One" };
// const obj2 = { age: 28 };

// const mergeObj = Object.assign(obj1, obj2);
// console.log(obj1 === mergeObj);

// const o = {
//   a: 1,
//   b: 2,
//   // __proto__ sets the [[Prototype]]. It's specified here
//   // as another object literal.
//   __proto__: {
//     b: 3,
//     c: 4,
//     __proto__: {
//       d: 5,
//     },
//   },
// };

// console.log(o);

// hoisting
// function work behind the send // javascript excutes  the code the schene
//hoisting
// console.log(a);
// console.log(print12);

// var a = 1;
// var b = 2;
// var sum = a + b;
// console.log(sum);

// var print12 = () => {
//   console.log("sum print");
// };

// scope chaining
//scope chaining
// var a = 1; //let const

// function printa() {
//   var b = 2;
//   function printsum() {
//     var c = 3;
//     console.log(b + c);
//   }
//   printsum();
//   console.log(a);
// }

// printa();

// // // let const get its memory
// // whether let const is hoisted or not
//temporal dead zone
// let a = 10; // block scope
// var a = 10; // global scope, function

// const
//block
// compound statement
// {
//   let a = 10;
//   let c = 20;
//   let sum = 30;
// }
// var isMarried = false;
// if (isMarried === true) {

// }
// else console.log("Not isMarried");

// block scope

//block

//shadowing the variables;
// var c = 400; // global c = 400
// console.log(c);
// {
//   let a = 10; // block
//   const b = 20; // block
//   var c = 40;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// let a = 10; //script
// {
//   let a = 20; //block
//   let b = 30;
//   var c = 40;
//   console.log(a);
//   20;
//   console.log(b);
//   30;
//   console.log(c);
//   40;
// }

// console.log(a);
//illegal shadowing
// var a = 10;
// {
//   let a = 20;
// }

// var a = 10; // global scope
// let b = 20; //script
// const c = 30;
// {
//   const c = 10; // block
//   let b = 30; // block
// }

// let const is stored value behind the schene
// shadowing
// illegal
//block blockscope

// let a = 10;
// {
//   let a = 20;
//   {
//     let a = 30;
//     console.log(a);
//   }
//   console.log(a);
// }

//closures

// function outer() {
//   let a = 10;
//   function inner() {
//     let a = 11;
//     console.log(a);
//   }
//   console.log(a);
//   inner();
// }

// outer();
// var a = 10;
// var b = 20;
// function outer() {
//   return function inner() {
//     console.log(a, b);
//   };
// }
// var c = outer();

// console.dir(c);
//stale closure
// async javascript
// callaback
// promises
// async await
// function myClosure() {
//   let count = 1;
//   let message = "Hello " + count;
//   function showMessage() {
//     console.log(message);
//   }
//   function increment() {
//     count += 1;
//     message = "Hello " + count;
//   }

//   return {
//     showMessage,
//     increment,
//   };
// }

// const { showMessage, increment } = myClosure();
// console.dir(showMessage);
// showMessage();
// increment();
// showMessage();

//async javascript

// setTimeout(function () {
//   console.log("Welcome to the website");
// }, 5000);

// console.log("Hello");
// setInterval(function () {
//   console.log("Hello ");
// }, 1000);

// console.log(this);
// console.log(window);

// let a = 10;
// let b = 20;
// let sum = a + b;

// function show() {
//   console.log("Welcome");
// }
// show();
// console.log(sum);

// callback function
//higher order function
// function outer(cb) {}
// //callback function
// function inner() {}

// outer(inner);

//callback function
// callback disadvantages
// promises
// async await

//whenever you want to pass a function to another function  the function you pass its called callback function and the upper function is called higherorder functio
//hoisting

// console.log(a);
// console.log(sum(2, 3));
// var a = 10;

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(x);
// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
// }

// console.log(x);

// function foo() {
//   var x = 1;
//   function bar() {
//     var y = 2;
//     console.log(x);
//     console.log(y);
//   }
//   bar();
//   console.log(x);
//   console.log(y);
// }

// foo();

// var a = 1;
// function a() {}
// console.log(a);
// var let const

// var a = 10;
// // global scope;

// function show() {
//   var a = 20;
//   console.log(a);
// }

// show();

// console.log(a); // undefined
// var a;

// console.log(x); // not defined

// console.log(a);
// var a = 10;
// let a = 20;
// let a = 30;

// let a = 10;
// a = 20;

// const b = 20;
// // console.log(a); //temporal dead zone
// // const a = 10;
// // const a = 20;
// console.log(a);

//variable shadowing
// var p = 20; // global  p = 20
// {
//   var p = 30;
//   console.log(p); //30
// }

// console.log(p); //30

// const a = 10;
// {
//   const a = 30;

//   console.log(a);
// }

// console.log(a);

// var a = 10; //global
// function print() {
//   var a = 30; // function scope
//   console.log(a); //
// }

// print();
// console.log(a);

// // function declaration

// //function expression
// const length = function () {

//     }
// function length() {
//   console.log("length of the function");
// }

// function invokation
// length()

// var a = 20;
// // function declaration/ function statement
// function length() {
//   var a = 10;
//   console.log(a);
// }
// //function invocation
// length();

// //function expression
// const length1 = function () {
//   console.log("Length One");
// };
// length1();

//hoisting;
// a();
// function a() {
//   console.log("Print Function");
// }
// // function expression, name function expression
// var b = function () {
//   console.log("Show Function");
// };
// name function expression

// b();

// //anonymous function

function sum(a, b) {
  return a + b;
}

sum(1, 2);

//arrow function

const sum1 = (a, b) => a + b;

sum1();

//this keyword  in javascript

//first class function

function greeting() {
  console.log("Welcome ");
}

function outer(cb) {
  return function () {};
}

outer(greeting);
