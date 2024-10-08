# ES6 classes

### Intro:
_ES6_ (ECMAScript 6) introduced a new syntax for defining classes, making object-oriented programming in JavaScript more intuitive. Classes provide a blueprint for creating objects with specific properties and methods.

Basic syntax
```class MyClass {
  constructor() {
    // Constructor code, initializes properties
  }

  // Methods defined within the class
  method1() {
    // Method implementation
  }
}
```

### Key Concepts

* Constructor: A special method called automatically when a new instance of the class is created. It's used to initialize properties.
* Methods: Functions defined within the class that operate on the object's properties.
* Properties: Variables that belong to the object and store its data.
* Inheritance: The ability for one class (subclass) to inherit properties and methods from another class (superclass).

```class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);   

  }
}

const john = new Person("John Doe", 30);
john.greet(); // Output: Hello, my name is John Doe and I am 30 years old.   
```

Inheritance
```class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Calls the parent class's constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for class.`);
  }
}

const mary = new Student("Mary Smith", 25, "A");
mary.greet(); // Output: Hello, my name is Mary Smith and I am 25 years old.
mary.study(); // Output: Mary Smith is studying for class.
```

Static Methods and Properties
```class MathUtils {
  static PI = 3.14159;

  static calculateArea(radius) {
    return MathUtils.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateArea(5)); // Output: 78.53975
```

Getters and Setters
```class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative.");
    }
    this._radius = value;   

  }
}
```
