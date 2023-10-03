let car = {
  color: "Red",
  company: "BMW",
};

function purchaseCar(){
  console.log(`I have purchased ${this.color} ${this.company}`);
}

purchaseCar.call(car); //it will log
purchaseCar.apply(car); //it will log
purchaseCar.bind(car); //it will not log

//Q2 Call

// const obj = { //seprate
//   name: "JavaScript",
// }

// function greet(){ //seprate
//   return `Hello ${this.name}`;
// }

// console.log(greet.call(obj)); //call making bonding on both note: we can also pass arguments as below

const obj = { //seprate
  name: "JavaScript",
};

function greet(version){ //seprate
  return `Hello ${this.name} ${version}`;
}

console.log(greet.call(obj,'ES6')); 

//Q3 Apply (note: it work same as call but it take arguments as an array)

const obj1= {
  name1: "Siddhesh",
  age: 24,
  height: `5.9 ft`,
  weight: `80 kg`,
};

function info(greet1, greet2){
  return `${this.name1},${this.age},${this.height},${this.weight},${greet1},${greet2},${obj.name}`;
}

console.log(info.apply(obj1,['looks good','God of War'])); //note: in apply give arguments in the form of array

//Q4 Bind

var obj2 = {
  name: "Siddhesh",
};

function sayHello(age,profession){
  return `Hi my name is ${this.name} and I am ${age} years old and working as a ${profession}`;
}

//console.log(sayHello.bind(obj2,'24','Software Engineer')); //it will not work it will return whole function

//below is best way to use bind
const bindFunc = sayHello.bind(obj2);

//console.log(bindFunc);//give you the sayHello function see in console
//reusable function
console.log(bindFunc(24,'Software Engineer'));
console.log(bindFunc(30,'lead Engineer'));
console.log(bindFunc(40,'CTO'));

//Q4 Bind

const person = { name: "yash"};

function sayHi(age){
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 14));
//console.log(sayHi.bind(person, 14)); //to fix this see below code

const binfunc = sayHi.bind(person);
console.log(binfunc(24));

//Q5

const age = 10;

var son = {
  name: "Jhon",
  age: 20,
  getAge: function (){
    return this.age;
  }
};

var son2 = {
  age: 15
};

console.log(son.getAge.call(son2)); //15
console.log(son.getAge.apply(son2)); //15
console.log(son.getAge.bind(son2)()); //15

//Q6

var status = "😎";

setTimeout(()=>{
  const status = "😍";

  const data = {
    status: "🐱",
    getStatus(){
      return this.status;
    },
  };

  console.log(data.getStatus()); //🐱
  console.log(data.getStatus.call(this)); //😎

},0)

//Q7

const animals = [
    { species: "Lion", name: "King" },
    { species: "Whale", name: "Queen" },
];

function printAnimals(i){
  this.print = function(){
    console.log("#"+ i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//Q8
const arr = [1,2,3,4,100];
const arr2 = [6,7,8,9,10];

arr.push.apply(arr,arr2);
console.log(arr);

//note: there are many ways to concat an array

//Q9

//best method
const arr3 = [1,2,7,4,9,8,12];
console.log("MAX:"+ Math.max.apply(null,arr3));
console.log("MIN:"+ Math.min.apply(null,arr3));

//another method {just to understand}
let array =[2,45,6,1,89,56,90,0];
let max = -Infinity;
let min = +Infinity;

for (let i = 0; i < array.length; i++) {
  if(array[i] > max){
   max = array[i];
  }

  if(array[i] < min){
    min = array[i];
   }
}

console.log(`max: ${max} and min: ${min}`);

//Q10 Bound Function

// function f(){
//    console.log(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g(); 

//Q11

function ff(){
  console.log(this.name);
}

ff = ff.bind({name: "John"}).bind({name: "Ann"});

ff(); //it will print Jhon not not because it bounded once which initail bounded with

//Q12 fix the line 221 to make code work properly
//Note: to run this code command all above code and then run it

// function checkPassword(success,failed){
//     let password = prompt("password?","");

//     if(password == "Sidd123"){
//       success();
//     }else{
//       failed();
//     }
// }

// let user = {
//   name : 'Siddhesh Bhosale',
//   loginSuccess(){
//     console.log(`${this.name} have successful logged in`);
//   },
//   loginFailed(){
//     console.log(`${this.name} have failed to logged in`);
//   },
// };

// checkPassword(user.loginSuccess,user.loginFailed);

//fixed
// function checkPassword(success,failed){
//   let password = prompt("password?","");

//   if(password == "Sidd123"){
//     success();
//   }else{
//     failed();
//   }
// }

// let user = {
// name : 'Siddhesh Bhosale',
// loginSuccess(){
//   console.log(`${this.name} have successful logged in`);
// },
// loginFailed(){
//   console.log(`${this.name} have failed to logged in`);
// },
// };

// checkPassword(user.loginSuccess.bind(user),user.loginFailed.bind(user));

//below code is Add-on by me to make it real world example
//using Bind 
// function checkPassword(success, failed){
//   let password = prompt(`Enter Password.
//   Warning:
//   - Should contain 4 Character
//   - At least 1 numeric digit
//   - At least 1 capital letter
//   - Must not have space and /
//   - Starting char should not be numbric`, "");

//   function valid(password){
//      if(password.length < 4){
//         return false;
//      }

//      if(!/\d/.test(password)){
//         return false;
//      }

//      if(!isNaN(password.charAt(0))){
//         return false;  
//      }

//      if(!/[A-Z]/.test(password)){
//         return false;
//      }

//      if(/\s|\\/.test(password)){
//         return false;
//      }

//      return true;
//   }
//   valid(password);

//   valid(password) == true ? success() : failed();

//   //OR 

//   // if(valid() === true){
//   //    success();
//   // }else{
//   //    failed();
//   // }
  
// }

// let condition = {
//   name: "Siddhesh Bhosale",
//   loginSuccess(){
//     console.log(`${this.name} have successful logged in`);
//   },
//   loginFailed(){
//     console.log(`${this.name} have failed to logged in`);
//   }
// };

// checkPassword(condition.loginSuccess.bind(condition),condition.loginFailed.bind(condition));

//using call
// function checkPassword(success, failed) {
//   let password = prompt(`Enter Password.
//   Warning:
//   - Should contain 4 Character
//   - At least 1 numeric digit
//   - At least 1 capital letter
//   - must not have space and /
//   - Starting char should not be numeric`, "");

//   function valid(password) {
//     if (password.length < 4) {
//       return false;
//     }

//     if (!/\d/.test(password)) {
//       return false;
//     }

//     if (!isNaN(password.charAt(0))) {
//       return false;
//     }

//     if (!/[A-Z]/.test(password)) {
//       return false;
//     }

//     if (/\s|\\/.test(password)) {
//       return false;
//     }

//     return true; // Password is valid
//   }

//   if (valid(password) == true) {
//     success.call(condition); // Use call to set the context
//   } else {
//     failed.call(condition); // Use call to set the context
//   }
// }

// let condition = {
//   name: "Siddhesh Bhosale",
//   loginSuccess() {
//     console.log(`${this.name} has successfully logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} has failed to log in`);
//   }
// };

// checkPassword(condition.loginSuccess, condition.loginFailed);

//using apply

// function checkPassword(success, failed) {
//   let password = prompt(`Enter Password.
//   Warning:
//   - Should contain 4 Character
//   - At least 1 numeric digit
//   - At least 1 capital letter
//   - must not have space and /
//   - Starting char should not be numeric`, "");

//   function valid(password) {
//     if (password.length < 4) {
//       return false;
//     }

//     if (!/\d/.test(password)) {
//       return false;
//     }

//     if (!isNaN(password.charAt(0))) {
//       return false;
//     }

//     if (!/[A-Z]/.test(password)) {
//       return false;
//     }

//     if (/\s|\\/.test(password)) {
//       return false;
//     }

//     return true; // Password is valid
//   }

//   if (valid(password) == true) {
//     success.apply(condition); // Use apply to set the context
//   } else {
//     failed.apply(condition); // Use apply to set the context
//   }
// }

// let condition = {
//   name: "Siddhesh Bhosale",
//   loginSuccess() {
//     console.log(`${this.name} has successfully logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} has failed to log in`);
//   }
// };

// checkPassword(condition.loginSuccess, condition.loginFailed);


//Q13 Partial application for login function

// function checkPass(ok, fail){
//   let password=prompt("Enter your password","");
//   if(password == "Sidd@123") ok();
//   else fail();
// }

// let userr = {
//   name: "Siddhesh",
//   login(result){
//     console.log(this.name + (result ? " login successful" : " login failed"));
//   },
// };

// checkPass(userr.login.bind(userr, true), userr.login.bind(userr, false));

//Q14 Explicit Binding with Arrow Function

const age1 = 10;

var personn = {
  name: "Yash",
  age1: 20,
  getAgeArrow: () => console.log("ageArrow "+this.age1),
  getAge: function (){
    console.log("agef "+this.age1);
  },
};

var personn2 = { age1: 24 };
personn.getAgeArrow() //undefined note we can use call,apply,bind because we cant manipulate context of arrow function, here this keyword point to window
personn.getAge.call(personn2); //24

//Q15 Polyfill for Call Method (VVVVV IMP Q For Both Senior and Junior)

// const customer = {
//   name: "Yash Bhosale",
//   phone_Number: 9873532432,
//   address: "Pune",
// };

// function order(currency, price){
//    console.log(`Order ID: 1546
// Product Name: Pandor Gaming Keyboard
// Name: ${this.name}
// Phone Number: ${this.phone_Number} 
// Address: ${this.address}
// Price: ${currency}${price}`); 
// }

// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this !== "function"){
//        throw new Error(this + " It's not callable");
//     }

//     context.fn = this;
//     context.fn(...args);
// };

// order.myCall(customer, "₹", 3000);

//Q16 Polyfill for Apply Method (VVVVV IMP Q For Both Senior and Junior)

// const customer = {
//   name: "Yash Bhosale",
//   phone_Number: 9873532432,
//   address: "Pune",
// };

// function order(currency, price){
//    console.log(`Order ID: 1546
// Product Name: Pandor Gaming Keyboard
// Name: ${this.name}
// Phone Number: ${this.phone_Number}
// Address: ${this.address}
// Price: ${currency}${price}`);
// }

// Function.prototype.myApply = function(context = {}, args = []){
//     if(typeof this !== "function"){
//        throw new Error(this + " It's not callable");
//     }

//     if(!Array.isArray(args)){ //checking the array if empty give error
//        throw new TypeError("CreateListFromArrayLike called on non-object");
//     }

//     context.fn = this;
//     context.fn(...args);
// };

// order.myApply(customer, ["₹", 3000]);

//Q17 Polyfill for Bind Method (VVVVV IMP Q For Both Senior and Junior)

const customer = {
  name: "Yash Bhosale",
  phone_Number: 9873532432,
  address: "Pune",
};

function order(currency, price){
   console.log(`Order ID: 1546
Product Name: Pandor Gaming Keyboard
Name: ${this.name}
Phone Number: ${this.phone_Number}
Address: ${this.address}
Price: ${currency}${price}`);
}

Function.prototype.myBind = function(context = {},...args){
    if(typeof this !== "function"){
       throw new Error(this + "cannot be bound as it's not callable");
    }

    context.fn = this;

    return function (...newArgs){
       return context.fn(...args,...newArgs);
    }
};

const bindFun = order.myBind(customer,"₹"); //because bind return and function and bindFun catch it

bindFun(3000); //we can use below also
//bindFun("₹", 3000); //we can pass args here also and above also code line no 535
