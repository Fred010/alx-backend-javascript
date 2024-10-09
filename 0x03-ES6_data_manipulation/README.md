# ES6 Data Manipulation
_ES6_ (ECMAScript 6) introduced several enhancements to data manipulation in JavaScript, making it more efficient and expressive. This readme will cover some of the key features and their usage.

## Destructuring Assignment
### Array Destructuring:
```const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output: 1 2 3
```
### Object Destructuring:
```const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30
```

## Spread Operator
### Array Spread:
```const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
```
### Object Spread:
```const person = { name: 'John' };
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson); // Output: { name: 'John', age: 30 }
```

## Template Literals
### Multi-line Strings:
```const message = `This is a multi-line
string.`;
console.log(message);
```
### Variable Interpolation:
```const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting);
```

## Computed Property Names
### Dynamic Property Names:
```const key = 'age';
const person = { [key]: 30 };
console.log(person); // Output: { age: 30 }
```
## Arrow Functions
### Concise
```const greet = (name) => `Hello, ${name}!`;
console.log(greet('Bob'));
```
### Implicit Returns
```const square = (x) => x * x;
console.log(square(5));
```

## Enhanced Object Literals
### Shorthand Property Names:
```const name = 'John';
const age = 30;
const person = { name, age };
console.log(person);
```
### Method Definitions:
```const person = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
```
