// // Correct: define classes first
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
//     document.getElementById('output').innerText = `Hello, my name is ${this.name}, I am ${this.age} years old.`;
//   }
// }

// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//     super(name, age); // super() MUST be called before using this
//     this.jobTitle = jobTitle;
//   }

//   jobGreet() {
//     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
//     document.getElementById('output').innerText = `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
//   }
// }

// // Correct: create instances after defining classes
// const person = new Person("Alice", 25);
// const employee = new Employee("Bob", 30, "Manager");

// // Correct: add event listeners AFTER the DOM is ready
// document.getElementById('personBtn').addEventListener('click', () => {
//   person.greet();
// });

// document.getElementById('employeeBtn').addEventListener('click', () => {
//   employee.jobGreet();
// });
