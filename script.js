// Person class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // greet method to print a greeting message
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class definition extending Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the parent constructor (Person) to initialize name and age
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // jobGreet method to print a message including job title
  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage:
const person = new Person("Alice", 25);
person.greet();  // Output: Hello, my name is Alice, I am 25 years old.

const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();  // Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
employee.greet();  // Output: Hello, my name is Bob, I am 30 years old. (Inherited from Person class)
