// // // Variables
// // // let, var, const
// // two variables can't have the same name

// // let name = "Lucy";

// // name = "Lucy";

// // // console.log(name); // Print to the console

// //console.log(name); // Print to the console

// // Double/single qutations or back ticks (under your esc on your laptop) will create a string

// // console.log("Hello world");

// // const name1 = "pizza";

// // const topping = "pineapple";

// // Two ways of adding a space
// // console.log(name1 + " " + "pineapple");

// // console.log(name1, topping);

// // template literal, use back tick
// // console.log(`${name1} ${topping}`);

// // string + integar = string
// // console.log("string" + 1);

// // console.log(`${name1} ${topping}`);

// // console.log("32" + "100" + "str");

// // //integer

// // //booleans
// // const num = 1;
// // console.log(Boolean(num));
// // // false, undefined, null, 0

// // let prompt1 = prompt("What is your name?");
// // console.log(prompt1);

// // let whereDidSheGo = prompt("Where did she go?");
// // console.log(`${prompt1} went to the ${whereDidSheGo}`);

// // alert(`${prompt1} went to the ${whereDidSheGo}`);

// // let prompt2 = prompt("What is their name?");
// // let age = prompt("How old are you?");
// // let hobby = prompt("What is your hobby?");

// // alert(`My name is ${prompt2}, I am ${age}. I like playing ${hobby}.`);

// //CONDITIONALS ////// ***THIS IS WHERE CONDITIONALS START***///

// // truthy values

// let x = 1;

// console.log(Boolean(x));
// //conditional operators
// // ===; 1=== 1 is true
// // ==; loose equals; 1 == '1'
// // lose equals; checks if value is the same; regardless of datatype

// // 1 ! == 2; true
// // <, >, !== (NOT EQUALS), <=, >
// // More than or equal to
// // 'a' < 'z'

// // if statement
// // if ( this is true) { then run this}

// if ("collin"=== "collin") {
//     console.log("Hello world")
// }

// // = ; assigment operator
// // == ; loose equals
// // ===; strict equals
// // LOGICAL OPERATOR
// // || && ??
// // || OR
// // && AND
// // ?? NULLISH

// let x = 0
// let y = 1;

// if (x == 0)
// if ( x === 0 && y === 0) {//does x equal 0 and y equal 0; yes, it's true; it'll produce "Hello world"}

// console.log("hello world");

// if ( x === 0 && y === 0 ) { console.log("hello world");}

// let questComplete = false
// let questComplete2 = false
// let slimesDefeated = 0
// // OR OPERATOR

// if (slimesDefeated === 10) { questComplete = true}

// let i = 0
// let k = 1

// if (i === 1 || k === 1) {console.log('hello world')}

// // if this happens or this

// // ELSE; if the statement is false

// let v = 10
// let u = 8

// let login = false

// if ( v === 9){
//     console.log('hello world')
// // } else {
// // console.log("goodbye world");
// // }

// // // if (login === true){
// // // redirect to page
// // } else{
// //     alert("user doesnt exsit");
// // }

// // // else if
// // /* will run if conditions before it are false and specifices a new conditions

// let q = 0;
// if (q === 1) {
//   console.log("hello world");
// } else if (q === 0) {
//   console.log("Goodbye world");
// } else {
//   console.log("something");
// }

// let userName = prompt("Enter your username");

// if (userName === "collin123") {
//   alert("logged in!");
// } else if (userName === "lucy321") {
//   alert("logged in!");
// } else {
//   alert("No account found!");
// }

// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);

// let arr = ["liv", "kamar", "derrick", "jimmy"];
// console.log(arr[randomNumber]);

// if (arr[randomNumber] === "liv") {
//   console.log("Hello world");
// } else if (arr[randomNumber] === "kamar") {
//   console.log("tech youre wrong");
// }

// let randomNumber1 = Math.ceil(Math.random() * 10);
// console.log(randomNumber1);
// let prompt1 = prompt("Guess the number");
// if (prompt1 == randomNumber1) {
//   alert("you are correct");
// } else {
//   alert("you are incorrect");
// }

///variables and data types
// let myName = "Lucycan";
// console.log(myName);
// console.log(typeof myName);

// /// conditionals
// if (myName === "Collin") {
//   console.log("Hello ${myName}");
// } else {
//   console.log(false);
// }

// // for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// /// arrays and methods
// let team = ["Lucycan", "Collin", "Mark", "Cortez"];
// console.log(team);
// console.log(team.length);
// /// push
// console.log(team.push("Derrick", "John"));
// console.log(team);
// /// pop
// console.log(team.pop());
// console.log(team);

// ///join
// console.log(team.join(""));

// ///slice returns a new array
// let team1 = "john,mike,kiersten,lucy";
// console.log(team1);
// let team1Slice = team1.slice();
// console.log(team1Slice);
// console.log(team.slice(1, 3));
// ///split
// let team2 = "john,mike,kiersten,lucy";
// console.log(team1);
// let teamSplit = team1.split(",");
// console.log(teamSplit);
// /// looping thru an array
// let roles = [
//   "Tech Manager",
//   "TechFello",
//   "Placement Manager",
//   "Program Manager",
//   "Intern",
// ];
// console.log(team);
// for (let i = 0; i < team.length; i++) {
//   console.log(`Hello ${team[i]}`);
// }
// // Hi my name is Lucycan and I am the Tech Manager

// // Hi my name is Lucycan and I am the Tech Manager

// for (let i = 0; i < team.length; i++) {
//   console.log(`Hello my name is ${team[i]} and I am the ${roles[i]}`);
// }

// let team3 = prompt("Enter your team names");
// console.log(team3);
// let roles2 = prompt("Enter your team roles");
// console.log(roles2);
//Challenge
// Using only what we have learned thus far, working with
// Enter Team's names and roles in your prompt (s)
// Populate those values in an array (s)
// write a for loop that logs: "Hello My name is <name> and I am the <role>
// You must geta log for ever team member

let team4 = prompt("Enter your teams names:");
let roles4 = prompt("Enter your teams roles");
console.log(team4);
let team4Split = team4.split(",");
let roles4Split = roles4.split(",");
console.log(team4Split);
console.log(roles4Split);
for (i = 0; i < team4Split.length; i++) {
  console.log(
    `Hello my name is ${team4Split[i]} and I am the ${roles4Split[i]}`
  );
}
