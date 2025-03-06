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
const person = {
  name: "Ram",
  age: 27,
  print: function () {
    const p = () => {
      console.log(this);
    };
    p();
  },
};

person.print();

// factory function and prototype inheritance
