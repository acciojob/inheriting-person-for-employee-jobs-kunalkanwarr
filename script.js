// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Employee class inheriting from Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Example usage:

// Creating a Person instance
const person = new Person("Alice", 25);
person.greet();
// Output: Hello, my name is Alice, I am 25 years old.

// Creating an Employee instance
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();
// Output: Hello, my name is Bob, I am 30 years old, and my job title is Manager.
